import PropTypes from "prop-types";
import "./leaderboard-table.css";

/**
 * ProgressRing — Small circular progress indicator.
 */
function ProgressRing({ percent = 0 }) {
  const radius = 4.75;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <span className="leaderboard-table-progress-ring">
      <svg viewBox="0 0 12 12">
        <circle className="ring-bg" cx="6" cy="6" r={radius} />
        <circle
          className="ring-fill"
          cx="6"
          cy="6"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

ProgressRing.propTypes = {
  percent: PropTypes.number,
};

/**
 * LeaderboardTable — Ranked data table for the sales leaderboard.
 *
 * Columns: #, Name (avatar + name + jobs badge), Signed, Closed.
 * Supports a highlighted "You" row and progress hints.
 *
 * @example
 * <LeaderboardTable
 *   data={[
 *     { rank: 4, name: "James Taylor", avatar: "...", jobs: 76, signed: "$985,400", closed: "$985,400" },
 *   ]}
 *   currentUser="Rahul Thangaraj"
 * />
 */
export function LeaderboardTable({
  data = [],
  currentUser,
  className,
  ...rest
}) {
  return (
    <div
      className={["leaderboard-table", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Header */}
      <div className="leaderboard-table-header">
        <div className="leaderboard-table-header-cell leaderboard-table-header-cell--rank">
          #
        </div>
        <div className="leaderboard-table-header-cell leaderboard-table-header-cell--name">
          Name
        </div>
        <div className="leaderboard-table-header-cell leaderboard-table-header-cell--signed">
          Signed
        </div>
        <div className="leaderboard-table-header-cell leaderboard-table-header-cell--closed">
          Closed
        </div>
      </div>

      {/* Rows */}
      {data.map((person) => {
        const isYou =
          currentUser &&
          person.name.toLowerCase() === currentUser.toLowerCase();

        return (
          <div
            key={person.rank}
            className={[
              "leaderboard-table-row",
              isYou && "leaderboard-table-row--you",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {/* Rank */}
            <div className="leaderboard-table-cell leaderboard-table-cell--rank">
              {person.rank}
            </div>

            {/* Name cell */}
            <div className="leaderboard-table-cell leaderboard-table-cell--name">
              <img
                src={person.avatar}
                alt=""
                className="leaderboard-table-avatar"
              />
              <div className="leaderboard-table-name-group">
                <span className="leaderboard-table-name">{person.name}</span>
                {isYou && (
                  <>
                    <span className="leaderboard-table-you-dot" />
                    <span className="leaderboard-table-you-label">You</span>
                  </>
                )}
              </div>
              <span className="leaderboard-table-jobs">
                {person.jobs} Jobs
              </span>
            </div>

            {/* Signed */}
            <div className="leaderboard-table-cell leaderboard-table-cell--signed">
              <span className="leaderboard-table-amount">{person.signed}</span>
              {person.signedProgress && (
                <div className="leaderboard-table-progress">
                  <ProgressRing percent={person.signedProgress.percent} />
                  <span className="leaderboard-table-progress-label">
                    {person.signedProgress.label}
                  </span>
                </div>
              )}
            </div>

            {/* Closed */}
            <div className="leaderboard-table-cell leaderboard-table-cell--closed">
              <span className="leaderboard-table-amount">{person.closed}</span>
              {person.closedProgress && (
                <div className="leaderboard-table-progress">
                  <ProgressRing percent={person.closedProgress.percent} />
                  <span className="leaderboard-table-progress-label">
                    {person.closedProgress.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const progressShape = PropTypes.shape({
  /** Fill percentage (0–100). */
  percent: PropTypes.number.isRequired,
  /** Text label, e.g. "$300k to top 3". */
  label: PropTypes.string.isRequired,
});

const rowShape = PropTypes.shape({
  /** Display rank number. */
  rank: PropTypes.number.isRequired,
  /** Person's full name. */
  name: PropTypes.string.isRequired,
  /** Avatar image URL. */
  avatar: PropTypes.string.isRequired,
  /** Number of jobs/deals. */
  jobs: PropTypes.number.isRequired,
  /** Signed amount display string. */
  signed: PropTypes.string.isRequired,
  /** Closed amount display string. */
  closed: PropTypes.string.isRequired,
  /** Optional progress indicator for Signed column. */
  signedProgress: progressShape,
  /** Optional progress indicator for Closed column. */
  closedProgress: progressShape,
});

LeaderboardTable.propTypes = {
  /** Array of ranked entries. */
  data: PropTypes.arrayOf(rowShape).isRequired,
  /** Current user name — matching row gets "You" highlight. */
  currentUser: PropTypes.string,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
