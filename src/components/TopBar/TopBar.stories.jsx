import { TopBar } from "./TopBar";

export default {
  title: "Components/TopBar",
  component: TopBar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#F7F6F5", minHeight: 52 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {};
