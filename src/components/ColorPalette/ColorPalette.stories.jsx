import { ColorGroup, COLOR_TOKENS } from "./ColorPalette";

export default {
  title: "Foundations/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Color tokens from the Trussi design system. " +
          "Light mode is the default; dark mode activates via `prefers-color-scheme` " +
          "or by setting `data-theme=\"dark\"` on any ancestor element. " +
          "Use the toolbar toggle to switch between modes.",
      },
    },
  },
};

/* ---------------------------------------------------------------------------
   Helper — wraps children in a themed container
   --------------------------------------------------------------------------- */

function ThemedContainer({ theme, children }) {
  return (
    <div
      data-theme={theme}
      style={{
        padding: "2rem",
        borderRadius: "12px",
        backgroundColor: "var(--color-bg-base)",
        color: "var(--color-label-base)",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   All Colors — light mode
   --------------------------------------------------------------------------- */

export const LightMode = {
  render: () => (
    <ThemedContainer theme="light">
      {Object.entries(COLOR_TOKENS).map(([group, tokens]) => (
        <ColorGroup key={group} title={group} tokens={tokens} />
      ))}
    </ThemedContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "All color tokens rendered in light mode." },
    },
  },
};

/* ---------------------------------------------------------------------------
   All Colors — dark mode
   --------------------------------------------------------------------------- */

export const DarkMode = {
  render: () => (
    <ThemedContainer theme="dark">
      {Object.entries(COLOR_TOKENS).map(([group, tokens]) => (
        <ColorGroup key={group} title={group} tokens={tokens} />
      ))}
    </ThemedContainer>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: "All color tokens rendered in dark mode." },
    },
  },
};

/* ---------------------------------------------------------------------------
   Side-by-side comparison
   --------------------------------------------------------------------------- */

export const SideBySide = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      <ThemedContainer theme="light">
        <h2 style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--font-size-20)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--color-label-title)",
          margin: "0 0 1.5rem",
        }}>
          Light
        </h2>
        {Object.entries(COLOR_TOKENS).map(([group, tokens]) => (
          <ColorGroup key={group} title={group} tokens={tokens} />
        ))}
      </ThemedContainer>
      <ThemedContainer theme="dark">
        <h2 style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--font-size-20)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--color-label-title)",
          margin: "0 0 1.5rem",
        }}>
          Dark
        </h2>
        {Object.entries(COLOR_TOKENS).map(([group, tokens]) => (
          <ColorGroup key={group} title={group} tokens={tokens} />
        ))}
      </ThemedContainer>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
    docs: {
      description: {
        story: "Light and dark palettes side by side for comparison.",
      },
    },
  },
};

/* ---------------------------------------------------------------------------
   Individual category stories
   --------------------------------------------------------------------------- */

export const Background = {
  render: () => <ColorGroup title="Background" tokens={COLOR_TOKENS.Background} />,
  parameters: { controls: { disable: true } },
};

export const Label = {
  render: () => <ColorGroup title="Label" tokens={COLOR_TOKENS.Label} />,
  parameters: { controls: { disable: true } },
};

export const Control = {
  render: () => <ColorGroup title="Control" tokens={COLOR_TOKENS.Control} />,
  parameters: { controls: { disable: true } },
};

export const Supporting = {
  render: () => <ColorGroup title="Supporting" tokens={COLOR_TOKENS.Supporting} />,
  parameters: { controls: { disable: true } },
};

export const Interaction = {
  render: () => <ColorGroup title="Interaction" tokens={COLOR_TOKENS.Interaction} />,
  parameters: { controls: { disable: true } },
};
