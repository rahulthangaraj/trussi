import { Typography, VARIANTS } from "./Typography";

export default {
  title: "Foundations/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS,
      description: "Design-system typestyle",
    },
    as: {
      control: "text",
      description: "Override the rendered HTML element",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Typography component implementing the Trussi design-system type scale. " +
          "The `+` suffix from Figma maps to `-plus` (e.g. `heading-xl+` → `heading-xl-plus`). " +
          "Each variant maps to a sensible default HTML element which can be overridden with the `as` prop.",
      },
    },
  },
};

/* ---------------------------------------------------------------------------
   Playground — fully interactive via Controls panel
   --------------------------------------------------------------------------- */

export const Playground = {
  args: {
    variant: "heading-xl-plus",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

/* ---------------------------------------------------------------------------
   All Variants — overview of the complete type scale
   --------------------------------------------------------------------------- */

const SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";

const variantMeta = {
  "heading-xl-plus": { figma: "heading-xl+", size: "28px", weight: "Medium 450", tracking: "0px" },
  "heading-xl": { figma: "heading-xl", size: "28px", weight: "Regular 400", tracking: "0px" },
  "heading-lg-plus": { figma: "heading-lg+", size: "20px", weight: "Medium 450", tracking: "0px" },
  "heading-lg": { figma: "heading-lg", size: "20px", weight: "Regular 400", tracking: "0px" },
  "heading-rg-plus": { figma: "heading-rg+", size: "18px", weight: "Medium 450", tracking: "-0.24px" },
  "heading-rg": { figma: "heading-rg", size: "18px", weight: "Regular 400", tracking: "-0.24px" },
  "heading-sm-plus": { figma: "heading-sm+", size: "16px", weight: "Medium 450", tracking: "-0.32px" },
  "heading-sm": { figma: "heading-sm", size: "16px", weight: "Regular 400", tracking: "-0.32px" },
  "body-rg-plus": { figma: "body-rg+", size: "14px", weight: "Medium 450", tracking: "-0.24px" },
  "body-rg": { figma: "body-rg", size: "14px", weight: "Regular 400", tracking: "-0.24px" },
  "body-sm-plus": { figma: "body-sm+", size: "13px", weight: "Medium 450", tracking: "-0.24px" },
  "body-sm": { figma: "body-sm", size: "13px", weight: "Regular 400", tracking: "-0.24px" },
  "body-xs-plus": { figma: "body-xs+", size: "12px", weight: "Medium 450", tracking: "-0.32px" },
  "body-xs": { figma: "body-xs", size: "12px", weight: "Regular 400", tracking: "-0.32px" },
  "mono-sm": { figma: "mono-sm", size: "14px", weight: "Regular 400", tracking: "0px" },
  "mono-xs": { figma: "mono-xs", size: "13px", weight: "Regular 400", tracking: "0px" },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {VARIANTS.map((variant) => {
        const meta = variantMeta[variant];
        return (
          <div key={variant} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "baseline",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#888",
              }}
            >
              <span style={{ fontWeight: 600, color: "#555", minWidth: "130px" }}>
                {meta.figma}
              </span>
              <span>{meta.size}</span>
              <span>{meta.weight}</span>
              <span>tracking {meta.tracking}</span>
            </div>
            <Typography variant={variant}>{SAMPLE_TEXT}</Typography>
          </div>
        );
      })}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Complete type scale showing every variant with its Figma spec metadata.",
      },
    },
  },
};

/* ---------------------------------------------------------------------------
   Category stories — grouped by usage
   --------------------------------------------------------------------------- */

export const Headings = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="heading-xl-plus">heading-xl+ — Page title (medium)</Typography>
      <Typography variant="heading-xl">heading-xl — Page title (regular)</Typography>
      <Typography variant="heading-lg-plus">heading-lg+ — Section heading (medium)</Typography>
      <Typography variant="heading-lg">heading-lg — Section heading (regular)</Typography>
      <Typography variant="heading-rg-plus">heading-rg+ — Sub-section heading (medium)</Typography>
      <Typography variant="heading-rg">heading-rg — Sub-section heading (regular)</Typography>
      <Typography variant="heading-sm-plus">heading-sm+ — Small heading (medium)</Typography>
      <Typography variant="heading-sm">heading-sm — Small heading (regular)</Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Body = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="body-rg-plus">body-rg+ — Default body text (medium)</Typography>
      <Typography variant="body-rg">body-rg — Default body text (regular)</Typography>
      <Typography variant="body-sm-plus">body-sm+ — Small body text (medium)</Typography>
      <Typography variant="body-sm">body-sm — Small body text (regular)</Typography>
      <Typography variant="body-xs-plus">body-xs+ — Caption text (medium)</Typography>
      <Typography variant="body-xs">body-xs — Caption text (regular)</Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Monospace = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="mono-sm">mono-sm — const result = await fetchData();</Typography>
      <Typography variant="mono-xs">mono-xs — const result = await fetchData();</Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

/* ---------------------------------------------------------------------------
   Semantic overrides — demonstrating the `as` prop
   --------------------------------------------------------------------------- */

export const SemanticOverrides = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="heading-lg-plus" as="label">
        heading-lg+ rendered as {"<label>"}
      </Typography>
      <Typography variant="body-rg" as="span">
        body-rg rendered as {"<span>"}
      </Typography>
      <Typography variant="heading-sm-plus" as="legend">
        heading-sm+ rendered as {"<legend>"}
      </Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Use the `as` prop to override the default HTML element while keeping the visual style. " +
          "Useful for accessibility and semantic markup needs.",
      },
    },
  },
};
