
import Link from "next/link";
import {
  ArrowUpRight,
  Truck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Globe,
} from "lucide-react";

import { site } from "@/config/site";

// ========================================
// QUICK NAVIGATION LINKS
// ========================================

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Contact Us", href: "/contact" },
];

// ========================================
// FREIGHT SERVICE LINKS
// ========================================

const serviceLinks = [
  { label: "Freight Dispatch", href: "/#services" },
  { label: "Dry Van Coordination", href: "/#services" },
  { label: "Reefer Coordination", href: "/#services" },
  { label: "Flatbed Coordination", href: "/#services" },
];

// ========================================
// SOCIAL MEDIA LINKS
// ========================================

const socialLinks = [
  {
    name: "Facebook",
    url: site.social?.facebook,
    label: "FB",
  },
  {
    name: "Instagram",
    url: site.social?.instagram,
    label: "IG",
  },
  {
    name: "LinkedIn",
    url: site.social?.linkedin,
    label: "IN",
  },
].filter((item) => item.url);

// ========================================
// FOOTER COMPONENT
// ========================================

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#102e3e] text-white">

      {/* ================================= */}
      {/* TOP CALL TO ACTION */}
      {/* ================================= */}

      <section className="relative overflow-hidden border-b border-white/15">

        {/* BACKGROUND IMAGE */}

        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: site.images?.footer
              ? `url("${site.images.footer}")`
              : "none",
          }}
        />

        {/* DECORATIVE CIRCLES */}

        <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute -right-5 -top-20 h-[320px] w-[320px] rounded-full border border-white/[0.05]" />

        {/* CONTENT */}

        <div className="container-main relative z-10 flex flex-col justify-between gap-9 py-16 lg:flex-row lg:items-center lg:py-20">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-white/70">
                Let&apos;s Work Together
              </span>
            </div>

            <h2 className="max-w-[800px] text-[clamp(32px,4vw,57px)] font-black leading-[1.12] tracking-[-1.5px]">
              Ready To Optimize Your
              <br className="hidden sm:block" />
              Logistics And Drive
              <br className="hidden sm:block" />
              Success With Us?
            </h2>

            <p className="mt-6 max-w-[570px] text-[13px] leading-[1.9] text-white/60">
              Connect with our team to discuss freight
              dispatch coordination, transportation
              requirements, and logistics support.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-[56px] shrink-0 items-center justify-center gap-5 self-start bg-[#f5a000] px-8 text-[12px] font-black text-[#102e3e] transition-colors duration-300 hover:bg-white lg:self-auto"
          >
            Contact Us Today
            <ArrowUpRight size={19} />
          </Link>

        </div>
      </section>

      {/* ================================= */}
      {/* MAIN FOOTER */}
      {/* ================================= */}

      <div className="container-main relative z-10 grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.95fr_1.1fr] lg:gap-12 lg:py-20">

        {/* ================================= */}
        {/* COLUMN 1 - COMPANY INFORMATION */}
        {/* ================================= */}

        <div>

          {/* LOGO */}

          <Link
            href="/"
            className="inline-flex items-center gap-3"
          >
            <span className="flex h-12 w-12 items-center justify-center bg-[#f5a000] text-[#102e3e]">
              <Truck size={27} />
            </span>

            <span>
              <span className="block text-[22px] font-black leading-none tracking-[-1px]">
                {site.shortName}
              </span>

              <span className="mt-[6px] block text-[8px] font-extrabold uppercase tracking-[2px] text-white/55">
                Freight & Logistics
              </span>
            </span>
          </Link>

          {/* COMPANY DESCRIPTION */}

          <p className="mt-7 max-w-[330px] text-[12px] leading-[2] text-white/55">
            {site.description ||
              "Professional freight dispatch coordination and logistics support for transportation operations."}
          </p>

          {/* SOCIAL MEDIA */}

          <div className="mt-7 flex flex-wrap items-center gap-3">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name}`}
                title={social.name}
                className="group flex h-11 w-11 items-center justify-center border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a000] hover:bg-[#f5a000] hover:text-[#102e3e]"
              >
                <span className="flex flex-col items-center justify-center gap-[2px]">
                  <Globe
                    size={15}
                    strokeWidth={1.8}
                  />

                  <span className="text-[8px] font-black leading-none">
                    {social.label}
                  </span>
                </span>
              </a>
            ))}

          </div>

        </div>

        {/* ================================= */}
        {/* COLUMN 2 - QUICK LINKS */}
        {/* ================================= */}

        <div>

          <h3 className="mb-7 text-[15px] font-black">
            Quick Links
          </h3>

          <div className="mb-7 h-[3px] w-11 bg-[#f5a000]" />

          <ul className="space-y-4">

            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-[12px] text-white/55 transition-colors duration-300 hover:text-[#f5a000]"
                >
                  <ChevronRight
                    size={13}
                    className="text-[#f5a000] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* ================================= */}
        {/* COLUMN 3 - SERVICES */}
        {/* ================================= */}

        <div>

          <h3 className="mb-7 text-[15px] font-black">
            Our Services
          </h3>

          <div className="mb-7 h-[3px] w-11 bg-[#f5a000]" />

          <ul className="space-y-4">

            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-[12px] leading-[1.7] text-white/55 transition-colors duration-300 hover:text-[#f5a000]"
                >
                  <ChevronRight
                    size={13}
                    className="shrink-0 text-[#f5a000] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* ================================= */}
        {/* COLUMN 4 - CONTACT DETAILS */}
        {/* ================================= */}

        <div>

          <h3 className="mb-7 text-[15px] font-black">
            Contact Information
          </h3>

          <div className="mb-7 h-[3px] w-11 bg-[#f5a000]" />

          <div className="space-y-6">

            {/* ADDRESS */}

            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-[2px] shrink-0 text-[#f5a000]"
              />

              <span className="text-[12px] leading-[1.8] text-white/60">
                {site.address}
              </span>
            </div>

            {/* PHONE */}

            <a
              href={`tel:${site.phoneRaw || site.phone}`}
              className="group flex items-start gap-3"
            >
              <Phone
                size={18}
                className="mt-[2px] shrink-0 text-[#f5a000]"
              />

              <span className="text-[12px] text-white/60 transition-colors duration-300 group-hover:text-[#f5a000]">
                {site.phone}
              </span>
            </a>

            {/* EMAIL */}

            <a
              href={`mailto:${site.email}`}
              className="group flex items-start gap-3"
            >
              <Mail
                size={18}
                className="mt-[2px] shrink-0 text-[#f5a000]"
              />

              <span className="break-all text-[12px] text-white/60 transition-colors duration-300 group-hover:text-[#f5a000]">
                {site.email}
              </span>
            </a>

          </div>

          {/* CONTACT BUTTON */}

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 text-[11px] font-extrabold text-[#f5a000] transition-colors hover:text-white"
          >
            Send An Inquiry
            <ArrowUpRight size={16} />
          </Link>

        </div>
      </div>

      {/* ================================= */}
      {/* BOTTOM FOOTER */}
      {/* ================================= */}

      <div className="border-t border-white/15">

        <div className="container-main flex flex-col items-center justify-between gap-5 py-6 text-center sm:flex-row sm:text-left">

          {/* COPYRIGHT */}

          <p className="text-[11px] text-white/45">
            © 2026 {site.name}. All rights reserved.
          </p>

          {/* LEGAL LINKS */}

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/privacy"
              className="text-[11px] text-white/50 transition-colors duration-300 hover:text-[#f5a000]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[11px] text-white/50 transition-colors duration-300 hover:text-[#f5a000]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="text-[11px] text-white/50 transition-colors duration-300 hover:text-[#f5a000]"
            >
              Contact
            </Link>

          </div>
        </div>
      </div>

    </footer>
  );
}
