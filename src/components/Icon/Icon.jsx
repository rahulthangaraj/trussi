import PropTypes from "prop-types";
import icons from "./icon-map";
import "./icon.css";

/**
 * All available icon names.
 */
export const ICON_NAMES = Object.keys(icons);

/** Icons with non-square viewBoxes that need aspect-ratio-aware sizing. */
const WIDE_ICONS = {
  "trussi-logo": { width: 111, height: 28 },
};

/**
 * Icon — renders an SVG icon from the Trussi icon library.
 *
 * Uses `currentColor` so the icon inherits color from its parent
 * or the `color` prop. Most icons are 24x24 viewBox, scaled via `size`.
 * The `trussi-logo` and other wide icons scale by height and auto-width.
 *
 * @example
 * <Icon name="search" />
 * <Icon name="arrow-right-sm" size={16} color="var(--color-control-base)" />
 * <Icon name="trussi-logo" size={28} />
 */
export function Icon({
  name,
  size = 24,
  color,
  className,
  ...rest
}) {
  const svg = icons[name];

  if (!svg) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Icon] Unknown icon name: "${name}"`);
    }
    return null;
  }

  const wide = WIDE_ICONS[name];
  const style = wide
    ? { height: size, width: (wide.width / wide.height) * size }
    : { width: size, height: size, color: color || undefined };

  return (
    <span
      className={["icon", className].filter(Boolean).join(" ")}
      style={style}
      role="img"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
}

Icon.propTypes = {
  /** Name of the icon (kebab-case, matches filename without .svg). */
  name: PropTypes.string.isRequired,
  /** Size in pixels. Icons scale proportionally from their 24x24 viewBox. */
  size: PropTypes.number,
  /** Override color. Defaults to inheriting from parent via currentColor. */
  color: PropTypes.string,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
