
import { NextResponse } from "next/server";
import {
  getAllInquiries,
  createInquiry,
  updateInquiryStatusById,
  deleteInquiryById,
} from "@/lib/leadStore";
import { isAuthenticated } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

const ALLOWED_STATUSES = [
  "NEW",
  "CONTACTED",
  "ESTIMATE_SENT",
  "WON",
  "CLOSED",
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function unauthorizedResponse() {
  return NextResponse.json(
    { error: "Unauthorized access" },
    { status: 401 }
  );
}

// ADMIN: Fetch enquiries
export async function GET() {
  try {
    if (!(await isAuthenticated())) {
      return unauthorizedResponse();
    }

    const inquiries = await getAllInquiries();

    return NextResponse.json(
      {
        inquiries,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("API GET /api/inquiries failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}

// PUBLIC: Submit an enquiry from the Contact form
export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isRecord(body)) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const fullName = getString(body.fullName);
    const email = getString(body.email);
    const phone = getString(body.phone);

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    if (
      fullName.length > 150 ||
      email.length > 254 ||
      phone.length > 30 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide valid enquiry details" },
        { status: 400 }
      );
    }

    const id = await createInquiry({
      fullName,
      email,
      phone,
      propertyType: getString(body.propertyType) || "Turnkey Fitout",
      locationArea:
        getString(body.address) ||
        getString(body.locationArea) ||
        "Not Specified",
      configuration: getString(body.configuration) || "Custom Scope",
      budgetRange: getString(body.budgetRange) || "On Discussion",
      preferredTimeline:
        getString(body.preferredTimeline) || "Not Specified",
      message:
        getString(body.enquiry) || getString(body.message),
    });

    return NextResponse.json(
      { success: true, inquiryId: id },
      { status: 201 }
    );
  } catch (error) {
    console.error("API POST /api/inquiries failed:", error);

    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

// ADMIN: Update enquiry status
export async function PATCH(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return unauthorizedResponse();
    }

    const body: unknown = await request.json();

    if (!isRecord(body)) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const id = getString(body.id);
    const status = getString(body.status);

    if (!id || !status) {
      return NextResponse.json(
        { error: "Enquiry ID and status are required" },
        { status: 400 }
      );
    }

    if (!ALLOWED_STATUSES.includes(status as typeof ALLOWED_STATUSES[number])) {
      return NextResponse.json(
        { error: "Invalid enquiry status" },
        { status: 400 }
      );
    }

    const success = await updateInquiryStatusById(id, status);

    if (!success) {
      return NextResponse.json(
        { error: "Enquiry not found or could not be updated" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API PATCH /api/inquiries failed:", error);

    return NextResponse.json(
      { error: "Failed to update enquiry" },
      { status: 500 }
    );
  }
}

// ADMIN: Delete an enquiry
export async function DELETE(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return unauthorizedResponse();
    }

    const url = new URL(request.url);
    let id = getString(url.searchParams.get("id"));

    if (!id) {
      const body: unknown = await request.json().catch(() => ({}));

      if (isRecord(body)) {
        id = getString(body.id);
      }
    }

    if (!id) {
      return NextResponse.json(
        { error: "Enquiry ID is required" },
        { status: 400 }
      );
    }

    const success = await deleteInquiryById(id);

    if (!success) {
      return NextResponse.json(
        { error: "Enquiry not found or could not be deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API DELETE /api/inquiries failed:", error);

    return NextResponse.json(
      { error: "Failed to delete enquiry" },
      { status: 500 }
    );
  }
}
