
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for freight coordination services and SMS communications.",
};

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "When you contact us or submit an inquiry, we may collect information such as your name, email address, phone number, company name, and transportation service requirements.",
      "We may also collect information you voluntarily provide in your messages and communications.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: [
      "We use information to respond to inquiries, communicate about requested services, coordinate transportation-related matters, and provide customer support.",
      "We may also use information for security, recordkeeping, and applicable legal obligations.",
    ],
  },
  {
    title: "3. SMS Communications and Consent",
    paragraphs: [
      "If you voluntarily opt in to SMS communications, we may send text messages about your transportation inquiries, scheduling, and service updates.",
      "SMS consent is optional and is not a condition of purchasing or requesting services. Message frequency varies. Message and data rates may apply.",
      "You can reply STOP to opt out of SMS messages at any time or HELP for assistance.",
    ],
  },
  {
    title: "4. Mobile Information Sharing",
    paragraphs: [
      "We do not share mobile phone numbers, SMS opt-in information, or SMS consent with third parties or affiliates for their own marketing or promotional purposes.",
      "Information may be shared with service providers only as necessary to deliver requested services or communications, subject to appropriate protections. SMS opt-in data and consent are not shared for third-party marketing.",
    ],
  },
  {
    title: "5. Data Protection",
    paragraphs: [
      "We take reasonable measures to protect personal information from unauthorized access, misuse, or disclosure. No internet transmission or storage system can be guaranteed completely secure.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain personal information only as reasonably necessary for legitimate business purposes, service requests, recordkeeping, and applicable legal requirements.",
    ],
  },
  {
    title: "7. Your Choices",
    paragraphs: [
      "You may contact us to request access to, correction of, or deletion of personal information, subject to applicable laws and recordkeeping requirements.",
      "To stop SMS communications, reply STOP. For SMS assistance, reply HELP or contact us directly.",
    ],
  },
  {
    title: "8. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when our services, practices, or legal obligations change. The updated version will be posted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* HEADER */}

      <section className="bg-[#102e3e] py-20 text-center text-white">
        <div className="container-main">
          <span className="text-[11px] font-black uppercase tracking-[3px] text-[#f5a000]">
            Legal Information
          </span>

          <h1 className="mt-5 text-[clamp(38px,5vw,65px)] font-black tracking-[-2px]">
            Privacy Policy
          </h1>

          <div className="mt-6 flex items-center justify-center gap-3 text-[12px]">
            <Link href="/" className="hover:text-[#f5a000]">
              Home
            </Link>

            <ArrowRight size={14} />

            <span className="text-[#f5a000]">
              Privacy Policy
            </span>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="mb-12 border-l-4 border-[#f5a000] bg-[#f7f9fa] p-7">
            <h2 className="text-[23px] font-black text-[#102e3e]">
              Your Privacy Matters
            </h2>

            <p className="mt-4 text-[13px] leading-[2] text-[#687780]">
              This Privacy Policy describes how{" "}
              <strong>{site.name}</strong> collects, uses,
              and protects personal information in
              connection with its website, freight
              coordination services, and communications.
            </p>
          </div>

          <div className="space-y-11">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="border-b border-[#e8ecee] pb-4 text-[22px] font-black text-[#102e3e]">
                  {section.title}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-[13px] leading-[2.1] text-[#64747d]"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {/* CONTACT */}

            <section>
              <h2 className="border-b border-[#e8ecee] pb-4 text-[22px] font-black text-[#102e3e]">
                9. Contact Us
              </h2>

              <p className="mt-5 text-[13px] leading-[2] text-[#64747d]">
                For questions about this Privacy Policy,
                please contact:
              </p>

              <p className="mt-5 text-[14px] font-black text-[#102e3e]">
                {site.name}
              </p>

              <p className="mt-2 text-[13px] text-[#64747d]">
                {site.address}
              </p>

              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-flex items-center gap-3 text-[13px] font-bold text-[#d88900]"
              >
                <Mail size={17} />
                {site.email}
              </a>
            </section>
          </div>

          <div className="mt-16 border-t border-[#e8ecee] pt-7">
            <Link
              href="/terms"
              className="inline-flex items-center gap-3 text-[13px] font-black text-[#102e3e] hover:text-[#d88900]"
            >
              Read Terms & Conditions
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
