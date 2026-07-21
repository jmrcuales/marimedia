import type { Article } from "@/types/article";
import { whatIsFunctionalMedicine } from "./what-is-functional-medicine";

/**
 * Raw local content source. This is intentionally the only file that lists
 * every article record, published or draft. Nothing outside `lib/articles.ts`
 * should import from `lib/content/**` directly — go through the repository
 * boundary instead so a future Supabase-backed implementation can replace
 * this file without touching pages or UI components.
 */
export const allArticles: Article[] = [whatIsFunctionalMedicine];
