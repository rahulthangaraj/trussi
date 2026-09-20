import { ReviewItem } from "./ReviewItem";

export default {
  title: "Components/ReviewItem",
  component: ReviewItem,
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

export const ClaimRequest = {
  args: {
    icon: "clipboard-copy",
    color: "var(--color-supporting-strong)",
    title: "Claim number on file",
    subtitle: "Denise Hollis",
    requestedBy: { name: "Rahul Thangaraj", initials: "RT" },
    actionLabel: "View",
  },
};

export const ProjectAssign = {
  args: {
    icon: "folder-documents-finder",
    color: "var(--color-control-base)",
    title: "X8 — Roof replacement",
    subtitle: "Marcus Webb",
    requestedBy: { name: "Sarah Chen", initials: "SC" },
    actionLabel: "Assign",
  },
};

export const ChecklistItem = {
  args: {
    icon: "notebook-check",
    color: "var(--color-control-positive)",
    title: "Insurance verification",
    subtitle: "Tony Ramirez",
    requestedBy: { name: "Rahul Thangaraj", initials: "RT" },
    actionLabel: "View",
  },
};

export const ReviewList = {
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div>
      <ReviewItem
        icon="clipboard-copy"
        color="var(--color-supporting-strong)"
        title="Claim number on file"
        subtitle="Denise Hollis"
        requestedBy={{ name: "Rahul Thangaraj", initials: "RT" }}
        actionLabel="View"
      />
      <div style={{ borderTop: "1px solid #F2F2F2", margin: "8px 0" }} />
      <ReviewItem
        icon="folder-documents-finder"
        color="var(--color-control-base)"
        title="X8 — Roof replacement"
        subtitle="Marcus Webb"
        requestedBy={{ name: "Sarah Chen", initials: "SC" }}
        actionLabel="Assign"
      />
      <div style={{ borderTop: "1px solid #F2F2F2", margin: "8px 0" }} />
      <ReviewItem
        icon="clipboard-copy"
        color="var(--color-supporting-strong)"
        title="Insurance verification"
        subtitle="Tony Ramirez"
        requestedBy={{ name: "Rahul Thangaraj", initials: "RT" }}
        actionLabel="View"
      />
    </div>
  ),
};
