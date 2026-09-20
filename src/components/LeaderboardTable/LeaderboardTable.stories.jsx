import { LeaderboardTable } from "./LeaderboardTable";

const sampleData = [
  {
    rank: 4,
    name: "James Taylor",
    avatar: "https://i.pravatar.cc/64?u=james-taylor",
    jobs: 76,
    signed: "$985,400",
    closed: "$985,400",
  },
  {
    rank: 5,
    name: "Olivia Santos",
    avatar: "https://i.pravatar.cc/64?u=olivia-santos",
    jobs: 71,
    signed: "$894,200",
    closed: "$894,200",
  },
  {
    rank: 6,
    name: "David Park",
    avatar: "https://i.pravatar.cc/64?u=david-park",
    jobs: 64,
    signed: "$812,800",
    closed: "$812,800",
  },
  {
    rank: 7,
    name: "Megan Foster",
    avatar: "https://i.pravatar.cc/64?u=megan-foster",
    jobs: 58,
    signed: "$745,100",
    closed: "$745,100",
  },
  {
    rank: 8,
    name: "Ryan Nguyen",
    avatar: "https://i.pravatar.cc/64?u=ryan-nguyen",
    jobs: 52,
    signed: "$678,300",
    closed: "$678,300",
  },
  {
    rank: 9,
    name: "Anna Mitchell",
    avatar: "https://i.pravatar.cc/64?u=anna-mitchell",
    jobs: 45,
    signed: "$592,500",
    closed: "$592,500",
  },
  {
    rank: 10,
    name: "Chris Howard",
    avatar: "https://i.pravatar.cc/64?u=chris-howard",
    jobs: 39,
    signed: "$498,700",
    closed: "$498,700",
  },
  {
    rank: 31,
    name: "Rahul Thangaraj",
    avatar: "https://i.pravatar.cc/64?u=rahul-thangaraj",
    jobs: 22,
    signed: "$342,600",
    closed: "$342,600",
    signedProgress: { percent: 55, label: "$300k to top 3" },
    closedProgress: { percent: 55, label: "$300k to top 3" },
  },
];

export default {
  title: "Components/LeaderboardTable",
  component: LeaderboardTable,
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
    currentUser: "Rahul Thangaraj",
  },
};

export const WithoutCurrentUser = {
  args: {
    data: sampleData.slice(0, 5),
  },
};

export const FewRows = {
  args: {
    data: sampleData.slice(0, 3),
  },
};
