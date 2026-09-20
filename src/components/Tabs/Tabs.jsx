import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./tabs.css";

/**
 * Tabs — Pill-style tab switcher with a sliding active indicator.
 *
 * @example
 * <Tabs
 *   items={["All", "Checklist", "Requests", "Offerings"]}
 *   value="All"
 *   onChange={(tab) => console.log(tab)}
 * />
 */
export function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className,
  ...rest
}) {
  const [activeTab, setActiveTab] = useState(value ?? defaultValue ?? items[0]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const containerRef = useRef(null);
  const tabRefs = useRef({});

  // Sync controlled value
  useEffect(() => {
    if (value != null) setActiveTab(value);
  }, [value]);

  // Measure and position the sliding indicator
  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const activeEl = tabRefs.current[activeTab];
    if (!container || !activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    setIndicator({
      left: activeRect.left - containerRect.left,
      width: activeRect.width,
    });
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  // Recalculate on resize
  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  function handleClick(tab) {
    if (value == null) setActiveTab(tab);
    onChange?.(tab);
  }

  return (
    <div
      ref={containerRef}
      className={["tabs", className].filter(Boolean).join(" ")}
      role="tablist"
      {...rest}
    >
      {/* Sliding indicator */}
      <span
        className="tabs-indicator"
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
      />

      {items.map((tab) => (
        <button
          key={tab}
          ref={(el) => { tabRefs.current[tab] = el; }}
          className="tabs-tab"
          role="tab"
          aria-selected={activeTab === tab}
          data-active={activeTab === tab || undefined}
          onClick={() => handleClick(tab)}
        >
          <span className="tabs-tab-label">{tab}</span>
        </button>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  /** Array of tab labels. */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Controlled active tab value. */
  value: PropTypes.string,
  /** Default active tab (uncontrolled). */
  defaultValue: PropTypes.string,
  /** Callback when a tab is clicked. */
  onChange: PropTypes.func,
  /** Additional CSS class names. */
  className: PropTypes.string,
};
