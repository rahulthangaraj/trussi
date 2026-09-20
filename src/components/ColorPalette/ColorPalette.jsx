import PropTypes from "prop-types";
import "./color-palette.css";

/**
 * Renders a single color swatch with its token name and resolved value.
 */
function Swatch({ token, label }) {
  return (
    <div className="swatch">
      <div
        className="swatch__preview"
        style={{ backgroundColor: `var(${token})` }}
      />
      <div className="swatch__info">
        <span className="swatch__label">{label}</span>
        <code className="swatch__token">{token}</code>
      </div>
    </div>
  );
}

Swatch.propTypes = {
  token: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * Renders a group of color swatches under a category heading.
 */
export function ColorGroup({ title, tokens }) {
  return (
    <div className="color-group">
      <h3 className="color-group__title">{title}</h3>
      <div className="color-group__grid">
        {tokens.map(({ token, label }) => (
          <Swatch key={token} token={token} label={label} />
        ))}
      </div>
    </div>
  );
}

ColorGroup.propTypes = {
  title: PropTypes.string.isRequired,
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      token: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/**
 * All color tokens organised by Figma category.
 */
export const COLOR_TOKENS = {
  Background: [
    { token: "--color-bg-base", label: "Base" },
    { token: "--color-bg-base-hover", label: "Base Hover" },
    { token: "--color-bg-sub", label: "Sub" },
    { token: "--color-bg-sub-hover", label: "Sub Hover" },
    { token: "--color-bg-shade", label: "Shade" },
    { token: "--color-bg-shade-hover", label: "Shade Hover" },
    { token: "--color-bg-border", label: "Border" },
    { token: "--color-bg-border-solid", label: "Border Solid" },
    { token: "--color-bg-shade-border", label: "Shade Border" },
    { token: "--color-bg-shade-border-solid", label: "Shade Border Solid" },
  ],
  Label: [
    { token: "--color-label-title", label: "Title" },
    { token: "--color-label-base", label: "Base" },
    { token: "--color-label-muted", label: "Muted" },
    { token: "--color-label-faint", label: "Faint" },
    { token: "--color-label-link", label: "Link" },
    { token: "--color-label-button", label: "Button" },
  ],
  Control: [
    { token: "--color-control-base", label: "Base" },
    { token: "--color-control-base-bg", label: "Base Bg" },
    { token: "--color-control-secondary", label: "Secondary" },
    { token: "--color-control-hover", label: "Hover" },
    { token: "--color-control-tertiary", label: "Tertiary" },
    { token: "--color-control-tertiary-bg", label: "Tertiary Bg" },
    { token: "--color-control-alert", label: "Alert" },
    { token: "--color-control-alert-bg", label: "Alert Bg" },
    { token: "--color-control-positive", label: "Positive" },
    { token: "--color-control-positive-bg", label: "Positive Bg" },
  ],
  Supporting: [
    { token: "--color-supporting-base", label: "Base" },
    { token: "--color-supporting-strong", label: "Strong" },
    { token: "--color-supporting-muted", label: "Muted" },
    { token: "--color-supporting-faint", label: "Faint" },
    { token: "--color-supporting-bg", label: "Background" },
  ],
  Interaction: [
    { token: "--color-interaction-hover", label: "Hover" },
    { token: "--color-interaction-hover-strong", label: "Hover Strong" },
    { token: "--color-interaction-pressed", label: "Pressed" },
  ],
};
