
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { site } from "@/config/site";

const services = [
  "Freight Dispatch",
  "Dry Van Coordination",
  "Reefer Coordination",
  "Flatbed Coordination",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    smsConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          consentText: form.smsConsent
            ? `I agree to receive SMS messages from ${site.name} regarding my transportation inquiries, scheduling, and service updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of purchase.`
            : null,
          consentVersion: "2026-10-09",
          submittedAt: new Date().toISOString(),
          sourceUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send inquiry.");
      }

      setSubmitted(true);
    } catch {
      setError(
        "Your inquiry could not be sent. Please try again or contact us by email."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">

      {/* PAGE HEADER */}

      <section className="relative overflow-hidden bg-[#102e3e] py-20 text-center text-white lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-40 h-[450px] w-[450px] rounded-full border border-white/10" />

        <div className="container-main relative z-10">
          <span className="text-[11px] font-black uppercase tracking-[3px] text-[#f5a000]">
            Get In Touch
          </span>

          <h1 className="mt-5 text-[clamp(42px,5vw,70px)] font-black tracking-[-2px]">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-[2] text-white/65">
            Have a question about freight dispatch or
            transportation services? Our team is here
            to help.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3 text-[12px]">
            <Link href="/" className="hover:text-[#f5a000]">
              Home
            </Link>

            <ArrowRight size={14} />

            <span className="text-[#f5a000]">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="py-20 lg:py-28">
        <div className="container-main grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* LEFT INFORMATION */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[11px] font-black uppercase tracking-[2px] text-[#102e3e]">
                Contact Information
              </span>
            </div>

            <h2 className="text-[clamp(32px,3.5vw,49px)] font-black leading-[1.15] tracking-[-1px] text-[#14212a]">
              We Are Always
              <br />
              Ready To Help
              <br />
              You.
            </h2>

            <p className="mt-6 max-w-[420px] text-[13px] leading-[2] text-[#687780]">
              Reach out with your transportation inquiry.
              Please provide accurate details so our team
              can understand your requirements.
            </p>

            <div className="mt-10 space-y-7">

              {/* PHONE */}

              <a
                href={`tel:${site.phoneRaw || site.phone}`}
                className="flex items-start gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a000] text-[#102e3e]">
                  <Phone size={23} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] text-[#89959b]">
                    Call Us
                  </p>

                  <p className="mt-2 text-[15px] font-black text-[#102e3e]">
                    {site.phone}
                  </p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a000] text-[#102e3e]">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[1.5px] text-[#89959b]">
                    Email Us
                  </p>

                  <p className="mt-2 break-all text-[15px] font-black text-[#102e3e]">
                    {site.email}
                  </p>
                </div>
              </a>

              {/* ADDRESS */}

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a000] text-[#102e3e]">
                  <MapPin size={23} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] text-[#89959b]">
                    Our Location
                  </p>

                  <p className="mt-2 text-[15px] font-black text-[#102e3e]">
                    {site.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="border border-[#e9edef] bg-[#f8f9f9] p-7 sm:p-10 lg:p-12">

            {submitted ? (

              /* SUCCESS SCREEN */

              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2
                    size={54}
                    strokeWidth={1.5}
                  />
                </div>

                <span className="mt-9 text-[11px] font-black uppercase tracking-[2px] text-[#d98b00]">
                  Inquiry Received
                </span>

                <h2 className="mt-4 text-[clamp(28px,3vw,42px)] font-black leading-[1.2] tracking-[-1px] text-[#102e3e]">
                  Thank You for
                  <br />
                  Your Inquiry!
                </h2>

                <p className="mt-6 max-w-[420px] text-[14px] leading-[2] text-[#687780]">
                  We have received your inquiry.
                  Our team will contact you as soon
                  as possible.
                </p>

                <Link
                  href="/"
                  className="mt-9 inline-flex min-h-[52px] items-center justify-center gap-3 bg-[#f5a000] px-8 text-[12px] font-black text-[#102e3e] transition hover:bg-[#e18c00]"
                >
                  Back to Home
                  <ArrowRight size={17} />
                </Link>
              </div>

            ) : (

              /* CONTACT FORM */

              <>
                <span className="text-[10px] font-black uppercase tracking-[2px] text-[#e18c00]">
                  Send A Message
                </span>

                <h2 className="mt-3 text-[30px] font-black text-[#102e3e]">
                  Request Information
                </h2>

                <p className="mt-3 text-[12px] leading-[1.9] text-[#687780]">
                  Complete the form below and our team
                  will get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-9 space-y-5"
                >

                  {/* NAME + EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[12px] font-bold text-[#102e3e]"
                      >
                        Full Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          updateField("name", e.target.value)
                        }
                        placeholder="Your full name"
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[12px] font-bold text-[#102e3e]"
                      >
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          updateField("email", e.target.value)
                        }
                        placeholder="you@example.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* PHONE + SERVICE */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-[12px] font-bold text-[#102e3e]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          updateField("phone", e.target.value)
                        }
                        placeholder="+1 555 000 0000"
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-2 block text-[12px] font-bold text-[#102e3e]"
                      >
                        Service *
                      </label>

                      <select
                        id="contact-service"
                        required
                        value={form.service}
                        onChange={(e) =>
                          updateField("service", e.target.value)
                        }
                        className="contact-input"
                      >
                        <option value="">
                          Select Service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[12px] font-bold text-[#102e3e]"
                    >
                      Message *
                    </label>

                    <textarea
                      id="contact-message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={(e) =>
                        updateField("message", e.target.value)
                      }
                      placeholder="Tell us about your transportation needs..."
                      className="contact-input"
                    />
                  </div>

                  {/* OPTIONAL SMS CONSENT */}

                  <div className="border border-[#dce3e6] bg-white p-5">
                    <label className="flex cursor-pointer items-start gap-3">

                      <input
                        type="checkbox"
                        checked={form.smsConsent}
                        onChange={(e) =>
                          updateField(
                            "smsConsent",
                            e.target.checked
                          )
                        }
                        className="mt-1 h-5 w-5 shrink-0 accent-[#f5a000]"
                      />

                      <span className="text-[11px] leading-[1.9] text-[#52636d]">
                        I agree to receive SMS messages from{" "}
                        <strong>{site.name}</strong> regarding
                        my transportation inquiries, scheduling,
                        and service updates. Message frequency
                        varies. Message and data rates may apply.
                        Reply STOP to opt out or HELP for
                        assistance. Consent is not a condition
                        of purchase. View our{" "}

                        <Link
                          href="/privacy"
                          className="font-bold text-[#102e3e] underline"
                        >
                          Privacy Policy
                        </Link>{" "}

                        and{" "}

                        <Link
                          href="/terms"
                          className="font-bold text-[#102e3e] underline"
                        >
                          Terms & Conditions
                        </Link>
                        .
                      </span>
                    </label>
                  </div>

                  {/* ERROR */}

                  {error && (
                    <p
                      role="alert"
                      className="border border-red-200 bg-red-50 p-4 text-[12px] text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex min-h-[55px] w-full items-center justify-center gap-4 bg-[#f5a000] px-7 text-[12px] font-black text-[#102e3e] transition-colors hover:bg-[#e18c00] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        Sending...
                        <Loader2
                          size={17}
                          className="animate-spin"
                        />
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send size={17} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
