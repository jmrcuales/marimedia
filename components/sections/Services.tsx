"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Mail, Handshake, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Target,
    title: "Affiliate Marketing",
    description:
      "We promote quality offers through our network, connecting them with audiences that are already looking for what you provide. Every placement is chosen deliberately, and results are tracked from click to conversion.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Using GoHighLevel, we build and run email campaigns that are segmented, sequenced, and written to convert, not just to inform. Every send is measured, so we know what's working and adjust quickly when it isn't.",
  },
  {
    icon: Handshake,
    title: "Business Partnerships",
    description:
      "We work as an extension of your team, not a vendor you check in with once a quarter. Partnerships with health event organizers, creators, and other partners are built to last across multiple campaigns.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleLearnMore = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 px-4">
      <Container size="wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Our Services"
            title="What We Do"
            description="Three focused services, executed well, rather than a long list of things we do half-heartedly."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full flex flex-col text-left p-8 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10 border-none">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <button
                  onClick={handleLearnMore}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-300 self-start"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
