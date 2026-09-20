import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import "./review-item.css";

/**
 * ReviewItem — A row item for the "Needs Review" section.
 *
 * Uses a single `color` prop that sets the icon color;
 * the container bg and outline are derived via CSS opacity.
 *
 * @example
 * <ReviewItem
 *   icon="clipboard-copy"
 *   color="var(--color-supporting-strong)"
 *   title="Claim number on file"
 *   subtitle="Denise Hollis"
 *   requestedBy={{ name: "Rahul Thangaraj", initials: "RT" }}
 *   actionLabel="View"
 * />
 */
export function ReviewItem({
  icon,
  color = "var(--color-supporting-strong)",
  title,
  subtitle,
  requestedBy,
  actionLabel = "View",
  onAction,
  className,
  ...rest
}) {
  return (
    <div
      className={["review-item", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Left: icon + text */}
      <div className="review-item-content">
        {/* Icon box */}
        <div className="review-item-icon" style={{ color }}>
          <Icon name={icon} size={20} />
        </div>

        {/* Text */}
        <div className="review-item-text">
          <span className="review-item-title">{title}</span>
          <div className="review-item-meta">
            {subtitle && (
              <span className="review-item-subtitle">{subtitle}</span>
            )}
            {subtitle && requestedBy && (
              <span className="review-item-dot" />
            )}
            {requestedBy && (
              <div className="review-item-requester">
                <span className="review-item-requester-label">
                  Requested by
                </span>
                <div className="review-item-requester-user">
                  <span className="review-item-avatar">
                    {requestedBy.initials}
                  </span>
                  <span className="review-item-requester-name">
                    {requestedBy.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: action button */}
      <Button variant="secondary" size="small" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  );
}

ReviewItem.propTypes = {
  /** Icon name for the left icon box. */
  icon: PropTypes.string.isRequired,
  /** Icon and container accent color (uses currentColor). */
  color: PropTypes.string,
  /** Item title. */
  title: PropTypes.string.isRequired,
  /** Subtitle (e.g. person or project name). */
  subtitle: PropTypes.string,
  /** Requester info with name and initials. */
  requestedBy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
  }),
  /** Action button label. */
  actionLabel: PropTypes.string,
  /** Callback when the action button is clicked. */
  onAction: PropTypes.func,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
