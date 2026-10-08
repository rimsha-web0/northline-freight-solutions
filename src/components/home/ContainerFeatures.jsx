
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  Minus,
  Container,
  Truck,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    title: "Professional Freight Coordination",
    description:
      "We focus on organizing freight requirements, discussing transportation details, and supporting clear communication throughout the coordination process.",
  },
  {
    title: "Carrier-Focused Communication",
    description:
      "Every carrier has different equipment, routes, and preferences. Our approach starts with understanding those needs.",
  },
  {
    title: "Organized Shipment Information",
    description:
      "We help keep important transportation details structured, including relevant schedules, equipment information, and service requirements.",
  },
  {
    title: "Practical Transportation Support",
    description:
      "Our coordination services are designed around straightforward communication and practical freight operations.",
  },
];

export default function ContainerFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="container-main">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* LEFT CONTAINER VISUAL */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative flex min-h-[370px] items-center justify-center sm:min-h-[480px]">
              {/* BACKGROUND ACCENTS */}

              <div className="absolute left-[5%] top-[13%] h-[75%] w-[75%] rounded-full bg-[#f7f8f8]" />

              <div className="absolute bottom-[13%] left-[3%] h-[5px] w-[70%] bg-[#f5a000]" />

              {/* CONTAINER IMAGE */}

              <motion.img
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1500&q=90"
                alt="Freight shipping containers"
                loading="lazy"
                className="relative z-10 h-[310px] w-full rounded-sm object-cover shadow-[0_25px_55px_rgba(0,0,0,0.12)] sm:h-[400px]"
              />

              {/* FLOATING LABEL */}

              <div className="absolute bottom-0 right-0 z-20 bg-[#f5a000] px-6 py-5 text-[#102e3e] shadow-xl">
                <Container size={29} strokeWidth={1.5} />

                <p className="mt-2 text-[13px] font-black">
                  FREIGHT
                  <br />
                  SOLUTIONS
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#102e3e]">
                Our Advantages
              </span>
            </div>

            <h2 className="max-w-[530px] text-[clamp(34px,3.7vw,54px)] font-black leading-[1.12] tracking-[-1.5px] text-[#14212a]">
              Unusual Things We Do
              <br />
              Work Efficiently
            </h2>

            <p className="mt-6 max-w-[500px] text-[13px] leading-[2] text-[#687780]">
              We believe effective logistics coordination
              begins with the right information, practical
              planning, and professional communication.
            </p>

            {/* ACCORDION */}

            <div className="mt-9 border-t border-[#e4e9eb]">
              {features.map((feature, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={feature.title}
                    className="border-b border-[#e4e9eb]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`feature-answer-${index}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span
                        className={`text-[13px] font-extrabold transition-colors ${
                          isOpen
                            ? "text-[#e18c00]"
                            : "text-[#172e3b]"
                        }`}
                      >
                        {feature.title}
                      </span>

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          isOpen
                            ? "bg-[#f5a000] text-[#102e3e]"
                            : "bg-[#f1f3f4] text-[#102e3e]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={15} />
                        ) : (
                          <Plus size={15} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`feature-answer-${index}`}
                          initial={
                            reduceMotion
                              ? false
                              : { height: 0, opacity: 0 }
                          }
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[470px] pb-6 text-[12px] leading-[1.95] text-[#687780]">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-[12px] font-extrabold text-[#102e3e] transition-colors hover:text-[#e18c00]"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
