import { OutstandingTable } from "./OutstandingTable";
import { SectionCard } from "../SectionCard/SectionCard";

const sampleData = [
  { rank: 1, name: "Marcus Chen", projects: 112, outstanding: "$1,247,831.50" },
  { rank: 2, name: "Elena Rodriguez", projects: 98, outstanding: "$983,214.75" },
  { rank: 3, name: "Sarah Jencks", projects: 74, outstanding: "$853,932.23" },
  { rank: 4, name: "David Okafor", projects: 89, outstanding: "$721,456.00" },
  { rank: 5, name: "Priya Sharma", projects: 63, outstanding: "$614,289.18" },
  { rank: 6, name: "James Whitfield", projects: 51, outstanding: "$492,107.60" },
  { rank: 7, name: "Aiko Tanaka", projects: 45, outstanding: "$378,650.33" },
  { rank: 8, name: "Rachel Nguyen", projects: 38, outstanding: "$264,519.90" },
  { rank: 9, name: "Tom Bradley", projects: 27, outstanding: "$158,743.42" },
  { rank: 10, name: "Lisa Hoffmann", projects: 19, outstanding: "$92,415.87" },
];

export default {
  title: "Components/OutstandingTable",
  component: OutstandingTable,
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
    data: sampleData,
  },
};

export const InSectionCard = {
  render: () => (
    <SectionCard
      title="Most Outstanding Collections"
      headerAction={<SectionCard.FilterButton />}
    >
      <OutstandingTable data={sampleData} />
    </SectionCard>
  ),
};
