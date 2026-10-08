
"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Truck,
} from "lucide-react";

const gallery = [
  {
    title: "Road Freight",
    subtitle: "TRANSPORTATION",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Warehouse Logistics",
    subtitle: "SUPPLY CHAIN",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Freight Dispatch",
    subtitle: "COORDINATION",
    image:
      "https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Flatbed Transportation",
    subtitle: "OPEN DECK",
    image:
      "https://images.pexels.com/photos/38095094/pexels-photo-38095094.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cargo Operations",
    subtitle: "FREIGHT HANDLING",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Refrigerated Freight",
    subtitle: "TEMPERATURE CONTROL",
    image:
      "https://unsplash.com/photos/M-Owv7Ax-dE/download?force=true&w=1200",
  },
];

export default function FreightGallery() {
  const sliderRef = useRef(null);
  const reduceMotion = useReducedMotion();

  function scrollGallery(direction) {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      "[data-gallery-card]"
    );

    const distance = card
      ? card.getBoundingClientRect().width + 18
      : 320;

    sliderRef.current.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  return (
    <section
      id="freight-gallery"
      className="relative overflow-hidden bg-[#102e3e] py-24 text-white lg:py-32"
    >
      {/* BACKGROUND */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=90")',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#102e3e]/90 via-[#102e3e]/60 to-[#071e2b]" />

      <div className="container-main relative z-10">
        {/* HEADING */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-white/80">
                Our Gallery
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(34px,4vw,58px)] font-black leading-[1.13] tracking-[-1.5px]">
              The Most Important
              <br />
              Things Which We Can
              <br />
              Show You
            </h2>
          </div>

          {/* ARROWS */}

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              aria-label="Previous gallery images"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-[#f5a000] hover:bg-[#f5a000] hover:text-[#102e3e]"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => scrollGallery(1)}
              aria-label="Next gallery images"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5a000] text-[#102e3e] transition hover:bg-white"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* FULL WIDTH SLIDER */}

      <div
        ref={sliderRef}
        className="relative z-10 flex snap-x snap-mandatory gap-[18px] overflow-x-auto px-5 pb-6 sm:px-10 lg:px-[max(50px,calc((100vw-1240px)/2))] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {gallery.map((item, index) => (
          <div
            key={item.title}
            data-gallery-card
            className="group relative h-[370px] w-[265px] shrink-0 snap-start overflow-hidden bg-[#071e2b] sm:h-[440px] sm:w-[330px]"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071e2b]/95 via-[#071e2b]/20 to-transparent" />

            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f5a000] text-[#102e3e] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#f5a000]">
                {item.subtitle}
              </span>

              <h3 className="mt-3 text-[23px] font-black text-white">
                {item.title}
              </h3>
            </div>

            <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#f5a000] transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>

      {/* BOTTOM CAPTION */}

      <div className="container-main relative z-10 mt-6">
        <p className="text-[11px] text-white/55">
          Illustrative freight and logistics industry photography.
        </p>
      </div>
    </section>
  );
}
