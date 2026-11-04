
"use server";

import {
  verifyCredentials,
  setAdminSession,
  clearAdminSession,
  isAuthenticated,
} from "@/lib/adminAuth";

import {
  deleteInquiryById,
  updateInquiryStatusById,
} from "@/lib/leadStore";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ALLOWED_STATUSES = [
  "NEW",
  "CONTACTED",
  "ESTIMATE_SENT",
  "WON",
  "CLOSED",
];

export async function loginAdminAction(
  prevState: unknown,
  formData: FormData
) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !username.trim() ||
    !password
  ) {
    return {
      success: false,
      error: "Please provide both username and password.",
    };
  }

  try {
    const isValid = verifyCredentials(username, password);

    if (!isValid) {
      return {
        success: false,
        error: "Invalid username or password.",
      };
    }

    await setAdminSession();

    return { success: true };
  } catch (error) {
    console.error("Admin login error:", error);

    return {
      success: false,
      error: "Admin login is currently unavailable. Please check the server configuration.",
    };
  }
}

export async function logoutAdminAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function updateInquiryStatusAction(
  id: string,
  newStatus: string
) {
  const auth = await isAuthenticated();

  if (!auth) {
    return { success: false, error: "Unauthorized access." };
  }

  if (
    typeof id !== "string" ||
    !id.trim() ||
    !ALLOWED_STATUSES.includes(newStatus)
  ) {
    return { success: false, error: "Invalid enquiry ID or status." };
  }

  try {
    const updated = await updateInquiryStatusById(id, newStatus);

    if (!updated) {
      return {
        success: false,
        error: "Enquiry not found. It may have already been deleted.",
      };
    }

    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Error updating enquiry status:", error);

    return {
      success: false,
      error: "Failed to update enquiry status.",
    };
  }
}

export async function deleteInquiryAction(id: string) {
  const auth = await isAuthenticated();

  if (!auth) {
    return { success: false, error: "Unauthorized access." };
  }

  if (typeof id !== "string" || !id.trim()) {
    return { success: false, error: "Invalid enquiry ID." };
  }

  try {
    const deleted = await deleteInquiryById(id);

    if (!deleted) {
      return {
        success: false,
        error: "Enquiry not found. It may have already been deleted.",
      };
    }

    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Error deleting enquiry:", error);

    return {
      success: false,
      error: "Failed to delete enquiry.",
    };
  }
}
