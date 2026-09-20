import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./pipeline.css";

/**
 * Pipeline — Section card with a header row (title, unassigned badge, action button)
 * and a content area for pipeline columns/cards.
 *
 * @example
 * <Pipeline
 *   title="Pipeline"
 *   unassignedCount={4}
 *   actionLabel="New Project"
 *   onAction={() => {}}
 * >
 *   {pipeline columns go here}
 * </Pipeline>
 */
export function Pipeline({
  title = "Pipeline",
  unassignedCount = 0,
  actionLabel = "New Project",
  onAction,
  children,
  className,
  ...rest
}) {
  return (
    <div
      className={["pipeline", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Header row */}
      <div className="pipeline-header">
        <h2 className="pipeline-title">{title}</h2>

        <div className="pipeline-actions">
          {unassignedCount > 0 && (
            <div className="pipeline-badge">
              <span className="pipeline-badge-dot">
                <span className="pipeline-badge-dot-inner" />
              </span>
              <span className="pipeline-badge-text">
                {unassignedCount} Unassigned
              </span>
            </div>
          )}
          {actionLabel && (
            <Button variant="primary" size="small" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </div>
      </div>

      {/* Content area (pipeline columns will go here) */}
      {children && <div className="pipeline-content">{children}</div>}
    </div>
  );
}

Pipeline.propTypes = {
  /** Section title. */
  title: PropTypes.string,
  /** Number of unassigned items (shows badge when > 0). */
  unassignedCount: PropTypes.number,
  /** Action button label. */
  actionLabel: PropTypes.string,
  /** Callback when the action button is clicked. */
  onAction: PropTypes.func,
  /** Pipeline body content (columns, cards, etc.). */
  children: PropTypes.node,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
