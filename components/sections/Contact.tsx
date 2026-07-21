"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MapPin, Clock, Copy, Check, AlertCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "hello@marimedia.co";
const COPY_STATUS_RESET_MS = 4000;

type CopyStatus = "idle" | "copied" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    } finally {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = setTimeout(
        () => setCopyStatus("idle"),
        COPY_STATUS_RESET_MS
      );
    }
  };

  const statusMessage =
    copyStatus === "copied"
      ? `Copied ${CONTACT_EMAIL} to your clipboard.`
      : copyStatus === "error"
        ? `Couldn't copy automatically. Select ${CONTACT_EMAIL} and copy it manually.`
        : "";

  return (
    <section id="contact" className="py-24 md:py-32 px-4">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let's Connect"
            description="We'd love to learn more about your business and explore how we can work together."
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/*
              Temporary Phase 1 state: our inquiry form isn't wired up to a
              backend yet (that's Phase 4), so this card leads with a direct,
              honest email CTA instead of an inert form. The Card/grid
              structure stays put so the real form can drop in later.
            */}
            <Card className="p-6 sm:p-8 flex flex-col h-full justify-center">
              <h3 className="text-2xl font-bold text-[#222222] mb-3">
                Ready to Partner With Us?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Tell us about your organization, what you&apos;re looking to
                promote, and how we can help.
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-5">
                <span className="select-all break-all font-semibold text-[#222222]">
                  {CONTACT_EMAIL}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {copyStatus === "copied" ? (
                    <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  ) : copyStatus === "error" ? (
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  )}
                  {copyStatus === "copied" ? "Copied" : "Copy"}
                </button>
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-6 text-base whitespace-nowrap w-full sm:w-auto bg-primary text-white hover:bg-primary-hover hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                Email Mari Media
              </a>

              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "text-sm mt-3 min-h-[1.25rem]",
                  copyStatus === "error" ? "text-red-600" : "text-gray-500"
                )}
              >
                {statusMessage}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#222222] mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re looking to partner with us, learn more about our
                services, or explore collaboration opportunities, we&apos;d love to
                hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#222222]">Email</p>
                  <p className="text-gray-600">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#222222]">Location</p>
                  <p className="text-gray-600">Remote & Global</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#222222]">Personal Replies</p>
                  <p className="text-gray-600">
                    We read and respond to every inquiry ourselves
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
