
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Truck,
  Users,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import { site } from "@/config/site";

const highlights = [
  {
    number: "01",
    title: "Freight Coordination",
    description:
      "Organized communication for transportation requirements.",
  },
  {
    number: "02",
    title: "Carrier Support",
    description:
      "A practical approach to independent carrier needs.",
  },
  {
    number: "03",
    title: "Equipment Solutions",
    description:
      "Coordination for dry van, reefer, and flatbed operations.",
  },
];

export default function CompanyIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="container-main">
        <div className="grid items-start gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
          {/* LEFT STATISTICS */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10 lg:translate-x-20 lg:border-r lg:border-[#e5e9eb] lg:pr-14"
          >
            {highlights.map((item, index) => (
              <div
                key={item.number}
                className={`${
                  index !== highlights.length - 1
                    ? "border-b border-[#e9ecee] pb-10"
                    : ""
                }`}
              >
                <span className="block text-[65px] font-light leading-none tracking-[-4px] text-[#303a40] sm:text-[78px]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-[17px] font-black text-[#142a36]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[280px] text-[12px] leading-[1.9] text-[#77848b]">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* RIGHT COMPANY INTRO */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#f5a000]" />

              <span className="text-[10px] font-black uppercase tracking-[2px] text-[#172e3b]">
                About Our Company
              </span>
            </div>

            <h2 className="max-w-[610px] text-[clamp(33px,3.6vw,53px)] font-black leading-[1.12] tracking-[-1.5px] text-[#14212a]">
              Company Fueled By Passion
              <br />
              For Logistics.
            </h2>

            <p className="mt-6 max-w-[610px] text-[13px] leading-[2] text-[#687780]">
              {site.name} focuses on professional freight
              dispatch coordination, carrier communication,
              and organized transportation support. We
              believe that clear information and thoughtful
              planning are essential to efficient logistics.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-[47px] items-center gap-4 rounded-sm bg-[#f5a000] px-6 text-[11px] font-black text-[#142a36] transition-colors hover:bg-[#e18c00]"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </Link>

            {/* WAREHOUSE IMAGE */}

            <div className="relative mt-10 overflow-hidden rounded-sm bg-[#e9eef0]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90"
                alt="Warehouse logistics operations"
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[390px]"
              />

              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#102e3e]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
