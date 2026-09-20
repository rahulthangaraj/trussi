import { AnnouncementCard } from "./AnnouncementCard";

export default {
  title: "Components/AnnouncementCard",
  component: AnnouncementCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 260, minHeight: 200 }}>
        <Story />
      </div>
    ),
  ],
};

/* --- Deal / Achievement --- */
export const Deal = {
  args: {
    label: "Announcement",
    date: "09 Sep",
    avatar: "https://i.pravatar.cc/64?u=rahul",
    onDismiss: () => {},
    children: "Rahul Thangaraj closed a deal worth $10k yesterday!",
  },
};

/* --- Meeting --- */
export const Meeting = {
  args: {
    label: "Announcement",
    date: "09 Sep",
    icon: "calendar-today",
    iconColor: "#5B8DEF",
    actionLabel: "View",
    onAction: () => {},
    onDismiss: () => {},
    children:
      "Sales meeting Thursday at 9:00 AM. Pipeline updates due 8:30 AM",
  },
};

/* --- Campaign --- */
export const Campaign = {
  render: (args) => (
    <AnnouncementCard {...args}>
      <div className="announcement-card-details">
        <div>
          <span className="announcement-card-detail-label">Campaign:</span>{" "}
          <strong>Fall Roof Savings</strong>
        </div>
        <div>
          <span className="announcement-card-detail-label">Duration:</span>{" "}
          <strong>Sep 15 to Oct 31</strong>
        </div>
        <div>
          <span className="announcement-card-detail-label">Customer:</span>{" "}
          <strong>10% off</strong>{" "}
          <span className="announcement-card-detail-label">| PM:</span>{" "}
          <strong>$500 per deal</strong>
        </div>
      </div>
    </AnnouncementCard>
  ),
  args: {
    label: "Announcement",
    date: "09 Sep",
    icon: "robot-head",
    iconColor: "#8B7CF6",
    onDismiss: () => {},
  },
};

/* --- Row of cards (as seen on dashboard) --- */
export const CardRow = {
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <AnnouncementCard
        label="Announcement"
        date="09 Sep"
        avatar="https://i.pravatar.cc/64?u=rahul"
        onDismiss={() => {}}
      >
        Rahul Thangaraj closed a deal worth $10k yesterday!
      </AnnouncementCard>

      <AnnouncementCard
        label="Announcement"
        date="09 Sep"
        icon="calendar-today"
        iconColor="#5B8DEF"
        actionLabel="View"
        onAction={() => {}}
        onDismiss={() => {}}
      >
        Sales meeting Thursday at 9:00 AM. Pipeline updates due 8:30 AM
      </AnnouncementCard>

      <AnnouncementCard
        label="Announcement"
        date="09 Sep"
        icon="robot-head"
        iconColor="#8B7CF6"
        onDismiss={() => {}}
      >
        <div className="announcement-card-details">
          <div>
            <span className="announcement-card-detail-label">Campaign:</span>{" "}
            <strong>Fall Roof Savings</strong>
          </div>
          <div>
            <span className="announcement-card-detail-label">Duration:</span>{" "}
            <strong>Sep 15 to Oct 31</strong>
          </div>
          <div>
            <span className="announcement-card-detail-label">Customer:</span>{" "}
            <strong>10% off</strong>{" "}
            <span className="announcement-card-detail-label">| PM:</span>{" "}
            <strong>$500 per deal</strong>
          </div>
        </div>
      </AnnouncementCard>
    </div>
  ),
};
