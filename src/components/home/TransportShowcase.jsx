
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Truck,
  PackageCheck,
  ShieldCheck,
  Route,
} from "lucide-react";

import { site } from "@/config/site";

const benefits = [
  "Professional freight communication",
  "Organized transportation information",
  "Carrier-focused coordination",
  "Equipment-specific service discussions",
];

export default function TransportShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="transport"
      className="relative overflow-hidden bg-[#102e3e] py-24 text-white lg:py-32"
    >
      {/* BACKGROUND TEXT */}

      <div className="pointer-events-none absolute left-[-4%] top-6 hidden whitespace-nowrap text-[clamp(65px,11vw,170px)] font-black leading-none tracking-[-5px] text-white/[0.045] lg:block">
        TRANSPORT SERVICES
      </div>

      <div className="container-main relative z-10">
        {/* TOP HEADING */}

        <div className="mb-14 flex items-center justify-center gap-5">
          <span className="h-px flex-1 bg-white/15" />

          <Truck
            size={30}
            strokeWidth={1.3}
            className="text-[#f5a000]"
          />

          <h2 className="text-center text-[clamp(30px,4.5vw,64px)] font-black uppercase tracking-[-1.5px]">
            Transport <span className="text-[#f5a000]">Services</span>
          </h2>

          <span className="h-px flex-1 bg-white/15" />
        </div>

        {/* TOP ROW */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90"
              alt="Warehouse freight handling operations"
              loading="lazy"
              className="h-[310px] w-full object-cover sm:h-[420px]"
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#f5a000]">
              Why Work With Us
            </span>

            <h3 className="mt-5 text-[clamp(30px,3.2vw,48px)] font-black leading-[1.15] tracking-[-1px]">
              Delivery On Time And
              <br />
              With Satisfaction
            </h3>

            <p className="mt-6 max-w-[520px] text-[13px] leading-[2] text-white/65">
              Our approach focuses on accurate information,
              thoughtful coordination, and clear
              communication about transportation needs.
              We aim to make the freight inquiry process
              more organized and straightforward.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={22}
                  className="text-[#f5a000]"
                />
                <span className="text-[12px] font-bold">
                  Professional Support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Route
                  size={22}
                  className="text-[#f5a000]"
                />
                <span className="text-[12px] font-bold">
                  Organized Planning
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 text-[12px] font-extrabold text-[#f5a000] hover:text-white"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM ROW */}

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#f5a000]">
              Our Transportation Approach
            </span>

            <h3 className="mt-5 text-[clamp(30px,3.2vw,48px)] font-black leading-[1.15] tracking-[-1px]">
              The Unparalleled Benefits
              <br />
              Of Freight Coordination
            </h3>

            <p className="mt-6 max-w-[520px] text-[13px] leading-[2] text-white/65">
              Every transportation inquiry has different
              requirements. We focus on understanding
              those details and helping organize the
              coordination process.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#f5a000]"
                  />

                  <span className="text-[12px] font-semibold text-white/85">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-[49px] items-center gap-4 rounded-sm bg-[#f5a000] px-7 text-[11px] font-extrabold text-[#102e3e] transition hover:bg-white"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 overflow-hidden lg:order-2"
          >
            <img
              src="https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Freight transportation operations"
              loading="lazy"
              className="h-[310px] w-full object-cover sm:h-[420px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
