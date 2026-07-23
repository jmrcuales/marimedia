"use client";

import { cn } from "@/lib/utils";
import {
  type LabConfig,
  typographyOptions,
  serifAccentOptions,
  asymmetryOptions,
  heroOptions,
  pathwaysOptions,
  ribbonOptions,
  radiusOptions,
  shadowOptions,
  surfaceOptions,
  buttonShapeOptions,
  colorEmphasisOptions,
  motionOptions,
  viewportOptions,
  checkEmphasisContrast,
} from "./lab-config";

type OptionMeta<T extends string> = { id: T; label: string; help: string };

function RadioGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: OptionMeta<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  const selectedOption = options.find((option) => option.id === value);

  return (
    <fieldset className="mb-5 last:mb-0">
      <legend className="mb-2 text-sm font-semibold text-[var(--lab-text-primary)]">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <label
              key={option.id}
              className={cn(
                "mm-option-pill cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-150",
                selected
                  ? "border-[var(--lab-action-primary)] bg-[var(--lab-action-primary)] text-[var(--lab-action-primary-text)]"
                  : "border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] text-[var(--lab-text-primary)] hover:bg-[var(--lab-bg-surface-alt)]"
              )}
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={selected}
                onChange={() => onChange(option.id)}
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
      </div>
      {selectedOption?.help && (
        <p className="mt-1.5 text-xs text-[var(--lab-text-subtle)]">{selectedOption.help}</p>
      )}
    </fieldset>
  );
}

function GroupCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
        {number}. {title}
      </p>
      {children}
    </div>
  );
}

export function ControlPanel({
  config,
  onChange,
}: {
  config: LabConfig;
  onChange: <K extends keyof LabConfig>(key: K, value: LabConfig[K]) => void;
}) {
  const emphasisChecks = checkEmphasisContrast(config.colorEmphasis);
  const emphasisFailure = emphasisChecks.find((check) => !check.passes);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <GroupCard number={1} title="Typography">
        <RadioGroup
          legend="System"
          name="typography"
          options={typographyOptions}
          value={config.typography}
          onChange={(value) => onChange("typography", value)}
        />
        <RadioGroup
          legend="Serif accent"
          name="serifAccent"
          options={serifAccentOptions}
          value={config.serifAccent}
          onChange={(value) => onChange("serifAccent", value)}
        />
      </GroupCard>

      <GroupCard number={2} title="Layout direction">
        <RadioGroup
          legend="Asymmetry"
          name="asymmetry"
          options={asymmetryOptions}
          value={config.asymmetry}
          onChange={(value) => onChange("asymmetry", value)}
        />
        <RadioGroup
          legend="Hero style"
          name="hero"
          options={heroOptions}
          value={config.hero}
          onChange={(value) => onChange("hero", value)}
        />
      </GroupCard>

      <GroupCard number={3} title="Partner and reader pathways">
        <RadioGroup
          legend="Arrangement"
          name="pathways"
          options={pathwaysOptions}
          value={config.pathways}
          onChange={(value) => onChange("pathways", value)}
        />
      </GroupCard>

      <GroupCard number={4} title="Ribbon">
        <RadioGroup
          legend="Direction"
          name="ribbon"
          options={ribbonOptions}
          value={config.ribbon}
          onChange={(value) => onChange("ribbon", value)}
        />
      </GroupCard>

      <GroupCard number={5} title="Shape and surface">
        <RadioGroup
          legend="Radius"
          name="radius"
          options={radiusOptions}
          value={config.radius}
          onChange={(value) => onChange("radius", value)}
        />
        <RadioGroup
          legend="Shadow"
          name="shadow"
          options={shadowOptions}
          value={config.shadow}
          onChange={(value) => onChange("shadow", value)}
        />
        <RadioGroup
          legend="Surface treatment"
          name="surface"
          options={surfaceOptions}
          value={config.surface}
          onChange={(value) => onChange("surface", value)}
        />
      </GroupCard>

      <GroupCard number={6} title="Button treatment">
        <RadioGroup
          legend="Shape"
          name="buttonShape"
          options={buttonShapeOptions}
          value={config.buttonShape}
          onChange={(value) => onChange("buttonShape", value)}
        />
        <p className="text-xs text-[var(--lab-text-subtle)]">
          Tags and status labels stay pill-shaped independently of this control. Form fields and
          cards are never forced into a pill shape.
        </p>
      </GroupCard>

      <GroupCard number={7} title="Color emphasis">
        <p className="mb-3 text-xs text-[var(--lab-text-subtle)]">
          The approved Compass palette stays fixed. This only changes how it is balanced.
        </p>
        <RadioGroup
          legend="Balance"
          name="colorEmphasis"
          options={colorEmphasisOptions}
          value={config.colorEmphasis}
          onChange={(value) => onChange("colorEmphasis", value)}
        />
        {emphasisFailure ? (
          <p
            role="alert"
            className="mt-2 rounded-md bg-[var(--lab-warning-surface)] px-3 py-2 text-xs font-medium text-[var(--lab-warning-text)]"
          >
            This combination fails accessible contrast for &ldquo;{emphasisFailure.label}&rdquo; (
            {emphasisFailure.ratio.toFixed(2)}:1). It has not been applied.
          </p>
        ) : (
          <p className="mt-2 text-xs text-[var(--lab-success-text)]">
            All emphasis-specific text pairings pass WCAG AA for this selection.
          </p>
        )}
      </GroupCard>

      <GroupCard number={8} title="Motion">
        <RadioGroup
          legend="Preview motion"
          name="motion"
          options={motionOptions}
          value={config.motion}
          onChange={(value) => onChange("motion", value)}
        />
        <p className="text-xs text-[var(--lab-text-subtle)]">
          Your operating system&apos;s reduced-motion setting is always respected in addition to
          this control.
        </p>
      </GroupCard>

      <GroupCard number={9} title="Viewport preview">
        <RadioGroup
          legend="Preview width"
          name="viewport"
          options={viewportOptions.map(({ id, label }) => ({ id, label, help: "" }))}
          value={config.viewport}
          onChange={(value) => onChange("viewport", value)}
        />
      </GroupCard>
    </div>
  );
}
