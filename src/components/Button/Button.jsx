import PropTypes from "prop-types";
import "./button.css";

export const VARIANTS = ["primary", "secondary", "icon-only", "ghost-icon"];
export const SIZES = ["small", "regular", "large"];

/**
 * Default spinner SVG used for the loading state.
 * Inherits `currentColor` so it matches the button text color.
 */
function Spinner() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Button — interactive control from the Trussi design system.
 *
 * @example
 * <Button variant="primary">Save</Button>
 * <Button variant="secondary" size="large" leftIcon={<PlusIcon />}>New Project</Button>
 * <Button variant="icon-only" icon={<PlusIcon />} aria-label="Add" />
 */
export function Button({
  variant = "primary",
  size = "small",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  icon,
  children,
  className,
  ...rest
}) {
  const isIconVariant = variant === "icon-only" || variant === "ghost-icon";

  return (
    <button
      className={["button", className].filter(Boolean).join(" ")}
      data-variant={variant}
      data-size={size}
      data-loading={loading || undefined}
      disabled={disabled}
      {...rest}
    >
      {isIconVariant ? (
        /* Icon-only variants render a single icon */
        <span className="button-icon">{icon}</span>
      ) : (
        <>
          {/* Left icon slot — hidden while loading */}
          {leftIcon && !loading && (
            <span className="button-icon">{leftIcon}</span>
          )}

          {/* Label */}
          <span className="button-label">{children}</span>

          {/* Right icon slot — hidden while loading */}
          {rightIcon && !loading && (
            <span className="button-icon">{rightIcon}</span>
          )}

          {/* Loader — visible only while loading */}
          {loading && (
            <span className="button-loader">
              <Spinner />
            </span>
          )}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  /** Visual style of the button. */
  variant: PropTypes.oneOf(VARIANTS),
  /** Size preset. */
  size: PropTypes.oneOf(SIZES),
  /** Disables the button and applies reduced opacity. */
  disabled: PropTypes.bool,
  /** Shows a loading spinner and prevents interaction. */
  loading: PropTypes.bool,
  /** Icon rendered before the label (primary/secondary only). */
  leftIcon: PropTypes.node,
  /** Icon rendered after the label (primary/secondary only). */
  rightIcon: PropTypes.node,
  /** Icon for icon-only and ghost-icon variants. */
  icon: PropTypes.node,
  /** Button label text (primary/secondary variants). */
  children: PropTypes.node,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
