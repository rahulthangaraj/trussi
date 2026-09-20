import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./pipeline-card.css";

/**
 * DotMatrix — 3×3 grid of 3px dots indicating sub-stage position.
 * Takes a flat array of 9 booleans (row-major order).
 */
function DotMatrix({ pattern = [], activeColor = "#F97316" }) {
  const rows = [
    pattern.slice(0, 3),
    pattern.slice(3, 6),
    pattern.slice(6, 9),
  ];

  return (
    <div className="pipeline-card-dots">
      {rows.map((row, ri) => (
        <div key={ri} className="pipeline-card-dots-row">
          {row.map((active, ci) => (
            <span
              key={ci}
              className="pipeline-card-dot"
              style={{ background: active ? activeColor : "#F2F2F2" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * PipelineCard — A card representing a pipeline stage (Lead, Prospect, etc.).
 *
 * Sub-stages are rendered as a segmented progress bar. Each sub-stage has
 * a `value` (count), `color`, and `label`. On hover, a detail popover
 * shows the AI insight and sub-stage breakdown.
 *
 * @example
 * <PipelineCard
 *   stage="Lead"
 *   count="1,204"
 *   trend={38}
 *   subStages={[
 *     { label: "New", value: 800, color: "var(--color-supporting-base)" },
 *     { label: "Contacted", value: 300, color: "var(--color-supporting-strong)" },
 *     { label: "No response", value: 104, color: "#E7EDF3" },
 *   ]}
 *   dotPattern={[1,0,0, 0,1,0, 0,0,0]}
 *   insight="22 leads idle for 5+ days, follow up recommended"
 * />
 */
export function PipelineCard({
  stage,
  count,
  trend,
  trendLabel = "today",
  subStages = [],
  dotPattern = [],
  dotColor = "#F97316",
  insight,
  insightIcon = "ai-sparkle",
  className,
  ...rest
}) {
  const total = subStages.reduce((sum, s) => sum + s.value, 0);

  return (
    <div
      className={["pipeline-card", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Default content */}
      <div className="pipeline-card-default">
        {/* Top section: header + bar */}
        <div className="pipeline-card-top">
          {/* Header row */}
          <div className="pipeline-card-header">
            <div className="pipeline-card-stage">
              <div className="pipeline-card-stage-info">
                <span className="pipeline-card-stage-name">{stage}</span>
                {dotPattern.length > 0 && (
                  <DotMatrix pattern={dotPattern} activeColor={dotColor} />
                )}
              </div>
              {trend != null && (
                <div className="pipeline-card-trend">
                  <Icon
                    name="trending"
                    size={16}
                    color="var(--color-control-positive)"
                  />
                  <span className="pipeline-card-trend-value">{trend}</span>
                  <span className="pipeline-card-trend-label">{trendLabel}</span>
                </div>
              )}
            </div>
            <span className="pipeline-card-count">{count}</span>
          </div>

          {/* Sub-stage progress bar */}
          {subStages.length > 0 && (
            <div className="pipeline-card-bar">
              {subStages.map((seg, i) => (
                <div
                  key={i}
                  className="pipeline-card-bar-seg"
                  style={{
                    flex: seg.value / total,
                    background: seg.color,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer insight */}
        {insight && (
          <div className="pipeline-card-insight">
            <Icon name={insightIcon} size={16} />
            <span className="pipeline-card-insight-text">{insight}</span>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div className="pipeline-card-hover">
        {/* Insight banner */}
        {insight && (
          <div className="pipeline-card-hover-insight">
            <Icon name={insightIcon} size={12} />
            <span className="pipeline-card-hover-insight-text">{insight}</span>
          </div>
        )}

        {/* Sub-stage breakdown list */}
        {subStages.length > 0 && (
          <div className="pipeline-card-hover-list">
            {subStages.map((seg, i) => (
              <div key={i} className="pipeline-card-hover-row">
                <div className="pipeline-card-hover-label">
                  <span
                    className="pipeline-card-hover-dot"
                    style={{ background: seg.color }}
                  />
                  <span className="pipeline-card-hover-name">
                    {seg.label || `Stage ${i + 1}`}
                  </span>
                </div>
                <span className="pipeline-card-hover-value">{seg.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

PipelineCard.propTypes = {
  /** Pipeline stage name (e.g. "Lead", "Prospect"). */
  stage: PropTypes.string.isRequired,
  /** Formatted total count (e.g. "1,204"). */
  count: PropTypes.string.isRequired,
  /** Trend change number. */
  trend: PropTypes.number,
  /** Label for the trend (default "today"). */
  trendLabel: PropTypes.string,
  /** Sub-stage segments: each with a label, value (count), and color. */
  subStages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  /** Flat array of 9 booleans (row-major) for the 3×3 dot matrix. */
  dotPattern: PropTypes.arrayOf(PropTypes.number),
  /** Active dot color (default orange #F97316). */
  dotColor: PropTypes.string,
  /** AI insight text shown in the footer. */
  insight: PropTypes.string,
  /** Icon name for the insight row (default "ai-sparkle"). */
  insightIcon: PropTypes.string,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
