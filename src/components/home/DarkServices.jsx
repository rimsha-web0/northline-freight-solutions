
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Truck,
  Package,
  Snowflake,
  Layers,
} from "lucide-react";

import { site } from "@/config/site";

const serviceIcons = [Truck, Package, Snowflake, Layers];

export default function DarkServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#102e3e] py-24 text-white lg:py-32"
    >
      {/* BACKGROUND */}

      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${site.images.dispatch}")`,
        }}
      />

      <div className="absolute inset-0 -z-10 bg-[#102e3e]/95" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071e2b]/85 to-[#204b5f]/35" />

      {/* CONTENT */}

      <div className="container-main">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* LEFT */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-5"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-white/80">
                Our Services
              </span>
            </div>

            <h2 className="max-w-[470px] text-[clamp(35px,4vw,59px)] font-black leading-[1.13] tracking-[-1.5px]">
              We Provide a
              <br />
              Complete Freight
              <br />
              and Warehouse
              <br />
              Solution
            </h2>

            <p className="mt-7 max-w-[440px] text-[13px] leading-[2] text-white/65">
              From dispatch communication to equipment
              coordination, we support transportation
              operations with a professional and organized
              approach.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-[50px] items-center gap-5 rounded-sm bg-[#f5a000] px-7 text-[11px] font-extrabold text-[#102e3e] transition hover:bg-white"
            >
              Contact Our Team
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          {/* RIGHT SERVICE LIST */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-0"
          >
            {site.services.map((service, index) => {
              const Icon = serviceIcons[index] || Truck;

              return (
                <div
                  key={service.id}
                  className="group flex gap-5 border-b border-white/15 py-7 first:pt-0 last:border-b-0"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-white/25 text-white transition-colors group-hover:border-[#f5a000] group-hover:text-[#f5a000]">
                    <Icon size={27} strokeWidth={1.3} />
                  </div>

                  <div>
                    <h3 className="text-[17px] font-extrabold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[440px] text-[12px] leading-[1.9] text-white/60">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-[#f5a000] transition hover:text-white"
                    >
                      Discuss Service
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
