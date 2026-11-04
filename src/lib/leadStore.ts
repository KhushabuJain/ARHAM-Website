
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import {
  appendInquiryToGoogleSheet,
  isGoogleSheetConfigured,
  getGoogleSheetConfig,
} from "@/lib/googleSheetStore";
import crypto from "crypto";

export { isGoogleSheetConfigured, getGoogleSheetConfig };

export interface InquiryRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  locationArea: string;
  configuration: string;
  budgetRange: string;
  preferredTimeline: string;
  message: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export function isPostgresConfigured(): boolean {
  const url = process.env.POSTGRES_URL;

  return !!(
    url &&
    (url.startsWith("postgres://") ||
      url.startsWith("postgresql://"))
  );
}

function getPostgresClient(): NeonQueryFunction<false, false> {
  const url = process.env.POSTGRES_URL;

  if (!url) {
    throw new Error("POSTGRES_URL is not configured.");
  }

  if (
    !url.startsWith("postgres://") &&
    !url.startsWith("postgresql://")
  ) {
    throw new Error("Invalid PostgreSQL connection URL.");
  }

  return neon(url);
}

let pgTableInitialized = false;

async function ensurePostgresTable(
  sql: NeonQueryFunction<false, false>
) {
  if (pgTableInitialized) return;

  await sql`
    CREATE TABLE IF NOT EXISTS lead_inquiries (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      property_type TEXT NOT NULL,
      location_area TEXT NOT NULL,
      configuration TEXT NOT NULL,
      budget_range TEXT NOT NULL,
      preferred_timeline TEXT NOT NULL,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'NEW',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;

  pgTableInitialized = true;
}

/**
 * Fetch enquiries from Neon PostgreSQL only.
 * Neon is the single source of truth for the ARHAM admin dashboard.
 */
export async function getAllInquiries(): Promise<InquiryRecord[]> {
  const sql = getPostgresClient();

  await ensurePostgresTable(sql);

  const rows = await sql`
    SELECT
      id,
      full_name AS "fullName",
      email,
      phone,
      property_type AS "propertyType",
      location_area AS "locationArea",
      configuration,
      budget_range AS "budgetRange",
      preferred_timeline AS "preferredTimeline",
      message,
      status,
      created_at AS "createdAt",
      updated_at AS "updatedAt"
    FROM lead_inquiries
    ORDER BY created_at DESC;
  `;

  return (rows as unknown as Array<Record<string, unknown>>).map((r) => ({
    id: String(r.id),
    fullName: String(r.fullName),
    email: String(r.email),
    phone: String(r.phone),
    propertyType: String(r.propertyType),
    locationArea: String(r.locationArea),
    configuration: String(r.configuration),
    budgetRange: String(r.budgetRange),
    preferredTimeline: String(r.preferredTimeline),
    message: r.message ? String(r.message) : null,
    status: String(r.status || "NEW"),
    createdAt: new Date(String(r.createdAt)).toISOString(),
    updatedAt: new Date(String(r.updatedAt)).toISOString(),
  }));
}

/**
 * Save a new enquiry to Neon.
 * Google Sheets is only an optional secondary backup.
 */
export async function createInquiry(data: {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  locationArea: string;
  configuration: string;
  budgetRange: string;
  preferredTimeline: string;
  message?: string;
}): Promise<string> {
  const sql = getPostgresClient();

  await ensurePostgresTable(sql);

  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  const record: InquiryRecord = {
    id,
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    propertyType: data.propertyType || "Not Specified",
    locationArea: data.locationArea || "Not Specified",
    configuration: data.configuration || "Not Specified",
    budgetRange: data.budgetRange || "Not Specified",
    preferredTimeline: data.preferredTimeline || "Not Specified",
    message: data.message || "",
    status: "NEW",
    createdAt: now,
    updatedAt: now,
  };

  await sql`
    INSERT INTO lead_inquiries (
      id,
      full_name,
      email,
      phone,
      property_type,
      location_area,
      configuration,
      budget_range,
      preferred_timeline,
      message,
      status,
      created_at,
      updated_at
    ) VALUES (
      ${record.id},
      ${record.fullName},
      ${record.email},
      ${record.phone},
      ${record.propertyType},
      ${record.locationArea},
      ${record.configuration},
      ${record.budgetRange},
      ${record.preferredTimeline},
      ${record.message},
      ${record.status},
      ${record.createdAt},
      ${record.updatedAt}
    );
  `;

  if (isGoogleSheetConfigured()) {
    appendInquiryToGoogleSheet(record).catch((error) => {
      console.error("Google Sheets backup failed:", error);
    });
  }

  return id;
}

/**
 * Delete an enquiry from Neon.
 */
export async function deleteInquiryById(id: string): Promise<boolean> {
  const sql = getPostgresClient();

  await ensurePostgresTable(sql);

  const rows = await sql`
    DELETE FROM lead_inquiries
    WHERE id = ${id}
    RETURNING id;
  `;

  return rows.length > 0;
}

/**
 * Update an enquiry status in Neon.
 */
export async function updateInquiryStatusById(
  id: string,
  newStatus: string
): Promise<boolean> {
  const allowedStatuses = [
    "NEW",
    "CONTACTED",
    "ESTIMATE_SENT",
    "WON",
    "CLOSED",
  ];

  if (!allowedStatuses.includes(newStatus)) {
    throw new Error("Invalid enquiry status.");
  }

  const sql = getPostgresClient();

  await ensurePostgresTable(sql);

  const rows = await sql`
    UPDATE lead_inquiries
    SET
      status = ${newStatus},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING id;
  `;

  return rows.length > 0;
}
