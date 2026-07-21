import Link from "next/link";
import type { CtaPlacement } from "@/types/cta";
import { getCta } from "@/lib/cta";

/**
 * Renders a configured call-to-action for the given placement, or nothing
 * at all. Used for `article-inline-cta`, `article-end-cta`, and
 * `blog-index-cta`. Because no CTA is configured in Phase 2, every call to
 * this component currently renders `null` — no wrapper, heading, divider,
 * or background is emitted when unconfigured.
 */
export default function ArticleCta({ placement }: { placement: CtaPlacement }) {
  const cta = getCta(placement);
  if (!cta) return null;

  return (
    <div className="max-w-[760px] mx-auto my-10 rounded-2xl bg-[#FFF5F7] border border-gray-100 p-6 md:p-8 text-center">
      <h3 className="text-xl md:text-2xl font-bold text-[#222222] mb-2">
        {cta.heading}
      </h3>
      {cta.body && (
        <p className="text-gray-600 leading-relaxed mb-5">{cta.body}</p>
      )}
      <Link
        href={cta.buttonHref}
        className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 h-12 px-8 text-base bg-[#D6216E] text-white hover:bg-[#C2185B] hover:shadow-xl hover:-translate-y-0.5"
      >
        {cta.buttonLabel}
      </Link>
    </div>
  );
}
