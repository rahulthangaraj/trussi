import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./sales-podium.css";

/**
 * SalesPodium — Podium-style visualization for top 3 sales performers
 * with an optional ranked table for remaining entries.
 *
 * @example
 * <SalesPodium
 *   data={[
 *     { name: "Sarah Jencks", avatar: "...", jobs: 77, signed: "$1.30 M", collected: "$800k" },
 *     { name: "Mike Ross", avatar: "...", jobs: 65, signed: "$1.10 M", collected: "$720k" },
 *     { name: "Amy Liu", avatar: "...", jobs: 58, signed: "$980k", collected: "$650k" },
 *   ]}
 * />
 */
export function SalesPodium({ data = [], className, ...rest }) {
  // Podium order: 2nd (left), 1st (center), 3rd (right)
  const ordered = [data[1], data[0], data[2]].filter(Boolean);
  const placements = ["second", "first", "third"];

  return (
    <div
      className={["sales-podium", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {ordered.map((person, i) => {
        const placement = placements[i];
        const isFirst = placement === "first";

        return (
          <div
            key={person.name}
            className={`sales-podium-card sales-podium-card--${placement}`}
          >
            {/* Person info */}
            <div className="sales-podium-person">
              <img
                src={person.avatar}
                alt=""
                className="sales-podium-avatar"
              />
              <div className="sales-podium-info">
                <div className="sales-podium-name-row">
                  <span className="sales-podium-name">{person.name}</span>
                  {isFirst && (
                    <Icon name="crown" size={14} color="#FFD700" />
                  )}
                </div>
                <span className="sales-podium-jobs">
                  {person.jobs} Jobs
                </span>
              </div>
            </div>

            {/* Stats pill */}
            <div className="sales-podium-stats">
              <div className="sales-podium-stat">
                <span className="sales-podium-stat-value">
                  {person.signed}
                </span>
                <span className="sales-podium-stat-label">Signed</span>
              </div>
              <div className="sales-podium-stat">
                <span className="sales-podium-stat-value">
                  {person.collected}
                </span>
                <span className="sales-podium-stat-label">Collected</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const personShape = PropTypes.shape({
  /** Person's full name. */
  name: PropTypes.string.isRequired,
  /** Avatar image URL. */
  avatar: PropTypes.string.isRequired,
  /** Number of jobs/deals. */
  jobs: PropTypes.number.isRequired,
  /** Signed amount display string (e.g. "$1.30 M"). */
  signed: PropTypes.string.isRequired,
  /** Collected amount display string (e.g. "$800k"). */
  collected: PropTypes.string.isRequired,
});

SalesPodium.propTypes = {
  /** Array of sales people, ordered by rank (1st, 2nd, 3rd, ...). */
  data: PropTypes.arrayOf(personShape).isRequired,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
