"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check, AlertCircle, Mail } from "lucide-react";
import { buttonClassName } from "@/components/design-system/Button";
import { BodySmall } from "@/components/design-system/Typography";
import { cn } from "@/lib/utils";

const COPY_STATUS_RESET_MS = 4000;

type CopyStatus = "idle" | "copied" | "error";

/**
 * The only real interactivity the homepage needs: a copy-to-clipboard
 * control for the general-contact email path in the Calm Final Action
 * section (blueprint Section 5.8). Kept as its own small client component
 * so every other homepage section can stay a server component (MARIWEB-009
 * performance guidance); this is the "absolutely necessary" exception to
 * "avoid creating homepage-specific UI", since the behavior is real,
 * page-specific interaction, not a reusable design-system primitive.
 *
 * Carries forward the accessible `aria-live` status-message pattern from
 * the previous production `Contact` section rather than losing it during
 * the token migration.
 */
export function ContactEmailAction({ email }: { email: string }) {
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
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    } finally {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = setTimeout(() => setCopyStatus("idle"), COPY_STATUS_RESET_MS);
    }
  };

  const statusMessage =
    copyStatus === "copied"
      ? `Copied ${email} to your clipboard.`
      : copyStatus === "error"
        ? `Couldn't copy automatically. Select ${email} and copy it manually.`
        : "";

  return (
    <div className="flex flex-col gap-[var(--ds-space-stack-sm)]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="select-all break-all font-[var(--ds-font-body)] text-[length:var(--ds-text-body)] font-semibold text-[var(--ds-color-text)]">
          {email}
        </span>
        <button
          type="button"
          onClick={handleCopyEmail}
          className={cn(
            "inline-flex items-center gap-1 rounded-[var(--ds-radius-xs)] text-[length:var(--ds-text-body-sm)] font-semibold text-[var(--ds-color-primary)] transition-colors duration-[var(--ds-duration-fast)] hover:text-[var(--ds-color-primary-hover)] focus-visible:outline focus-visible:outline-[var(--ds-focus-ring-width)] focus-visible:outline-offset-[var(--ds-focus-ring-offset)] focus-visible:outline-[var(--ds-focus-ring-color)]"
          )}
        >
          {copyStatus === "copied" ? (
            <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          ) : copyStatus === "error" ? (
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          )}
          {copyStatus === "copied" ? "Copied" : "Copy"}
        </button>
      </div>

      <a href={`mailto:${email}`} className={cn(buttonClassName("outline"), "w-fit")}>
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
        Email Mari Media
      </a>

      <BodySmall
        role="status"
        aria-live="polite"
        className={cn(
          "min-h-[1.25rem]",
          copyStatus === "error" ? "text-[var(--ds-color-error)]" : "text-[var(--ds-color-text-subtle)]"
        )}
      >
        {statusMessage}
      </BodySmall>
    </div>
  );
}
