import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./outstanding-table.css";

/**
 * OutstandingTable — Ranked table for most outstanding collections.
 *
 * Columns: #, Project (name), Projects (count), Outstanding (amount).
 *
 * @example
 * <OutstandingTable
 *   data={[
 *     { rank: 1, name: "Marcus Chen", projects: 112, outstanding: "$1,247,831.50" },
 *   ]}
 *   onViewAll={() => {}}
 * />
 */
export function OutstandingTable({
  data = [],
  onViewAll,
  className,
  ...rest
}) {
  return (
    <div
      className={["outstanding-table", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Header */}
      <div className="outstanding-table-header">
        <div className="outstanding-table-hcell outstanding-table-hcell--rank">
          #
        </div>
        <div className="outstanding-table-hcell outstanding-table-hcell--project">
          Project
        </div>
        <div className="outstanding-table-hcell outstanding-table-hcell--count">
          Projects
        </div>
        <div className="outstanding-table-hcell outstanding-table-hcell--amount">
          Outstanding
        </div>
      </div>

      {/* Rows */}
      {data.map((row) => (
        <div key={row.rank} className="outstanding-table-row">
          <div className="outstanding-table-cell outstanding-table-cell--rank">
            {row.rank}
          </div>
          <div className="outstanding-table-cell outstanding-table-cell--project">
            {row.name}
          </div>
          <div className="outstanding-table-cell outstanding-table-cell--count">
            {row.projects}
          </div>
          <div className="outstanding-table-cell outstanding-table-cell--amount">
            {row.outstanding}
          </div>
        </div>
      ))}

      {/* View all footer */}
      <div
        className="outstanding-table-footer"
        role="button"
        tabIndex={0}
        onClick={onViewAll}
        onKeyDown={(e) => e.key === "Enter" && onViewAll?.()}
      >
        <span className="outstanding-table-footer-icon">
          <Icon name="arrow-right-sm" size={12} color="var(--color-label-muted)" />
        </span>
        <span className="outstanding-table-footer-text">View all</span>
      </div>
    </div>
  );
}

const rowShape = PropTypes.shape({
  /** Row rank number. */
  rank: PropTypes.number.isRequired,
  /** Person/project name. */
  name: PropTypes.string.isRequired,
  /** Number of projects. */
  projects: PropTypes.number.isRequired,
  /** Outstanding amount display string. */
  outstanding: PropTypes.string.isRequired,
});

OutstandingTable.propTypes = {
  /** Array of ranked entries. */
  data: PropTypes.arrayOf(rowShape).isRequired,
  /** Callback when "View all" is clicked. */
  onViewAll: PropTypes.func,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
