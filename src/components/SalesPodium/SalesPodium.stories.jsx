import { SalesPodium } from "./SalesPodium";

const sampleData = [
  {
    name: "Sarah Jencks",
    avatar: "https://i.pravatar.cc/64?u=sarah-jencks",
    jobs: 77,
    signed: "$1.30 M",
    collected: "$800k",
  },
  {
    name: "Mike Ross",
    avatar: "https://i.pravatar.cc/64?u=mike-ross",
    jobs: 65,
    signed: "$1.10 M",
    collected: "$720k",
  },
  {
    name: "Amy Liu",
    avatar: "https://i.pravatar.cc/64?u=amy-liu",
    jobs: 58,
    signed: "$980k",
    collected: "$650k",
  },
];

export default {
  title: "Components/SalesPodium",
  component: SalesPodium,
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
