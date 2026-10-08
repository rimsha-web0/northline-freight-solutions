
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Truck,
} from "lucide-react";

import { site } from "@/config/site";

export default function HomeContactSection() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    smsConsent: false,
  });

  function updateField(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Freight Service Inquiry - ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || "Not provided"}\n` +
      `Service: ${form.service}\n` +
      `SMS Consent: ${form.smsConsent ? "Yes" : "No"}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="home-contact"
      className="relative overflow-hidden bg-[#f6f7f7] py-24 lg:py-32"
    >
      <div className="container-main">
        <div className="grid overflow-hidden shadow-[0_25px_70px_rgba(10,35,50,0.09)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT DARK PANEL */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-[#102e3e] p-8 text-white sm:p-12 lg:p-14"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url("${site.images.contactBanner}")`,
              }}
            />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#f5a000]" />

                <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-white/75">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-[clamp(34px,3.8vw,54px)] font-black leading-[1.13] tracking-[-1.5px]">
                Have Any
                <br />
                Questions?
                <br />
                <span className="text-[#f5a000]">
                  Contact Us.
                </span>
              </h2>

              <p className="mt-7 max-w-[380px] text-[13px] leading-[2] text-white/65">
                Have questions about freight coordination,
                equipment, or transportation support?
                Send us your inquiry and discuss your needs.
              </p>

              {/* CONTACT DETAILS */}

              <div className="mt-12 space-y-7">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#f5a000]">
                    <Phone size={20} />
                  </span>

                  <span>
                    <span className="block text-[10px] uppercase tracking-[1.5px] text-white/45">
                      Phone Number
                    </span>

                    <span className="mt-2 block text-[14px] font-extrabold">
                      {site.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#f5a000]">
                    <Mail size={20} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[1.5px] text-white/45">
                      Email Address
                    </span>

                    <span className="mt-2 block break-all text-[13px] font-extrabold">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-[#f5a000]">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <span className="block text-[10px] uppercase tracking-[1.5px] text-white/45">
                      Our Location
                    </span>

                    <span className="mt-2 block text-[13px] font-extrabold">
                      {site.address}
                    </span>
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-12 inline-flex items-center gap-3 text-[12px] font-extrabold text-[#f5a000] hover:text-white"
              >
                Visit Contact Page
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT FORM */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 sm:p-12 lg:p-14"
          >
            <div className="mb-9">
              <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#e18c00]">
                Send An Inquiry
              </span>

              <h3 className="mt-3 text-[29px] font-black tracking-[-1px] text-[#14212a]">
                Request Information
              </h3>

              <p className="mt-3 text-[12px] leading-[1.9] text-[#687780]">
                Fill in the details below to prepare an email
                to our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="home-name"
                    className="mb-2 block text-[11px] font-extrabold text-[#14212a]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="home-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Your full name"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="home-email"
                    className="mb-2 block text-[11px] font-extrabold text-[#14212a]"
                  >
                    Email Address *
                  </label>

                  <input
                    id="home-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
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
                    htmlFor="home-phone"
                    className="mb-2 block text-[11px] font-extrabold text-[#14212a]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="home-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+1 555 000 0000"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="home-service"
                    className="mb-2 block text-[11px] font-extrabold text-[#14212a]"
                  >
                    Select Service *
                  </label>

                  <select
                    id="home-service"
                    required
                    value={form.service}
                    onChange={(event) =>
                      updateField("service", event.target.value)
                    }
                    className="contact-input"
                  >
                    <option value="">
                      Choose a service
                    </option>

                    {site.services.map((service) => (
                      <option
                        key={service.id}
                        value={service.title}
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="home-message"
                  className="mb-2 block text-[11px] font-extrabold text-[#14212a]"
                >
                  Your Message *
                </label>

                <textarea
                  id="home-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Tell us about your transportation requirements..."
                  className="contact-input"
                />
              </div>

              {/* SMS CONSENT */}

              {site.sms.enabled && (
                <div className="border border-[#e8ecee] bg-[#f9faf9] p-4">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={(event) =>
                        updateField(
                          "smsConsent",
                          event.target.checked
                        )
                      }
                      className="sms-checkbox mt-1"
                    />

                    <span className="text-[11px] leading-[1.85] text-[#687780]">
                      I agree to receive SMS messages from{" "}
                      {site.legalName} about my transportation
                      inquiries, scheduling, and service
                      updates. Message frequency varies.
                      Message and data rates may apply.
                      Reply STOP to opt out or HELP for
                      assistance. Consent is not a condition
                      of purchase. See our{" "}
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
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="flex min-h-[54px] w-full items-center justify-center gap-4 bg-[#f5a000] px-7 text-[12px] font-black text-[#102e3e] transition-colors hover:bg-[#e18c00]"
              >
                Prepare Email Inquiry
                <Send size={17} />
              </button>

              <p className="text-center text-[10px] leading-[1.8] text-[#8a969b]">
                This opens your email application.
                Your inquiry is not submitted automatically.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
