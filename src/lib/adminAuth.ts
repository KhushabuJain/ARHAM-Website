
import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "arham_admin_session";
const SESSION_DURATION = 7 * 24 * 60 * 60;

function getAdminConfig() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_AUTH_SECRET;

  if (!username || !password || !secret || secret.length < 32) {
    throw new Error("Admin authentication environment variables are missing or invalid.");
  }

  return { username, password, secret };
}

export function verifyCredentials(u: string, p: string): boolean {
  const { username, password } = getAdminConfig();

  const submittedUsername = Buffer.from(u.trim());
  const expectedUsername = Buffer.from(username);
  const submittedPassword = Buffer.from(p);
  const expectedPassword = Buffer.from(password);

  const usernameMatches =
    submittedUsername.length === expectedUsername.length &&
    crypto.timingSafeEqual(submittedUsername, expectedUsername);

  const passwordMatches =
    submittedPassword.length === expectedPassword.length &&
    crypto.timingSafeEqual(submittedPassword, expectedPassword);

  return usernameMatches && passwordMatches;
}

export function generateToken(): string {
  const { username, secret } = getAdminConfig();

  const payload = JSON.stringify({
    user: username,
    exp: Date.now() + SESSION_DURATION * 1000,
  });

  const encodedPayload = Buffer.from(payload).toString("base64url");

  const signature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("hex");

  return `${encodedPayload}.${signature}`;
}

export function verifyToken(token: string): boolean {
  try {
    const { username, secret } = getAdminConfig();
    const parts = token.split(".");

    if (parts.length !== 2) return false;

    const [encodedPayload, signature] = parts;

    if (!/^[a-f0-9]{64}$/.test(signature)) return false;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(encodedPayload)
      .digest();

    const actualSignature = Buffer.from(signature, "hex");

    if (
      actualSignature.length !== expectedSignature.length ||
      !crypto.timingSafeEqual(actualSignature, expectedSignature)
    ) {
      return false;
    }

    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf-8")
    );

    return (
      payload.user === username &&
      Number.isFinite(payload.exp) &&
      Date.now() < payload.exp
    );
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    return token ? verifyToken(token) : false;
  } catch {
    return false;
  }
}

export async function setAdminSession(): Promise<void> {
  const token = generateToken();
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION,
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
