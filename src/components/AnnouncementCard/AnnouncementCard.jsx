import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import announcementBg from "../../assets/announcement-bg-pattern.svg";
import "./announcement-card.css";

/**
 * AnnouncementCard — A flexible card for announcements, meetings, campaigns, etc.
 *
 * Supports two visual modes for the content area:
 * - `avatar` — round profile image (for deal/achievement announcements)
 * - `icon` — icon inside a colored circle (for meetings, campaigns, etc.)
 *
 * The body content is passed as `children` for full flexibility.
 *
 * @example
 * // Deal announcement with avatar
 * <AnnouncementCard
 *   label="Announcement"
 *   date="09 Sep"
 *   avatar="https://example.com/photo.jpg"
 * >
 *   Rahul Thangaraj closed a deal worth $10k yesterday!
 * </AnnouncementCard>
 *
 * // Meeting with icon and action button
 * <AnnouncementCard
 *   label="Announcement"
 *   date="09 Sep"
 *   icon="calendar-today"
 *   iconColor="#5B8DEF"
 *   actionLabel="View"
 * >
 *   Sales meeting Thursday at 9:00 AM. Pipeline updates due 8:30 AM
 * </AnnouncementCard>
 */
export function AnnouncementCard({
  label = "Announcement",
  date,
  avatar,
  icon,
  iconColor,
  actionLabel,
  onAction,
  onDismiss,
  children,
  className,
  ...rest
}) {
  return (
    <div
      className={["announcement-card", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Background pattern */}
      <img
        src={announcementBg}
        alt=""
        className="announcement-card-bg"
        aria-hidden="true"
      />

      {/* Header: label + dismiss */}
      <div className="announcement-card-header">
        <div className="announcement-card-label">
          <Icon name="news-paper" size={12} color="#837F7D" />
          <span>{label}</span>
        </div>
        {onDismiss && (
          <button
            className="announcement-card-dismiss"
            onClick={onDismiss}
            aria-label="Dismiss"
          >
            <Icon name="close-bold" size={14} color="#D5D0C3" />
          </button>
        )}
      </div>

      {/* Body */}
      <div className="announcement-card-body">
        {/* Visual: avatar or icon circle */}
        {avatar && (
          <img
            className="announcement-card-avatar"
            src={avatar}
            alt=""
          />
        )}
        {icon && !avatar && (
          <div
            className="announcement-card-icon-circle"
            style={iconColor ? { color: iconColor } : undefined}
          >
            <Icon name={icon} size={16} />
          </div>
        )}

        {/* Content */}
        <div className="announcement-card-content">
          {children}
        </div>
      </div>

      {/* Footer: action + date */}
      <div className="announcement-card-footer">
        {actionLabel && (
          <Button variant="secondary" size="small" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
        {date && (
          <span className="announcement-card-date">{date}</span>
        )}
      </div>
    </div>
  );
}

AnnouncementCard.propTypes = {
  /** Category label shown in the header. */
  label: PropTypes.string,
  /** Date string shown in the bottom-right. */
  date: PropTypes.string,
  /** Avatar image URL (renders a round profile photo). */
  avatar: PropTypes.string,
  /** Icon name (renders inside a colored circle). Ignored if `avatar` is set. */
  icon: PropTypes.string,
  /** Color for the icon circle background tint. */
  iconColor: PropTypes.string,
  /** Action button label (e.g. "View", "Assign"). */
  actionLabel: PropTypes.string,
  /** Callback when the action button is clicked. */
  onAction: PropTypes.func,
  /** Callback when the dismiss button is clicked. Shows dismiss button when set. */
  onDismiss: PropTypes.func,
  /** Card body content. */
  children: PropTypes.node,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
