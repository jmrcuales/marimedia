/**
 * Mari Media photography system (MARIWEB-010).
 *
 * Typed source of truth for image roles, focal-point helpers, and the
 * homepage section image plan. Presentational components consume these
 * values; they should not redefine photography policy inline.
 */

export { objectPositionFromFocal, type FocalPoint } from "./focal-point";
export {
  imageRoles,
  imageRoleList,
  type ImageRoleId,
  type ImageRoleRatio,
  type ImageRoleSpec,
} from "./roles";
export {
  homepageSectionImagePlans,
  type HomepageImagePlanStatus,
  type HomepageSectionImagePlan,
} from "./homepage-plan";

import type { FocalPoint } from "./focal-point";

/** Shared shape for optional section photography in content modules. */
export interface SectionImageRef {
  src: string;
  alt: string;
  /** Optional authored focal point for cover crops. */
  focalPoint?: FocalPoint;
}
