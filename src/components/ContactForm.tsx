
"use client";

import { useState } from "react";
import { submitLeadInquiry } from "@/app/actions/inquiry";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    enquiry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [responseState, setResponseState] = useState<{
    success?: boolean;
    inquiryId?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setResponseState(null);

    try {
      const res = await submitLeadInquiry(formData);

      setResponseState(res);

      if (res.success) {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          enquiry: "",
        });
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setResponseState({
        success: false,
        error: "Unable to submit your enquiry right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">

      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3154A5]">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Project Enquiry</span>
      </div>

      <h3 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
        Discuss Your Engineering Project
      </h3>

      <p className="mb-8 mt-2 text-sm font-light leading-relaxed text-slate-600">
        Tell us about your project requirements. Our team will review your
        enquiry and get in touch to discuss the next steps.
      </p>

      {responseState?.success ? (
        <div className="animate-in rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center fade-in zoom-in duration-300">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400 bg-emerald-100">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>

          <h4 className="font-serif text-xl font-bold text-slate-900">
            Enquiry Submitted Successfully
          </h4>

          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-700">
            Thank you for contacting ARHAM. Your enquiry has been recorded.
            Our team will review your project requirements.
          </p>

          {responseState.inquiryId && (
            <p className="mt-4 text-sm text-slate-700">
              Reference ID:{" "}
              <span className="font-mono font-bold text-[#3154A5]">
                ARH-{responseState.inquiryId.slice(0, 6).toUpperCase()}
              </span>
            </p>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 border-t border-emerald-200 pt-4 text-xs text-slate-600">
            <ShieldCheck className="h-4 w-4 text-[#3154A5]" />
            <span>Thank you for choosing ARHAM.</span>
          </div>

          <button
            type="button"
            onClick={() => setResponseState(null)}
            className="mt-5 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#3154A5] hover:underline"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {responseState?.error && (
            <div className="flex items-center gap-2 rounded-xl border border-rose-300 bg-rose-50 p-4 text-xs text-rose-800">
              <AlertCircle className="h-4 w-4 flex-shrink-0 text-rose-600" />
              <span>{responseState.error}</span>
            </div>
          )}

          {/* Name and Phone */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Full Name *
              </label>

              <input
                type="text"
                required
                maxLength={120}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#3154A5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3154A5]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Contact Phone Number *
              </label>

              <input
                type="tel"
                required
                maxLength={25}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#3154A5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3154A5]"
              />
            </div>
          </div>

          {/* Email and Location */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Email Address *
              </label>

              <input
                type="email"
                required
                maxLength={254}
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#3154A5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3154A5]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Project Location *
              </label>

              <input
                type="text"
                required
                maxLength={200}
                placeholder="City or project location"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#3154A5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3154A5]"
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
              Project Requirements
            </label>

            <textarea
              rows={4}
              maxLength={3000}
              placeholder="Describe your project, required services, timeline, or any specific requirements..."
              value={formData.enquiry}
              onChange={(e) =>
                setFormData({ ...formData, enquiry: e.target.value })
              }
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#3154A5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3154A5]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="brand-button flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold uppercase tracking-wider shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
          >
            {isSubmitting ? (
              <span>Submitting Your Enquiry...</span>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Project Enquiry</span>
              </>
            )}
          </button>

          <p className="text-center text-xs font-light text-slate-500">
            Please provide accurate contact details so our team can respond
            to your enquiry.
          </p>
        </form>
      )}
    </div>
  );
}
