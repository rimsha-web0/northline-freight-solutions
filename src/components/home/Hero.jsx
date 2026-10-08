
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import { site } from "@/config/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="reference-hero relative isolate overflow-hidden bg-white"
    >
      {/* BACKGROUND DESIGN */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(65deg, transparent 0px, transparent 76px, rgba(15,37,48,0.045) 77px, transparent 78px)",
        }}
      />

      {/* MAIN HERO CONTENT */}

      <div className="container-main relative z-10 mx-auto grid min-h-[690px] items-center gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0 lg:py-12">

        {/* ================================ */}
        {/* LEFT SIDE - HEADING AND BUTTONS */}
        {/* ================================ */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -40 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 lg:-translate-y-08"
        >

          {/* SMALL TOP HEADING */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#f59a23]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#142a36]">
              {site.hero.eyebrow}
            </span>
          </div>

          {/* MAIN HEADING */}

          <h1 className="max-w-[650px] text-[clamp(42px,5.5vw,78px)] font-black leading-[1.02] tracking-[-2.8px] text-[#10171c]">
            Around the
            <br />
            World
            <br />
            Transportation
            <br />
            Services
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-7 max-w-[460px] text-[13px] leading-[2] text-[#66737c]">
            {site.hero.description}
          </p>

          {/* BUTTONS */}

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#services"
              className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-sm bg-[#f5a000] px-7 text-[11px] font-extrabold text-[#14232c] transition hover:bg-[#e18c00]"
            >
              Explore Services
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-5 rounded-sm bg-[#143343] px-7 text-[11px] font-extrabold text-white transition hover:bg-[#071924]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>

        {/* ================================ */}
        {/* RIGHT SIDE - YOUR IMAGE */}
        {/* ================================ */}

        <div className="relative flex min-h-[380px] items-center justify-center lg:min-h-[580px]">

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 90 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative z-10 flex w-full items-center justify-center"
          >

            {/* ==================================== */}
            {/* APNI IMAGE YAHA SE CHANGE KAREIN */}
            {/* ==================================== */}

            {/*
              IMAGE LOCATION:
              public/image/main.jpg

              Agar baad mein picture change karni ho
              to neeche src change kar dein.

              Example:
              src="/image/new-truck.jpg"
            */}

            <img
              src="/images/main.jpg"
              alt="Freight transportation truck"
              className="block h-auto w-full max-w-[850px] object-contain"
            />

            {/* IMAGE END */}

          </motion.div>
        </div>
      </div>

      {/* BOTTOM BORDER */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#edf0f1]" />
    </section>
  );
}
