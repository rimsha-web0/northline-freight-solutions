
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  MessageSquareQuote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    title: "Clear Communication",
    quote:
      "Professional freight coordination starts with clear information. Our goal is to keep transportation discussions organized, practical, and easy to understand.",
    name: "Service Philosophy",
    role: "COMMUNICATION",
  },
  {
    title: "Organized Operations",
    quote:
      "Every shipment has its own requirements. A structured approach to schedules, equipment details, and communication helps support better coordination.",
    name: "Our Approach",
    role: "OPERATIONS",
  },
  {
    title: "Carrier-Focused Support",
    quote:
      "Understanding the carrier's equipment, preferred lanes, and service needs is an important part of planning meaningful freight coordination.",
    name: "Our Commitment",
    role: "CARRIER SUPPORT",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = testimonials[activeIndex];

  function changeSlide(direction) {
    setActiveIndex((current) =>
      (current + direction + testimonials.length) %
      testimonials.length
    );
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#101820] py-24 text-white lg:py-32"
    >
      {/* BACKGROUND DETAILS */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute -right-10 -top-10 h-[300px] w-[300px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[5px] w-full bg-[#f5a000]" />

      <div className="container-main relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* LEFT CONTENT */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-white/70">
                Our Service Philosophy
              </span>
            </div>

            <h2 className="text-[clamp(35px,4vw,59px)] font-black leading-[1.12] tracking-[-1.5px]">
              What Matters
              <br />
              Most To Our
              <br />
              <span className="text-[#f5a000]">
                Customers.
              </span>
            </h2>

            <p className="mt-7 max-w-[430px] text-[13px] leading-[2] text-white/60">
              Our approach to freight coordination is
              centered around professionalism, communication,
              and understanding transportation needs.
            </p>

            <div className="mt-9 flex gap-3">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                aria-label="Previous statement"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-[#f5a000] hover:bg-[#f5a000] hover:text-[#102e3e]"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={() => changeSlide(1)}
                aria-label="Next statement"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5a000] text-[#102e3e] transition-colors hover:bg-white"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SLIDER */}

          <div className="relative">
            <div className="absolute -top-7 right-8 text-[#f5a000]/20">
              <Quote size={105} strokeWidth={1} />
            </div>

            <div className="relative min-h-[365px] overflow-hidden border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -20 }
                  }
                  transition={{ duration: 0.35 }}
                >
                  <MessageSquareQuote
                    size={35}
                    className="text-[#f5a000]"
                  />

                  <span className="mt-7 block text-[10px] font-extrabold uppercase tracking-[2px] text-[#f5a000]">
                    {active.role}
                  </span>

                  <h3 className="mt-3 text-[24px] font-black text-white">
                    {active.title}
                  </h3>

                  <blockquote className="mt-6 text-[15px] leading-[2] text-white/80 sm:text-[17px]">
                    “{active.quote}”
                  </blockquote>

                  <div className="mt-9 border-t border-white/15 pt-6">
                    <p className="text-[13px] font-extrabold text-white">
                      {active.name}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-white/45">
                      WISE CERTIFY
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* DOTS */}

            <div className="mt-6 flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show statement ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-[5px] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-[#f5a000]"
                      : "w-5 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-[10px] text-white/40">
          These are company service statements, not verified customer testimonials.
        </p>
      </div>
    </section>
  );
}
