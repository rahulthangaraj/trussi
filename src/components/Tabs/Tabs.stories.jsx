import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    items: ["All", "Checklist", "Requests", "Offerings"],
    defaultValue: "All",
  },
};

export const ThreeTabs = {
  args: {
    items: ["Overview", "Details", "History"],
    defaultValue: "Overview",
  },
};

export const FiveTabs = {
  args: {
    items: ["All", "Active", "Pending", "Completed", "Archived"],
    defaultValue: "All",
  },
};
