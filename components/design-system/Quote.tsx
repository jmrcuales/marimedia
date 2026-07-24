import * as React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "./Typography";

export interface QuoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  attribution?: string;
  role?: string;
  children?: React.ReactNode;
}

/**
 * Full pull-quote block: icon, restrained Newsreader editorial-accent
 * text, optional attribution. Token-driven counterpart to
 * `components/blog/EditorialQuote.tsx` (production, untouched by this
 * phase).
 */
export function Quote({ attribution, role, children, className, ...props }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        "relative rounded-[var(--ds-radius-surface)] border-l-[var(--ds-border-width-thick)] border-[var(--ds-color-primary)] bg-[var(--ds-color-surface-muted)] px-[var(--ds-space-6)] py-[var(--ds-space-6)]",
        className
      )}
      {...props}
    >
      <QuoteIcon className="mb-[var(--ds-space-3)] h-6 w-6 text-[var(--ds-color-accent)]" aria-hidden="true" />
      <Text variant="quote">{children}</Text>
      {(attribution || role) && (
        <footer className="mt-[var(--ds-space-4)] font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] text-[var(--ds-color-text-muted)]">
          {attribution && <cite className="font-semibold not-italic">{attribution}</cite>}
          {attribution && role && <span>, </span>}
          {role}
        </footer>
      )}
    </blockquote>
  );
}
