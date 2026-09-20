import { Icon } from "../Icon/Icon";
import "./topbar.css";

/**
 * TopBar — search bar + action buttons.
 * Sits above the white content area in the dashboard layout.
 */
export function TopBar() {
  return (
    <header className="topbar">
      {/* Search — centred in the available width */}
      <div className="topbar-search">
        <Icon name="search" size={14} color="#808080" />
        <span className="topbar-search-text">Search for anything</span>
      </div>

      {/* Right actions */}
      <div className="topbar-right">
        <button className="topbar-icon-btn" aria-label="Notifications">
          <Icon name="notification-bell" size={14} color="#59595B" />
        </button>
        <button className="topbar-ask-btn">
          <Icon name="regenerate-star" size={16} color="#1F1F1F" />
          <span className="topbar-ask-text">Ask Trussi</span>
        </button>
      </div>
    </header>
  );
}
