"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-white">
      <Container size="narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Who We Are"
            title="A Focused Media Partner, Not a Generalist Agency"
            className="mb-8"
          />
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            Mari Media is an affiliate marketing media company. We work behind
            the scenes with online health event organizers, and with select
            partners in adjacent industries, running affiliate and email
            campaigns that put real offers in front of the right audiences.
            Our approach is built around transparency and long-term
            partnerships rather than one-off promotions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
