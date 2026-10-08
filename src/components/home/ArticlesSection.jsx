
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Truck,
} from "lucide-react";

const articles = [
  {
    category: "FREIGHT LOGISTICS",
    title: "Understanding The Role Of Freight Dispatch Coordination",
    description:
      "Learn how communication, scheduling details, and organized freight information contribute to transportation operations.",
    image:
      "https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=1100",
    href: "/contact",
  },
  {
    category: "WAREHOUSE OPERATIONS",
    title: "Why Organized Shipment Information Matters",
    description:
      "Explore the importance of clear documentation, equipment requirements, and coordination in freight operations.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=90",
    href: "/contact",
  },
  {
    category: "TRANSPORTATION",
    title: "Choosing The Right Trailer For Freight Requirements",
    description:
      "A simple overview of dry van, reefer, and flatbed equipment and how their transportation needs differ.",
    image:
      "https://images.pexels.com/photos/38095094/pexels-photo-38095094.jpeg?auto=compress&cs=tinysrgb&w=1100",
    href: "/contact",
  },
];

export default function ArticlesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="container-main">
        {/* HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#f5a000]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#102e3e]">
                News & Insights
              </span>
            </div>

            <h2 className="text-[clamp(35px,4vw,58px)] font-black leading-[1.12] tracking-[-1.5px] text-[#14212a]">
              Our Latest Articles
            </h2>

            <p className="mt-5 max-w-[600px] text-[13px] leading-[1.9] text-[#687780]">
              Explore useful topics related to freight
              dispatch, logistics, and transportation
              coordination.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[12px] font-extrabold text-[#102e3e] hover:text-[#e18c00]"
          >
            Ask Us A Question
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        {/* ARTICLE GRID */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              className="group flex h-full flex-col"
            >
              {/* IMAGE */}

              <div className="relative h-[250px] overflow-hidden bg-[#e8ecee]">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 bg-[#f5a000] px-5 py-3 text-[9px] font-black tracking-[1.5px] text-[#102e3e]">
                  {article.category}
                </div>
              </div>

              {/* TEXT */}

              <div className="flex flex-1 flex-col border border-t-0 border-[#e8ecee] bg-white px-6 pb-7 pt-7">
                <div className="mb-5 flex items-center gap-2 text-[10px] font-semibold text-[#879399]">
                  <BookOpen size={14} className="text-[#e18c00]" />
                  Logistics Insights
                </div>

                <h3 className="text-[20px] font-black leading-[1.4] text-[#14212a] transition-colors group-hover:text-[#e18c00]">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 text-[12px] leading-[1.95] text-[#687780]">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-7 inline-flex items-center gap-3 border-t border-[#e8ecee] pt-5 text-[11px] font-extrabold text-[#102e3e] transition-colors hover:text-[#e18c00]"
                >
                  Discuss This Topic
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
