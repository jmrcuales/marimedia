"use client";

import { Globe, Zap, Users2, Brain, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const futureServices = [
  { icon: Globe, label: "Website Development" },
  { icon: Zap, label: "Marketing Automation" },
  { icon: Users2, label: "CRM Solutions" },
  { icon: Brain, label: "AI Marketing" },
  { icon: TrendingUp, label: "Lead Generation" },
];

export default function FutureVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeading
            size="compact"
            title="Growing With Our Partners"
            description="Affiliate and email marketing are our focus today. As we grow alongside our partners, we plan to add these capabilities:"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {futureServices.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-3 border-2 border-primary/20">
                  <service.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-[#222222]">
                    {service.label}
                  </span>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded-full font-medium">
                    Coming soon
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
