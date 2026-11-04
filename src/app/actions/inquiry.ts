
"use server";

import { revalidatePath } from "next/cache";
import { createInquiry } from "@/lib/leadStore";

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  enquiry?: string;
  propertyType?: string;
  locationArea?: string;
  configuration?: string;
  budgetRange?: string;
  preferredTimeline?: string;
  message?: string;
}

export async function submitLeadInquiry(data: InquiryFormData) {
  try {
    const fullName = data.fullName?.trim();
    const phone = data.phone?.trim();
    const email = data.email?.trim();

    if (!fullName || !phone || !email) {
      return {
        success: false,
        error: "Please complete all required fields.",
      };
    }

    if (fullName.length > 120 || phone.length > 25 || email.length > 254) {
      return {
        success: false,
        error: "Please check your details and try again.",
      };
    }

    const resolvedAddress =
      data.address?.trim() ||
      data.locationArea?.trim() ||
      "Not Specified";

    const resolvedEnquiry =
      data.enquiry?.trim() ||
      data.message?.trim() ||
      "";

    const inquiryId = await createInquiry({
      fullName,
      email,
      phone,
      propertyType: data.propertyType || "Not Specified",
      locationArea: resolvedAddress,
      configuration: data.configuration || "Not Specified",
      budgetRange: data.budgetRange || "Not Specified",
      preferredTimeline: data.preferredTimeline || "Not Specified",
      message: resolvedEnquiry,
    });

    revalidatePath("/contact");
    revalidatePath("/admin");

    return {
      success: true,
      inquiryId,
    };
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    return {
      success: false,
      error: "We couldn't save your enquiry. Please try again later.",
    };
  }
}
