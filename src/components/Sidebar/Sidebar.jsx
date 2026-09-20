import { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./sidebar.css";

const NAV_ITEMS = [
  { label: "Home", icon: "compass", active: true },
  { label: "Agent", icon: "agent" },
  { label: "Tasks", icon: "tasks" },
  { label: "Messages", icon: "messaging" },
  { label: "Projects", icon: "folders" },
  { label: "Events", icon: "calendar-today" },
  { label: "Production", icon: "settings-cog" },
  { label: "Marketing", icon: "trending" },
  { label: "Finance", icon: "dollar-circle" },
  { label: "Reports", icon: "bar-chart" },
];

const BOTTOM_NAV = [
  { label: "Help & Training", icon: "help" },
  { label: "Feedback", icon: "comment" },
];

/**
 * Sidebar — main navigation panel from the Trussi design system.
 * 220px expanded, 52px collapsed, light background (#F7F6F5).
 *
 * @example
 * <Sidebar />
 * <Sidebar activeItem="Agent" defaultCollapsed />
 */
export function Sidebar({
  activeItem = "Home",
  userName = "Rahul Thangaraj",
  userInitial = "R",
  defaultCollapsed = false,
}) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <aside className="sidebar" data-collapsed={collapsed || undefined}>
      {/* Top row: Collapse / Expand button */}
      <div className="sidebar-top">
        <button
          className="sidebar-collapse-btn"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((c) => !c)}
        >
          <Icon name="sidebar" size={16} color="#59595B" />
        </button>
      </div>

      {/* Logo + Nav */}
      <div className="sidebar-main">
        {/* Logo */}
        <div className="sidebar-logo-wrap">
          <div className="sidebar-logo-inner">
            <Icon name="trussi-logo" size={28} className="sidebar-logo-img" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className="sidebar-nav-item"
              data-active={item.label === activeItem || undefined}
            >
              <span className="sidebar-nav-icon">
                <Icon name={item.icon} size={14} color="#1F1F1F" />
              </span>
              <span className="sidebar-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-inner">
          {/* Product Update Card */}
          <div className="sidebar-update-card">
            <div className="sidebar-update-title">Product Update</div>
            <div className="sidebar-update-text">Trussi has a new look!</div>
          </div>

          {/* Help & Feedback */}
          <nav className="sidebar-bottom-nav">
            {BOTTOM_NAV.map((item) => (
              <button key={item.label} className="sidebar-nav-item">
                <span className="sidebar-nav-icon">
                  <Icon name={item.icon} size={14} color="#1F1F1F" />
                </span>
                <span className="sidebar-nav-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="sidebar-profile">
          <div className="sidebar-profile-left">
            <div className="sidebar-avatar-fallback">{userInitial}</div>
            <div className="sidebar-profile-name">{userName}</div>
          </div>
          <button className="sidebar-profile-menu" aria-label="More options">
            <Icon name="dots-horizontal-more-menu" size={16} color="#212121" />
          </button>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  /** Which nav item is currently active. */
  activeItem: PropTypes.oneOf(NAV_ITEMS.map((i) => i.label)),
  /** Display name in the profile section. */
  userName: PropTypes.string,
  /** Fallback initial for the avatar. */
  userInitial: PropTypes.string,
  /** Start in collapsed (icon-only) mode. */
  defaultCollapsed: PropTypes.bool,
};
