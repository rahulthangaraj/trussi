import { PipelineCard } from "./PipelineCard";

export default {
  title: "Components/PipelineCard",
  component: PipelineCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 260 }}>
        <Story />
      </div>
    ),
  ],
};

export const Lead = {
  args: {
    stage: "Lead",
    count: "1,204",
    trend: 38,
    trendLabel: "today",
    dotPattern: [1, 0, 0, 0, 1, 0, 0, 0, 0],
    subStages: [
      { label: "New", value: 680, color: "var(--color-supporting-base)" },
      { label: "Contacted", value: 220, color: "var(--color-supporting-strong)" },
      { label: "Qualified", value: 160, color: "var(--color-supporting-muted)" },
      { label: "No response", value: 144, color: "#E7EDF3" },
    ],
    insight: "22 leads idle for 5+ days, follow up recommended",
  },
};

export const Prospect = {
  args: {
    stage: "Prospect",
    count: "843",
    trend: 12,
    trendLabel: "today",
    dotPattern: [0, 1, 0, 1, 0, 0, 0, 0, 1],
    subStages: [
      { label: "Evaluating", value: 280, color: "var(--color-supporting-base)" },
      { label: "Being Considered", value: 195, color: "var(--color-supporting-strong)" },
      { label: "Post Consideration", value: 148, color: "var(--color-supporting-muted)" },
      { label: "Final Decision", value: 120, color: "var(--color-supporting-faint)" },
      { label: "No sub-stage", value: 100, color: "#E7EDF3" },
    ],
    insight: "8 prospects awaiting proposal, 3 at risk of churning",
  },
};

export const Approved = {
  args: {
    stage: "Approved",
    count: "317",
    trend: 5,
    trendLabel: "today",
    dotPattern: [0, 0, 1, 0, 1, 0, 1, 0, 0],
    subStages: [
      { label: "Scheduling", value: 120, color: "var(--color-supporting-base)" },
      { label: "In Progress", value: 95, color: "var(--color-supporting-strong)" },
      { label: "Final Inspection", value: 62, color: "var(--color-supporting-muted)" },
      { label: "Pending Sign-off", value: 40, color: "#E7EDF3" },
    ],
    insight: "8 projects ready for scheduling this week",
  },
};

export const Collected = {
  args: {
    stage: "Collected",
    count: "1,589",
    trend: 9,
    trendLabel: "today",
    dotPattern: [1, 0, 1, 0, 0, 0, 0, 1, 0],
    subStages: [
      { label: "Invoiced", value: 580, color: "var(--color-supporting-base)" },
      { label: "Partial Payment", value: 390, color: "var(--color-supporting-strong)" },
      { label: "Paid in Full", value: 340, color: "var(--color-supporting-muted)" },
      { label: "Overdue", value: 180, color: "var(--color-supporting-faint)" },
      { label: "Written Off", value: 99, color: "#E7EDF3" },
    ],
    insight: "12 invoices overdue, $45k outstanding",
  },
};

/* Full pipeline row as seen on the dashboard */
export const PipelineRow = {
  decorators: [
    (Story) => (
      <div style={{ width: 1000 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <PipelineCard {...Lead.args} />
      <PipelineCard {...Prospect.args} />
      <PipelineCard {...Approved.args} />
      <PipelineCard {...Collected.args} />
    </div>
  ),
};
