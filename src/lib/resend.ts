
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "ARHAM <notifications@arhamdesign.com>";
const ADMIN_EMAIL = "ho@arhamdesign.com";

interface InquiryEmailData {
  fullName: string;
  email: string;
  phone: string;
  propertyType?: string;
  locationArea?: string;
  configuration?: string;
  budgetRange?: string;
  preferredTimeline?: string;
  message?: string;
  inquiryId: string;
}

export async function sendInquiryEmails(data: InquiryEmailData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const {
    fullName,
    email,
    phone,
    propertyType,
    locationArea,
    configuration,
    budgetRange,
    preferredTimeline,
    message,
    inquiryId,
  } = data;

  const safe = (value?: string) =>
    (value || "Not specified").replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char]! );
  const details = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #172554;">New Website Enquiry - ARHAM</h2>

      <p><strong>Name:</strong> ${safe(fullName)}</p>
      <p><strong>Email Address:</strong> ${safe(email)}</p>
      <p><strong>Contact Phone Number:</strong> ${safe(phone)}</p>
      <p><strong>Project Location:</strong> ${safe(locationArea)}</p>
      <p><strong>Project Requirements:</strong> ${safe(message)}</p>

      <hr />
      <p style="font-size: 12px; color: #777;">
        This enquiry was submitted through the ARHAM website.
      </p>
      <p>
        <a href="https://www.arhamdesign.com/">www.arhamdesign.com</a>
      </p>
    </div>
  `;

  const results = await Promise.allSettled([
    resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New ARHAM Enquiry - ${fullName}`,
      html: details,
    }),

    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We have received your enquiry | ARHAM",
      html: `
        <h2>Thank you for contacting ARHAM!</h2>
        <p>Dear ${safe(fullName)},</p>
        <p>We have successfully received your enquiry.</p>
        <p>Our team will review your requirements and get in touch with you.</p>
        <p><strong>Your reference ID:</strong> ${safe(inquiryId)}</p>
        <p>Regards,<br/>Team ARHAM</p>
        <p>Integrated Engineering Solutions</p>
        <p><a href="https://www.arhamdesign.com/">www.arhamdesign.com</a></p>
      `,
    }),
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(
        `ARHAM email ${index === 0 ? "admin notification" : "customer confirmation"} failed:`,
        result.reason
      );
    } else if (result.value.error) {
      console.error(
        `ARHAM email ${index === 0 ? "admin notification" : "customer confirmation"} failed:`,
        result.value.error
      );
    }
  });
}
