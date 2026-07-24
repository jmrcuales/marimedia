import * as React from "react";
import { cn } from "@/lib/utils";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "eyebrow"
  | "label"
  | "button"
  | "quote"
  | "editorial-statement"
  | "code";

type ElementTag = keyof React.JSX.IntrinsicElements;

interface VariantSpec {
  as: ElementTag;
  className: string;
}

/**
 * One row per typography role required by the MARIWEB-008 brief. Every
 * value is a Tailwind arbitrary-value utility pointing at a token from
 * `tokens.css`, so there is exactly one place (that file) where an actual
 * size, weight, or family is ever written down.
 */
const variantSpecs: Record<TypographyVariant, VariantSpec> = {
  display: {
    as: "h1",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-display)] leading-[var(--ds-leading-display)] tracking-[var(--ds-tracking-tight)] font-bold text-[var(--ds-color-text)]",
  },
  h1: {
    as: "h1",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-h1)] leading-[var(--ds-leading-heading)] tracking-[var(--ds-tracking-tight)] font-bold text-[var(--ds-color-text)]",
  },
  h2: {
    as: "h2",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-h2)] leading-[var(--ds-leading-heading)] tracking-[var(--ds-tracking-tight)] font-bold text-[var(--ds-color-text)]",
  },
  h3: {
    as: "h3",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-h3)] leading-[var(--ds-leading-heading)] tracking-[var(--ds-tracking-tight)] font-semibold text-[var(--ds-color-text)]",
  },
  h4: {
    as: "h4",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-h4)] leading-[var(--ds-leading-heading-sm)] font-semibold text-[var(--ds-color-text)]",
  },
  h5: {
    as: "h5",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-h5)] leading-[var(--ds-leading-heading-sm)] font-semibold text-[var(--ds-color-text)]",
  },
  h6: {
    as: "h6",
    className:
      "font-[var(--ds-font-display)] text-[length:var(--ds-text-h6)] leading-[var(--ds-leading-heading-sm)] font-semibold tracking-[var(--ds-tracking-wide)] text-[var(--ds-color-text)]",
  },
  "body-lg": {
    as: "p",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-body-lg)] leading-[var(--ds-leading-body)] text-[var(--ds-color-text)]",
  },
  body: {
    as: "p",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-body)] leading-[var(--ds-leading-body)] text-[var(--ds-color-text)]",
  },
  "body-sm": {
    as: "p",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] leading-[var(--ds-leading-body-sm)] text-[var(--ds-color-text-muted)]",
  },
  caption: {
    as: "span",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-caption)] leading-[var(--ds-leading-body-sm)] text-[var(--ds-color-text-subtle)]",
  },
  eyebrow: {
    as: "span",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-eyebrow)] leading-[var(--ds-leading-tight)] font-semibold uppercase tracking-[var(--ds-tracking-wider)] text-[var(--ds-color-editorial-label)]",
  },
  label: {
    as: "span",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-label)] leading-[var(--ds-leading-tight)] font-medium text-[var(--ds-color-text)]",
  },
  button: {
    as: "span",
    className:
      "font-[var(--ds-font-body)] text-[length:var(--ds-text-button)] leading-[var(--ds-leading-tight)] font-semibold",
  },
  quote: {
    as: "p",
    className:
      "font-[var(--ds-font-editorial)] italic text-[length:var(--ds-text-quote)] leading-[var(--ds-leading-quote)] text-[var(--ds-color-text)]",
  },
  "editorial-statement": {
    as: "p",
    className:
      "font-[var(--ds-font-editorial)] text-[length:var(--ds-text-editorial-statement)] leading-[var(--ds-leading-quote)] text-[var(--ds-color-text)]",
  },
  code: {
    as: "code",
    className:
      "font-[var(--ds-font-mono)] text-[length:var(--ds-text-code)] leading-[var(--ds-leading-body-sm)] text-[var(--ds-color-text)] bg-[var(--ds-color-surface-muted)] rounded-[var(--ds-radius-xs)] px-1.5 py-0.5",
  },
};

export type TextProps<T extends ElementTag = ElementTag> = Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "className"
> & {
  variant: TypographyVariant;
  /** Override the rendered element without changing the visual style (e.g. an `h2` styled as `display`). */
  as?: T;
  className?: string;
  children?: React.ReactNode;
};

/**
 * The single source of typographic truth. Every heading, body, caption,
 * eyebrow, label, quote, etc. in the design system renders through this
 * component so a token change in `tokens.css` updates every usage.
 */
export function Text<T extends ElementTag = ElementTag>({
  variant,
  as,
  className,
  children,
  ...props
}: TextProps<T>) {
  const spec = variantSpecs[variant];
  const Component = (as ?? spec.as) as ElementTag;
  return (
    <Component className={cn(spec.className, className)} {...(props as Record<string, unknown>)}>
      {children}
    </Component>
  );
}

/* Convenience semantic wrappers. Each is a thin `Text` preset so callers
   reach for a name instead of remembering the variant string, while
   still going through the one shared implementation above. */

export function Display(props: Omit<TextProps<"h1">, "variant">) {
  return <Text variant="display" {...props} />;
}

export function Heading({
  level = 2,
  ...props
}: Omit<TextProps<ElementTag>, "variant" | "as"> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const variant = `h${level}` as TypographyVariant;
  const as = `h${level}` as ElementTag;
  return <Text variant={variant} as={as} {...props} />;
}

export function BodyLarge(props: Omit<TextProps<"p">, "variant">) {
  return <Text variant="body-lg" {...props} />;
}

export function Body(props: Omit<TextProps<"p">, "variant">) {
  return <Text variant="body" {...props} />;
}

export function BodySmall(props: Omit<TextProps<"p">, "variant">) {
  return <Text variant="body-sm" {...props} />;
}

export function Caption(props: Omit<TextProps<"span">, "variant">) {
  return <Text variant="caption" {...props} />;
}

export function Eyebrow(props: Omit<TextProps<"span">, "variant">) {
  return <Text variant="eyebrow" {...props} />;
}

export function Label(props: Omit<TextProps<"label">, "variant">) {
  return <Text variant="label" as="label" {...props} />;
}

export function EditorialStatement(props: Omit<TextProps<"p">, "variant">) {
  return <Text variant="editorial-statement" {...props} />;
}

export function Code(props: Omit<TextProps<"code">, "variant">) {
  return <Text variant="code" {...props} />;
}

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  ordered?: boolean;
  children?: React.ReactNode;
}

/** Consistent list rhythm and marker treatment, ordered or unordered. */
export function List({ ordered = false, className, children, ...props }: ListProps) {
  const Component = ordered ? "ol" : "ul";
  return (
    <Component
      className={cn(
        "font-[var(--ds-font-body)] text-[length:var(--ds-text-body)] leading-[var(--ds-leading-body)] text-[var(--ds-color-text)] space-y-[var(--ds-space-stack-xs)] pl-[var(--ds-space-5)]",
        ordered ? "list-decimal" : "list-disc",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  children?: React.ReactNode;
}

/** Plain semantic blockquote styling (see `Quote` in `Quote.tsx` for the full pull-quote component). */
export function Blockquote({ className, children, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-[var(--ds-border-width-thick)] border-[var(--ds-color-border)] pl-[var(--ds-space-4)] font-[var(--ds-font-editorial)] italic text-[length:var(--ds-text-quote)] leading-[var(--ds-leading-quote)] text-[var(--ds-color-text)]",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
