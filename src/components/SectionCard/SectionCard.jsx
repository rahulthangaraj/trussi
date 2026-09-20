import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./section-card.css";

/**
 * SectionCard — Reusable card with a title + count badge header.
 *
 * The right side of the header accepts any ReactNode via `headerAction`
 * for flexibility (e.g. "View all" link, filter button, etc.).
 *
 * @example
 * <SectionCard title="Needs review" count={7} headerAction={<a>View all</a>}>
 *   {content}
 * </SectionCard>
 */
export function SectionCard({
  title,
  count,
  headerAction,
  children,
  className,
  ...rest
}) {
  return (
    <div
      className={["section-card", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {/* Header */}
      <div className="section-card-header">
        <div className="section-card-title-group">
          <h2 className="section-card-title">{title}</h2>
          {count != null && (
            <span className="section-card-count">{count}</span>
          )}
        </div>
        {headerAction && (
          <div className="section-card-action">{headerAction}</div>
        )}
      </div>

      {/* Body */}
      {children && <div className="section-card-body">{children}</div>}
    </div>
  );
}

/**
 * SectionCard.ViewAllLink — Convenience component for the "View all" action.
 */
function ViewAllLink({ href = "#", onClick }) {
  return (
    <a className="section-card-view-all" href={href} onClick={onClick}>
      <span>View all</span>
      <Icon name="chevron-right-md" size={12} color="var(--color-label-link)" />
    </a>
  );
}

ViewAllLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
};

SectionCard.ViewAllLink = ViewAllLink;

/**
 * SectionCard.FilterButton — Convenience component for the filter action.
 */
function FilterButton({ onClick }) {
  return (
    <button
      className="section-card-filter-btn"
      onClick={onClick}
      aria-label="Filter"
    >
      <Icon name="filter" size={14} color="#4F4D55" />
    </button>
  );
}

FilterButton.propTypes = {
  onClick: PropTypes.func,
};

SectionCard.FilterButton = FilterButton;

SectionCard.propTypes = {
  /** Section title. */
  title: PropTypes.string.isRequired,
  /** Count shown in the badge next to the title. */
  count: PropTypes.number,
  /** Right-side header action (ReactNode). */
  headerAction: PropTypes.node,
  /** Card body content. */
  children: PropTypes.node,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
