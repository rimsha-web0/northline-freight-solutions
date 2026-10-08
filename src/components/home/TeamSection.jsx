
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Users,
} from "lucide-react";

const team = [
  {
    name: "Michael Carter",
    role: "OPERATIONS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=650&q=85",
  },
  {
    name: "Sarah Mitchell",
    role: "COORDINATION",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=650&q=85",
  },
  {
    name: "Daniel Brooks",
    role: "CUSTOMER SUPPORT",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=650&q=85",
  },
  {
    name: "Emily Parker",
    role: "LOGISTICS",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=650&q=85",
  },
  {
    name: "Emily Parker",
    role: "COMMUNICATION",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=650&q=85",
  },
  {
    name: "Robert Wilson",
    role: "TRANSPORTATION",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=650&q=85",
  },
];

export default function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#fafafa] py-24 lg:py-32"
    >
      <div className="container-main">
        {/* HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#f5a000]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-[#102e3e]">
              Meet Our Team
            </span>

            <span className="h-[2px] w-8 bg-[#f5a000]" />
          </div>

          <h2 className="text-[clamp(34px,4vw,55px)] font-black leading-[1.12] tracking-[-1.5px] text-[#14212a]">
            Meet Our The Best Crew
          </h2>

        </motion.div>

        {/* TEAM GRID */}

        <div className="grid gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
              }}
              className="group"
            >
              <div className="flex items-center gap-5">
                {/* PHOTO */}

                <div className="relative h-[190px] w-[48%] shrink-0 overflow-hidden bg-[#e6e8e9] sm:h-[215px]">
                  <img
                    src={member.image}
                    alt={`Sample professional portrait ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#f5a000] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* DETAILS */}

                <div className="min-w-0 flex-1">
                  <span className="mb-3 block text-[9px] font-extrabold tracking-[1.7px] text-[#e18c00]">
                    {member.role}
                  </span>

                  <h3 className="text-[16px] font-black leading-[1.4] text-[#14212a]">
                    {member.name}
                  </h3>

                  <span className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#dce2e5] text-[#102e3e] transition-colors group-hover:border-[#f5a000] group-hover:bg-[#f5a000]">
                    <Users size={16} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
}
