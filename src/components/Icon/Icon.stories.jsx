import { useState } from "react";
import { Icon, ICON_NAMES } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: ICON_NAMES,
    },
    size: {
      control: { type: "range", min: 12, max: 64, step: 2 },
    },
    color: {
      control: "color",
    },
  },
};

/** Single icon with controls */
export const Default = {
  args: {
    name: "search",
    size: 24,
  },
};

/** Trussi logo — scales by height, maintains aspect ratio. */
export const Logo = {
  args: {
    name: "trussi-logo",
    size: 28,
  },
};

/** Browse all icons — use the search box to filter. */
export const Gallery = {
  render: () => <IconGallery />,
  parameters: {
    controls: { disable: true },
  },
};

function IconGallery() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(24);
  const [copied, setCopied] = useState(null);

  const filtered = ICON_NAMES.filter((n) =>
    n.toLowerCase().includes(search.toLowerCase())
  );

  function handleCopy(name) {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)" }}>
      {/* Controls bar */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 20,
          position: "sticky",
          top: 0,
          background: "var(--color-bg-base)",
          padding: "12px 0",
          zIndex: 10,
          borderBottom: "1px solid var(--color-bg-border-solid)",
        }}
      >
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px solid var(--color-bg-border-solid)",
            background: "var(--color-bg-sub)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--body-sm-size)",
            color: "var(--color-label-base)",
            width: 280,
            outline: "none",
          }}
        />
        <label style={{ fontSize: "var(--body-xs-size)", color: "var(--color-label-muted)" }}>
          Size:
          <input
            type="range"
            min={12}
            max={48}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{ marginLeft: 6, verticalAlign: "middle" }}
          />
          {size}px
        </label>
        <span style={{ fontSize: "var(--body-xs-size)", color: "var(--color-label-faint)", marginLeft: "auto" }}>
          {filtered.length} / {ICON_NAMES.length} icons
        </span>
      </div>

      {/* Icon grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 4,
        }}
      >
        {filtered.map((name) => (
          <button
            key={name}
            onClick={() => handleCopy(name)}
            title={`Click to copy: ${name}`}
            style={{
              all: "unset",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: "14px 8px",
              borderRadius: 8,
              cursor: "pointer",
              textAlign: "center",
              transition: "background-color 0.1s",
              backgroundColor: copied === name ? "var(--color-control-positive-bg)" : "transparent",
            }}
            onMouseEnter={(e) => {
              if (copied !== name) e.currentTarget.style.backgroundColor = "var(--color-bg-sub)";
            }}
            onMouseLeave={(e) => {
              if (copied !== name) e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <Icon name={name} size={size} />
            <span
              style={{
                fontSize: "var(--body-xs-size)",
                color: copied === name ? "var(--color-control-positive)" : "var(--color-label-muted)",
                wordBreak: "break-all",
                lineHeight: 1.3,
              }}
            >
              {copied === name ? "Copied!" : name}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "var(--color-label-faint)", textAlign: "center", padding: 40 }}>
          No icons match &ldquo;{search}&rdquo;
        </p>
      )}
    </div>
  );
}
