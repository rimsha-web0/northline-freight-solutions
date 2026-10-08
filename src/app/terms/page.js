import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import { site } from "@/config/site";

export const metadata = {
  title: `Terms & Conditions | ${site.name}`,
  description:
    "Terms and Conditions for freight dispatch services, website use, and SMS communications.",
};

const termsSections = [
  {
    number: "01",
    title: "Introduction",
    paragraphs: [
      `Welcome to ${site.name}. These Terms & Conditions govern your use of our website, transportation-related inquiries, and communications with our company.`,
      "By using this website, you agree to comply with these terms and applicable laws. If you do not agree, please discontinue use of the website.",
    ],
  },
  {
    number: "02",
    title: "Our Services",
    paragraphs: [
      `${site.name} provides information about freight dispatch coordination, transportation support, and related logistics services.`,
      "Service availability, pricing, and specific arrangements are subject to confirmation. Submitting a website inquiry does not create a binding service agreement.",
    ],
  },
  {
    number: "03",
    title: "Accuracy of Information",
    paragraphs: [
      "When submitting an inquiry, you agree to provide accurate and current information, including your name, contact details, and relevant transportation requirements.",
      "You are responsible for ensuring that the information you submit does not violate the rights of another person or organization.",
    ],
  },
  {
    number: "04",
    title: "SMS Messaging Program",
    paragraphs: [
      `By voluntarily opting in, you agree to receive SMS messages from ${site.name} regarding your transportation inquiries, scheduling, dispatch coordination, and service updates.`,
      "Messages are intended for customers and individuals who have explicitly requested communications. SMS consent is optional and is not a condition of purchase.",
    ],
  },
  {
    number: "05",
    title: "SMS Opt-In and Consent",
    paragraphs: [
      "You may opt in to SMS communications by selecting the optional, unchecked SMS consent checkbox on our website contact form.",
      "Submitting an inquiry without selecting the SMS checkbox does not constitute consent to receive SMS messages.",
      "We do not treat publicly available phone numbers, purchased contact lists, or general business inquiries as permission to send SMS messages.",
    ],
  },
  {
    number: "06",
    title: "Message Frequency and Charges",
    paragraphs: [
      "Message frequency varies depending on your transportation inquiry, scheduling activity, and requested service updates.",
      "Message and data rates may apply. Your mobile carrier may charge you according to your wireless plan.",
    ],
  },
  {
    number: "07",
    title: "How to Opt Out",
    paragraphs: [
      "You can cancel SMS communications at any time by replying STOP to any message you receive from us.",
      "After opting out, you may receive a final confirmation message. You will not receive further messages from that SMS program unless you provide new consent.",
    ],
  },
  {
    number: "08",
    title: "SMS Help and Support",
    paragraphs: [
      "For help with SMS communications, reply HELP to any message or contact our support team using the email address or phone number listed on this website.",
      "Mobile carriers are not responsible for delayed or undelivered messages.",
    ],
  },
  {
    number: "09",
    title: "Privacy and Information Protection",
    paragraphs: [
      "We handle personal information in accordance with our published Privacy Policy.",
      "Mobile phone numbers and SMS opt-in consent information are not shared with third parties or affiliates for their own marketing or promotional purposes.",
      "Service providers may process information when necessary to operate communications or provide requested services, subject to applicable protections.",
    ],
  },
  {
    number: "10",
    title: "Website Content",
    paragraphs: [
      "Website content, including text, branding, layouts, and graphics, is provided for general informational purposes.",
      "You may not copy, distribute, misuse, or reproduce protected website materials without authorization.",
    ],
  },
  {
    number: "11",
    title: "Limitation of Liability",
    paragraphs: [
      "We aim to maintain accurate and accessible website information but do not guarantee uninterrupted website operation or that all content will always be free from errors.",
      "To the extent permitted by applicable law, our responsibility for website-related issues is limited as provided by law and any applicable service agreement.",
    ],
  },
  {
    number: "12",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms & Conditions to reflect changes in our services, business practices, or legal obligations.",
      "Updated terms will be published on this page. Continued use of the website after an update constitutes acceptance where permitted by applicable law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ======================================= */}
      {/* PAGE HEADER */}
      {/* ======================================= */}

      <section className="relative overflow-hidden bg-[#102e3e] py-20 text-white lg:py-28">

        <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-12 -top-20 h-[350px] w-[350px] rounded-full border border-white/10" />

        <div className="container-main relative z-10 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#f5a000]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[3px] text-[#f5a000]">
              Legal Information
            </span>

            <span className="h-[2px] w-9 bg-[#f5a000]" />
          </div>

          <h1 className="text-[clamp(38px,5vw,70px)] font-black leading-[1.15] tracking-[-2px]">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-[13px] leading-[2] text-white/65">
            Please review the terms governing our website,
            transportation services, and SMS communications.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-[12px]">

            <Link
              href="/"
              className="transition hover:text-[#f5a000]"
            >
              Home
            </Link>

            <ArrowRight size={14} />

            <span className="text-[#f5a000]">
              Terms & Conditions
            </span>

          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* INTRODUCTION */}
      {/* ======================================= */}

      <section className="py-20 lg:py-28">

        <div className="mx-auto max-w-[1050px] px-6">

          <div className="mb-14 grid gap-8 border border-[#e6eaed] bg-[#f8f9fa] p-7 md:grid-cols-[auto_1fr] md:items-center md:p-10">

            <div className="flex h-20 w-20 items-center justify-center bg-[#f5a000]/15 text-[#d88a00]">
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="text-[25px] font-black text-[#102e3e]">
                Understanding Our Terms
              </h2>

              <p className="mt-4 text-[13px] leading-[2] text-[#687780]">
                These Terms & Conditions explain how{" "}
                <strong>{site.name}</strong> operates its
                website and communicates with customers.
                Our SMS program is intended for individuals
                who voluntarily opt in to receive
                transportation-related messages.
              </p>
            </div>

          </div>

          {/* ======================================= */}
          {/* TERMS CONTENT */}
          {/* ======================================= */}

          <div className="space-y-12">

            {termsSections.map((section) => (

              <section
                key={section.number}
                className="border-b border-[#e9edef] pb-10 last:border-b-0"
              >

                <div className="flex items-start gap-5">

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f5a000]/10 text-[17px] font-black text-[#d88a00]">
                    {section.number}
                  </span>

                  <div className="min-w-0">

                    <h2 className="pt-2 text-[21px] font-black leading-[1.4] text-[#102e3e] sm:text-[24px]">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4">

                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[13px] leading-[2.1] text-[#64747d]"
                        >
                          {paragraph}
                        </p>
                      ))}

                    </div>
                  </div>
                </div>
              </section>

            ))}

          </div>

          {/* ======================================= */}
          {/* SMS QUICK REFERENCE */}
          {/* ======================================= */}

          <div className="mt-14 bg-[#102e3e] p-8 text-white md:p-12">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center bg-[#f5a000] text-[#102e3e]">
                <MessageSquare size={27} />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#f5a000]">
                  SMS Information
                </span>

                <h2 className="mt-2 text-[25px] font-black">
                  Messaging Guidelines
                </h2>
              </div>

            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">

              {[
                "Messages relate to transportation inquiries and service updates.",
                "Message frequency varies based on customer activity.",
                "Message and data rates may apply.",
                "Reply STOP to opt out at any time.",
                "Reply HELP for assistance.",
                "SMS consent is not a condition of purchase.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#f5a000]"
                  />

                  <p className="text-[12px] leading-[1.9] text-white/75">
                    {item}
                  </p>
                </div>

              ))}

            </div>

            <Link
              href="/privacy"
              className="mt-9 inline-flex items-center gap-3 text-[12px] font-black text-[#f5a000] transition hover:text-white"
            >
              Read Our Privacy Policy
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* ======================================= */}
          {/* CONTACT INFORMATION */}
          {/* ======================================= */}

          <div className="mt-16">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-black uppercase tracking-[2px] text-[#d88a00]">
                Need Assistance?
              </span>
            </div>

            <h2 className="text-[clamp(30px,3.5vw,43px)] font-black text-[#102e3e]">
              Contact Our Team
            </h2>

            <p className="mt-4 max-w-[650px] text-[13px] leading-[2] text-[#687780]">
              If you have questions about these Terms &
              Conditions or our SMS communications,
              please contact us.
            </p>

            <div className="mt-9 grid gap-5 md:grid-cols-3">

              {/* PHONE */}

              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-4 border border-[#e9edef] p-6 transition hover:border-[#f5a000]"
              >
                <Phone size={23} className="shrink-0 text-[#d88a00]" />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[1px] text-[#89959b]">
                    Phone
                  </p>

                  <p className="mt-2 break-words text-[12px] font-bold text-[#102e3e]">
                    {site.phone}
                  </p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 border border-[#e9edef] p-6 transition hover:border-[#f5a000]"
              >
                <Mail size={23} className="shrink-0 text-[#d88a00]" />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[1px] text-[#89959b]">
                    Email
                  </p>

                  <p className="mt-2 break-all text-[12px] font-bold text-[#102e3e]">
                    {site.email}
                  </p>
                </div>
              </a>

              {/* LOCATION */}

              <div className="flex items-center gap-4 border border-[#e9edef] p-6">
                <MapPin size={23} className="shrink-0 text-[#d88a00]" />

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[1px] text-[#89959b]">
                    Location
                  </p>

                  <p className="mt-2 text-[12px] font-bold text-[#102e3e]">
                    {site.address}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================= */}
          {/* BOTTOM NAVIGATION */}
          {/* ======================================= */}

          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-[#e9edef] pt-8 sm:flex-row sm:items-center">

            <Link
              href="/privacy"
              className="inline-flex items-center gap-3 text-[12px] font-black text-[#102e3e] transition hover:text-[#d88a00]"
            >
              Privacy Policy
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#f5a000] px-7 py-4 text-[12px] font-black text-[#102e3e] transition hover:bg-[#e18c00]"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}
