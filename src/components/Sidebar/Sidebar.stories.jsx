import { Sidebar } from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    activeItem: {
      control: "select",
      options: [
        "Home", "Agent", "Tasks", "Messages", "Projects",
        "Events", "Production", "Marketing", "Finance", "Reports",
      ],
    },
    defaultCollapsed: {
      control: "boolean",
    },
  },
};

/** Default sidebar — expanded with Home active. */
export const Default = {
  args: {
    activeItem: "Home",
    userName: "Rahul Thangaraj",
    userInitial: "R",
  },
};

/** Sidebar with a different active item. */
export const AgentActive = {
  args: {
    activeItem: "Agent",
    userName: "Rahul Thangaraj",
    userInitial: "R",
  },
};

/** Collapsed sidebar — icon-only mode. Click the toggle to expand. */
export const Collapsed = {
  args: {
    activeItem: "Home",
    userName: "Rahul Thangaraj",
    userInitial: "R",
    defaultCollapsed: true,
  },
};
