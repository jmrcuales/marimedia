import * as React from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  narrow: "max-w-5xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeClasses;
}

/**
 * Centered content wrapper shared by homepage sections. Only sets the
 * max-width + centering; the surrounding `<section>` keeps its own
 * vertical padding and `px-4` gutter, matching the existing layout.
 */
export function Container({ size = "default", className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("container mx-auto", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
