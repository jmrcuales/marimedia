"use client";

import { useState } from "react";
import { Chip } from "../Chip";

/**
 * Tiny client component so the (server-rendered) reference page can show
 * `Chip`'s `onRemove` behavior without passing a function prop across
 * the server/client boundary. The handler is defined here, inside the
 * client component, not forwarded in from the server.
 */
export function RemovableChipDemo() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] text-[var(--ds-color-link)] underline-offset-2 hover:underline"
      >
        Restore removed chip
      </button>
    );
  }

  return <Chip onRemove={() => setVisible(false)}>Removable</Chip>;
}
