"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BarChart3, MessageSquare, Handshake, ShieldCheck, UserCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: BarChart3,
    title: "Focused on meaningful outcomes",
    description:
      "We track opens, clicks, and conversions on every campaign, and use what we learn to guide the next one, not vanity metrics.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    description: "You'll always know what's running, what's working, and why.",
  },
  {
    icon: Handshake,
    title: "Long-term partnerships",
    description:
      "We aim to work with you across multiple campaigns, not just a single launch.",
  },
  {
    icon: ShieldCheck,
    title: "Selective, ethical promotion",
    description:
      "We disclose partnerships clearly and only promote offers we'd stand behind ourselves.",
  },
  {
    icon: UserCheck,
    title: "Personalized to your audience",
    description:
      "Every campaign is shaped around your audience, your offer, and your goals.",
  },
];

export default function WhyPartnerWithUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-4">
      <Container size="wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Why Partner With Mari Media"
            description="We operate like a partner you'll want to work with again, not a vendor you have to manage."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="p-6 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-primary/5 border-none">
                <reason.icon className="w-9 h-9 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#222222] mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
