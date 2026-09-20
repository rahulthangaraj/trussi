import { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./collections-chart.css";

/**
 * Build SVG points from data normalized to the viewBox.
 */
function buildPoints(data, width, height) {
  if (!data.length) return [];

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 0;
  const chartWidth = width;
  const chartHeight = height;

  return data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * chartWidth,
    y: padding + (1 - (val - min) / range) * chartHeight,
  }));
}

function buildPaths(points, height) {
  if (!points.length) return { linePath: "", areaPath: "" };

  // Gentle smooth curves — tension kept low so peaks stay visible
  let linePath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.2;
    const cpx2 = curr.x - (curr.x - prev.x) * 0.2;
    linePath += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;
  return { linePath, areaPath };
}

/**
 * Format a number as currency: $42,000
 */
function formatCurrency(val) {
  return "$" + val.toLocaleString("en-US");
}

/**
 * CollectionsChart — Area chart card with hover tooltip.
 */
export function CollectionsChart({
  label = "Collections",
  amount = "$683,000",
  cents = ".90",
  trend = 12,
  period = "Last 30 days",
  data = [],
  dates = [],
  xLabels = [],
  onPeriodChange,
  className,
  ...rest
}) {
  const viewWidth = 550;
  const viewHeight = 171;
  const points = buildPoints(data, viewWidth, viewHeight);
  const { linePath, areaPath } = buildPaths(points, viewHeight);

  const graphRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (!graphRef.current || !points.length) return;
      const rect = graphRef.current.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * viewWidth;

      // Find closest point
      let closest = 0;
      let minDist = Infinity;
      for (let i = 0; i < points.length; i++) {
        const dist = Math.abs(points[i].x - mouseX);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      }
      setHoverIndex(closest);
    },
    [points, viewWidth]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverIndex(null);
  }, []);

  // Compute tooltip pixel position
  const hoverPoint = hoverIndex != null ? points[hoverIndex] : null;
  let tooltipStyle = null;
  if (hoverPoint && graphRef.current) {
    const rect = graphRef.current.getBoundingClientRect();
    const pxX = (hoverPoint.x / viewWidth) * rect.width;
    const pxY = (hoverPoint.y / viewHeight) * rect.height;
    tooltipStyle = {
      left: `${pxX}px`,
      top: `${pxY - 12}px`,
    };
  }

  return (
    <div
      className={["collections-chart", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Header */}
      <div className="collections-chart-header">
        <span className="collections-chart-label">{label}</span>
        <div className="collections-chart-value-row">
          <span className="collections-chart-amount">
            {amount}
            <sup>{cents}</sup>
          </span>
          {trend != null && (
            <div className="collections-chart-trend">
              <Icon
                name="trending"
                size={16}
                color="var(--color-control-positive)"
              />
              <span className="collections-chart-trend-value">{trend}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Period dropdown */}
      <button
        className="collections-chart-period-btn"
        onClick={onPeriodChange}
      >
        {period}
        <Icon
          name="chevron-down-md"
          size={16}
          color="var(--color-label-muted)"
        />
      </button>

      {/* Chart */}
      {data.length > 1 && (
        <div
          className="collections-chart-graph"
          ref={graphRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            viewBox={`0 0 ${viewWidth} ${viewHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="collections-fill"
                x1="0"
                y1="1"
                x2="0"
                y2="0"
              >
                <stop offset="0%" stopColor="#52A9EB" stopOpacity="0" />
                <stop offset="1" stopColor="#52A9EB" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="collections-stroke"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#52A9EB" stopOpacity="0.5" />
                <stop offset="1" stopColor="#52A9EB" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#collections-fill)" />
            <path
              d={linePath}
              fill="none"
              stroke="url(#collections-stroke)"
              strokeWidth="1"
            />

            {/* Hover vertical line */}
            {hoverPoint && (
              <line
                x1={hoverPoint.x}
                y1={hoverPoint.y}
                x2={hoverPoint.x}
                y2={viewHeight}
                stroke="#52A9EB"
                strokeWidth="0.75"
                strokeDasharray="3 3"
              />
            )}

            {/* Hover circle */}
            {hoverPoint && (
              <>
                <circle
                  cx={hoverPoint.x}
                  cy={hoverPoint.y}
                  r="4"
                  fill="var(--color-bg-base)"
                  stroke="#52A9EB"
                  strokeWidth="1.25"
                />
              </>
            )}
          </svg>

          {/* Tooltip */}
          {hoverIndex != null && tooltipStyle && (
            <div className="collections-chart-tooltip" style={tooltipStyle}>
              <span className="collections-chart-tooltip-date">
                {dates[hoverIndex] || `Day ${hoverIndex + 1}`}
              </span>
              <span className="collections-chart-tooltip-value">
                {formatCurrency(data[hoverIndex])}
              </span>
            </div>
          )}
        </div>
      )}

      {/* X-axis labels */}
      {xLabels.length > 0 && (
        <div className="collections-chart-xaxis">
          {xLabels.map((lbl) => (
            <span key={lbl} className="collections-chart-xaxis-label">
              {lbl}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

CollectionsChart.propTypes = {
  /** Chart label text. */
  label: PropTypes.string,
  /** Main amount (dollars). */
  amount: PropTypes.string,
  /** Cents portion displayed as superscript. */
  cents: PropTypes.string,
  /** Trend percentage (positive = green up arrow). */
  trend: PropTypes.number,
  /** Period label for the dropdown button. */
  period: PropTypes.string,
  /** Array of numeric data points for the area chart. */
  data: PropTypes.arrayOf(PropTypes.number),
  /** Per-point date labels for hover tooltip. */
  dates: PropTypes.arrayOf(PropTypes.string),
  /** X-axis date labels (fewer than data points). */
  xLabels: PropTypes.arrayOf(PropTypes.string),
  /** Callback when the period dropdown is clicked. */
  onPeriodChange: PropTypes.func,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
