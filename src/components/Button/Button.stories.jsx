import { Button, VARIANTS, SIZES } from "./Button";

/**
 * Sample icon for demos — a simple 14×14 plus sign.
 */
function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 2V12M2 7H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS,
    },
    size: {
      control: "select",
      options: SIZES,
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    children: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Button component from the Trussi design system. Supports four variants " +
          "(primary, secondary, icon-only, ghost-icon), three sizes (small, regular, large), " +
          "and states for disabled and loading.",
      },
    },
  },
};

/* ---------------------------------------------------------------------------
   Playground — fully interactive via Controls panel
   --------------------------------------------------------------------------- */

export const Playground = {
  args: {
    variant: "primary",
    size: "small",
    children: "New Project",
    disabled: false,
    loading: false,
  },
};

/* ---------------------------------------------------------------------------
   Primary Variants
   --------------------------------------------------------------------------- */

export const Primary = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Sizes */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="primary" size="small">Small</Button>
        <Button variant="primary" size="regular">Regular</Button>
        <Button variant="primary" size="large">Large</Button>
      </div>

      {/* With icons */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="primary" size="small" leftIcon={<PlusIcon />}>With Left Icon</Button>
        <Button variant="primary" size="regular" rightIcon={<PlusIcon />}>With Right Icon</Button>
        <Button variant="primary" size="large" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />}>Both Icons</Button>
      </div>

      {/* States */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="primary" size="small">Default</Button>
        <Button variant="primary" size="small" disabled>Disabled</Button>
        <Button variant="primary" size="small" loading>Loading</Button>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ---------------------------------------------------------------------------
   Secondary Variants
   --------------------------------------------------------------------------- */

export const Secondary = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Sizes */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="secondary" size="small">Small</Button>
        <Button variant="secondary" size="regular">Regular</Button>
        <Button variant="secondary" size="large">Large</Button>
      </div>

      {/* With icons */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="secondary" size="small" leftIcon={<PlusIcon />}>With Left Icon</Button>
        <Button variant="secondary" size="regular" rightIcon={<PlusIcon />}>With Right Icon</Button>
        <Button variant="secondary" size="large" leftIcon={<PlusIcon />} rightIcon={<PlusIcon />}>Both Icons</Button>
      </div>

      {/* States */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="secondary" size="small">Default</Button>
        <Button variant="secondary" size="small" disabled>Disabled</Button>
        <Button variant="secondary" size="small" loading>Loading</Button>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ---------------------------------------------------------------------------
   Icon Only Variants
   --------------------------------------------------------------------------- */

export const IconOnly = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Sizes */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="icon-only" size="small" icon={<PlusIcon />} aria-label="Add" />
        <Button variant="icon-only" size="regular" icon={<PlusIcon />} aria-label="Add" />
        <Button variant="icon-only" size="large" icon={<PlusIcon />} aria-label="Add" />
      </div>

      {/* Disabled */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="icon-only" size="small" icon={<PlusIcon />} disabled aria-label="Add" />
        <Button variant="icon-only" size="regular" icon={<PlusIcon />} disabled aria-label="Add" />
        <Button variant="icon-only" size="large" icon={<PlusIcon />} disabled aria-label="Add" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ---------------------------------------------------------------------------
   Ghost Icon Variants
   --------------------------------------------------------------------------- */

export const GhostIcon = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Sizes */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="ghost-icon" size="small" icon={<PlusIcon />} aria-label="Add" />
        <Button variant="ghost-icon" size="regular" icon={<PlusIcon />} aria-label="Add" />
        <Button variant="ghost-icon" size="large" icon={<PlusIcon />} aria-label="Add" />
      </div>

      {/* Disabled */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="ghost-icon" size="small" icon={<PlusIcon />} disabled aria-label="Add" />
        <Button variant="ghost-icon" size="regular" icon={<PlusIcon />} disabled aria-label="Add" />
        <Button variant="ghost-icon" size="large" icon={<PlusIcon />} disabled aria-label="Add" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* ---------------------------------------------------------------------------
   All Variants Matrix
   --------------------------------------------------------------------------- */

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Primary row */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#888", marginBottom: 8 }}>
          Primary
        </p>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="regular">Regular</Button>
          <Button variant="primary" size="large">Large</Button>
          <Button variant="primary" size="small" disabled>Disabled</Button>
          <Button variant="primary" size="small" loading>Loading</Button>
        </div>
      </div>

      {/* Secondary row */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#888", marginBottom: 8 }}>
          Secondary
        </p>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="regular">Regular</Button>
          <Button variant="secondary" size="large">Large</Button>
          <Button variant="secondary" size="small" disabled>Disabled</Button>
          <Button variant="secondary" size="small" loading>Loading</Button>
        </div>
      </div>

      {/* Icon Only row */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#888", marginBottom: 8 }}>
          Icon Only
        </p>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <Button variant="icon-only" size="small" icon={<PlusIcon />} aria-label="Add" />
          <Button variant="icon-only" size="regular" icon={<PlusIcon />} aria-label="Add" />
          <Button variant="icon-only" size="large" icon={<PlusIcon />} aria-label="Add" />
          <Button variant="icon-only" size="small" icon={<PlusIcon />} disabled aria-label="Add" />
        </div>
      </div>

      {/* Ghost Icon row */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#888", marginBottom: 8 }}>
          Ghost Icon
        </p>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <Button variant="ghost-icon" size="small" icon={<PlusIcon />} aria-label="Add" />
          <Button variant="ghost-icon" size="regular" icon={<PlusIcon />} aria-label="Add" />
          <Button variant="ghost-icon" size="large" icon={<PlusIcon />} aria-label="Add" />
          <Button variant="ghost-icon" size="small" icon={<PlusIcon />} disabled aria-label="Add" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Complete matrix of all button variants, sizes, and states.",
      },
    },
  },
};
