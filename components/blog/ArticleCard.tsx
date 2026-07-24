import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { ArticleSummary } from "@/types/article";
import { formatArticleDate } from "@/types/article";
import { objectPositionFromFocal } from "@/lib/photography";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: ArticleSummary;
  /** "featured" renders a larger, image-forward layout for a single lead article. */
  variant?: "featured" | "default";
}

export default function ArticleCard({
  article,
  variant = "default",
}: ArticleCardProps) {
  const isFeatured = variant === "featured";
  const objectPosition = objectPositionFromFocal(article.heroImage.focalPoint);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={cn(
        "group block rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6216E]",
        isFeatured ? "md:grid md:grid-cols-2 md:items-stretch" : "flex flex-col h-full"
      )}
    >
      <div
        className={cn(
          "relative",
          isFeatured ? "aspect-[4/3] md:aspect-auto" : "aspect-[16/10]"
        )}
      >
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          sizes={
            isFeatured
              ? "(min-width: 768px) 50vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover"
          style={{ objectPosition }}
          priority={isFeatured}
        />
      </div>

      <div
        className={cn(
          "flex flex-col flex-1 p-6",
          isFeatured && "md:p-8 md:justify-center"
        )}
      >
        {isFeatured && (
          <span className="text-xs font-bold text-white bg-[#D6216E] uppercase tracking-wider mb-3 px-2.5 py-1 rounded-full self-start">
            Featured
          </span>
        )}
        <span className="text-xs font-semibold text-[#D6216E] uppercase tracking-wider mb-2">
          {article.category}
        </span>
        <h2
          className={cn(
            "font-bold text-[#222222] leading-snug group-hover:text-[#D6216E] transition-colors mb-3",
            isFeatured ? "text-2xl md:text-3xl" : "text-lg"
          )}
        >
          {article.title}
        </h2>
        <p
          className={cn(
            "text-gray-600 leading-relaxed",
            isFeatured ? "text-base md:text-lg mb-6" : "text-sm mb-5 flex-1"
          )}
        >
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 mt-auto border-t border-gray-100">
          <span>{formatArticleDate(article.publishedAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {article.readingTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
