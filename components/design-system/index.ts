/**
 * Barrel export for the Phase 2 production design system (MARIWEB-008).
 * See `tokens.css` for the token architecture and `Scope.tsx` for how
 * these components are wired into a page.
 */

export { Scope } from "./Scope";
export {
  Text,
  Display,
  Heading,
  BodyLarge,
  Body,
  BodySmall,
  Caption,
  Eyebrow,
  Label,
  EditorialStatement,
  Code,
  List,
  Blockquote,
  type TypographyVariant,
} from "./Typography";
export { Container, type ContainerVariant } from "./Container";
export { Section, type SectionSpacing, type SectionTone } from "./Section";
export { Surface, type SurfaceTreatment, type SurfaceTone } from "./Surface";
export { Button, ButtonLink, buttonClassName, type ButtonVariant, type ButtonSize } from "./Button";
export { Input } from "./Input";
export { Textarea } from "./Textarea";
export { Select } from "./Select";
export { Checkbox } from "./Checkbox";
export { Radio } from "./Radio";
export { Badge, type BadgeTone } from "./Badge";
export { Chip } from "./Chip";
export { Tag, type TagTone } from "./Tag";
export { Divider } from "./Divider";
export { Avatar, type AvatarSize } from "./Avatar";
export { ImageFrame, type ImageFrameRatio } from "./ImageFrame";
export { Card, type CardPadding } from "./Card";
export { EditorialCard } from "./EditorialCard";
export { SectionHeader } from "./SectionHeader";
export { Callout, type CalloutVariant } from "./Callout";
export { Quote } from "./Quote";
export { Ribbon } from "./Ribbon";
export { ArticleCard } from "./ArticleCard";
export { FeaturedArticle } from "./FeaturedArticle";
