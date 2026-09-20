import PropTypes from "prop-types";
import "./typography.css";

/**
 * All available typography variants from the Trussi design system.
 * The `+` suffix in Figma maps to `-plus` here (e.g. `heading-xl+` → `heading-xl-plus`).
 */
export const VARIANTS = [
  "heading-xl-plus",
  "heading-xl",
  "heading-lg-plus",
  "heading-lg",
  "heading-rg-plus",
  "heading-rg",
  "heading-sm-plus",
  "heading-sm",
  "body-rg-plus",
  "body-rg",
  "body-sm-plus",
  "body-sm",
  "body-xs-plus",
  "body-xs",
  "mono-sm",
  "mono-xs",
];

/**
 * Sensible default HTML elements for each variant.
 * Consumers can override via the `as` prop.
 */
const DEFAULT_ELEMENT = {
  "heading-xl-plus": "h1",
  "heading-xl": "h1",
  "heading-lg-plus": "h2",
  "heading-lg": "h2",
  "heading-rg-plus": "h3",
  "heading-rg": "h3",
  "heading-sm-plus": "h4",
  "heading-sm": "h4",
  "body-rg-plus": "p",
  "body-rg": "p",
  "body-sm-plus": "p",
  "body-sm": "p",
  "body-xs-plus": "p",
  "body-xs": "p",
  "mono-sm": "code",
  "mono-xs": "code",
};

/**
 * Typography — renders text using the Trussi design-system type scale.
 *
 * @example
 * <Typography variant="heading-xl-plus">Page title</Typography>
 * <Typography variant="body-rg" as="span">Inline text</Typography>
 */
export function Typography({
  variant = "body-rg",
  as,
  children,
  className,
  ...rest
}) {
  const Component = as || DEFAULT_ELEMENT[variant] || "span";

  return (
    <Component
      className={["typography", className].filter(Boolean).join(" ")}
      data-variant={variant}
      {...rest}
    >
      {children}
    </Component>
  );
}

Typography.propTypes = {
  /** The design-system typestyle to apply. */
  variant: PropTypes.oneOf(VARIANTS),
  /** Override the rendered HTML element (e.g. "span", "label", "li"). */
  as: PropTypes.string,
  /** Text or React nodes to render. */
  children: PropTypes.node.isRequired,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
