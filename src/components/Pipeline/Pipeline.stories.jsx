import { Pipeline } from "./Pipeline";

export default {
  title: "Components/Pipeline",
  component: Pipeline,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    title: "Pipeline",
    unassignedCount: 4,
    actionLabel: "New Project",
    onAction: () => {},
  },
};

export const NoUnassigned = {
  args: {
    title: "Pipeline",
    unassignedCount: 0,
    actionLabel: "New Project",
    onAction: () => {},
  },
};
