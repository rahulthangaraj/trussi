import { CollectionsChart } from "./CollectionsChart";

const sampleData = [
  42000, 48000, 52000, 47000, 55000, 61000, 58000, 64000, 70000, 67000,
  73000, 78000, 72000, 80000, 85000, 82000, 88000, 91000, 86000, 93000,
];

const sampleDates = [
  "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19",
  "Aug 20", "Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26",
  "Aug 27", "Aug 28", "Aug 29", "Aug 30", "Sep 1", "Sep 2",
];

const xLabels = ["Aug' 13", "Aug' 18", "Aug' 23", "Aug' 28", "Sep' 2"];

export default {
  title: "Components/CollectionsChart",
  component: CollectionsChart,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 540 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    label: "Collections",
    amount: "$683,000",
    cents: ".90",
    trend: 12,
    period: "Last 30 days",
    data: sampleData,
    dates: sampleDates,
    xLabels,
  },
};
