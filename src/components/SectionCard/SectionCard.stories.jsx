import { SectionCard } from "./SectionCard";

export default {
  title: "Components/SectionCard",
  component: SectionCard,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
};

export const NeedsReview = {
  args: {
    title: "Needs review",
    count: 7,
    headerAction: <SectionCard.ViewAllLink />,
  },
};

export const SalesLeaderboard = {
  args: {
    title: "Sales Leaderboard",
    count: 11,
    headerAction: <SectionCard.FilterButton />,
  },
};

export const SideBySide = {
  decorators: [
    (Story) => (
      <div style={{ width: 1000 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <SectionCard
        title="Needs review"
        count={7}
        headerAction={<SectionCard.ViewAllLink />}
      />
      <SectionCard
        title="Sales Leaderboard"
        count={11}
        headerAction={<SectionCard.FilterButton />}
      />
    </div>
  ),
};
