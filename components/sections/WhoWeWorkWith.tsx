"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  HeartPulse,
  Cloud,
  GraduationCap,
  Package,
  Briefcase,
} from "lucide-react";

const adjacentCategories = [
  { icon: Cloud, label: "SaaS" },
  { icon: GraduationCap, label: "Education" },
  { icon: Package, label: "Digital Products" },
  { icon: Briefcase, label: "Professional Services" },
];

export default function WhoWeWorkWith() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-help" className="py-24 md:py-32 px-4 bg-white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Who We Work With"
            title="Built Around Online Health Events"
            description="Our current focus is affiliate and email marketing for online health summits and events, working with businesses primarily across the U.S. and Canada. We stay open to the right partnerships beyond that, too."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-primary/5 border border-primary/15 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-8"
        >
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
            <HeartPulse className="w-7 h-7 text-primary" aria-hidden="true" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-bold text-[#222222] text-lg mb-1">
              Health & Wellness: Online Events and Summits
            </p>
            <p className="text-gray-600 leading-relaxed">
              This is where we spend most of our time today: helping event and
              summit organizers reach an audience that&apos;s genuinely interested
              in what they&apos;re offering.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center sm:text-left">
            Also open to the right fit in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {adjacentCategories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2.5"
              >
                <category.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <p className="font-semibold text-[#222222] text-sm">
                  {category.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
