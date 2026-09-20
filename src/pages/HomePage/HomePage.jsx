import { Icon } from "../../components/Icon/Icon";
import { AnnouncementCard } from "../../components/AnnouncementCard/AnnouncementCard";
import { Pipeline } from "../../components/Pipeline/Pipeline";
import { PipelineCard } from "../../components/PipelineCard/PipelineCard";
import { SectionCard } from "../../components/SectionCard/SectionCard";
import { Tabs } from "../../components/Tabs/Tabs";
import { ReviewItem } from "../../components/ReviewItem/ReviewItem";
import { SalesPodium } from "../../components/SalesPodium/SalesPodium";
import { LeaderboardTable } from "../../components/LeaderboardTable/LeaderboardTable";
import { CollectionsChart } from "../../components/CollectionsChart/CollectionsChart";
import { OutstandingTable } from "../../components/OutstandingTable/OutstandingTable";
import claudeTrussiLogo from "../../assets/claude-x-trussi-logo.svg";
import "./homepage.css";

const outstandingData = [
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

/* --- Sales Leaderboard data --- */

const podiumData = [
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

const leaderboardTableData = [
  { rank: 4, name: "James Taylor", avatar: "https://i.pravatar.cc/64?u=james-taylor", jobs: 76, signed: "$985,400", closed: "$985,400" },
  { rank: 5, name: "Olivia Santos", avatar: "https://i.pravatar.cc/64?u=olivia-santos", jobs: 71, signed: "$894,200", closed: "$894,200" },
  { rank: 6, name: "David Park", avatar: "https://i.pravatar.cc/64?u=david-park", jobs: 64, signed: "$812,800", closed: "$812,800" },
  { rank: 7, name: "Megan Foster", avatar: "https://i.pravatar.cc/64?u=megan-foster", jobs: 58, signed: "$745,100", closed: "$745,100" },
  { rank: 8, name: "Ryan Nguyen", avatar: "https://i.pravatar.cc/64?u=ryan-nguyen", jobs: 52, signed: "$678,300", closed: "$678,300" },
  { rank: 9, name: "Anna Mitchell", avatar: "https://i.pravatar.cc/64?u=anna-mitchell", jobs: 45, signed: "$592,500", closed: "$592,500" },
  { rank: 10, name: "Chris Howard", avatar: "https://i.pravatar.cc/64?u=chris-howard", jobs: 39, signed: "$498,700", closed: "$498,700" },
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

export function HomePage() {
  return (
    <div className="homepage">
      {/* --- MCP Banner --- */}
      <div className="mcp-banner">
        <div className="mcp-banner-inner">
          <img
            src={claudeTrussiLogo}
            alt=""
            className="mcp-logo"
            aria-hidden="true"
          />

          <span className="mcp-banner-text">
            Manage everything within claude, try out{" "}
          </span>
          <a className="mcp-banner-link" href="#">
            Trussi MCP
          </a>
          <Icon
            name="arrow-right-sm"
            size={12}
            color="var(--color-control-base)"
          />
        </div>
      </div>

      {/* --- Greeting --- */}
      <div className="homepage-greeting">
        <h1 className="homepage-title">Good afternoon, rahul</h1>

        <div className="homepage-meta">
          <div className="homepage-weather">
            <span className="homepage-weather-temp">
              103° Sunny, Wichita KS
            </span>
            <Icon name="sun" size={14} color="#F5B000" />
          </div>
          <span className="homepage-weather-note">
            Good exterior work window until 4 PM
          </span>
        </div>
      </div>

      {/* --- Announcement Cards --- */}
      <div className="homepage-cards">
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

        <AnnouncementCard
          label="Announcement"
          date="08 Sep"
          avatar="https://i.pravatar.cc/64?u=sarah"
          actionLabel="Assign"
          onAction={() => {}}
          onDismiss={() => {}}
        >
          Unassigned lead: Sarah Mitchell, 742 Elm St, Wichita KS — $8,500
          estimate
        </AnnouncementCard>
      </div>

      {/* --- Pipeline --- */}
      <Pipeline
        title="Pipeline"
        unassignedCount={4}
        actionLabel="New Project"
        onAction={() => {}}
      >
        <div className="homepage-pipeline-cards">
          <PipelineCard
            stage="Lead"
            count="1,204"
            trend={38}
            trendLabel="today"
            dotPattern={[1, 0, 0, 0, 1, 0, 0, 0, 0]}
            subStages={[
              { label: "New", value: 680, color: "var(--color-supporting-base)" },
              { label: "Contacted", value: 220, color: "var(--color-supporting-strong)" },
              { label: "Qualified", value: 160, color: "var(--color-supporting-muted)" },
              { label: "No response", value: 144, color: "#E7EDF3" },
            ]}
            insight="22 leads idle for 5+ days, follow up recommended"
          />
          <PipelineCard
            stage="Prospect"
            count="843"
            trend={12}
            trendLabel="today"
            dotPattern={[0, 1, 0, 1, 0, 0, 0, 0, 1]}
            subStages={[
              { label: "Evaluating", value: 280, color: "var(--color-supporting-base)" },
              { label: "Being Considered", value: 195, color: "var(--color-supporting-strong)" },
              { label: "Post Consideration", value: 148, color: "var(--color-supporting-muted)" },
              { label: "Final Decision", value: 120, color: "var(--color-supporting-faint)" },
              { label: "No sub-stage", value: 100, color: "#E7EDF3" },
            ]}
            insight="8 prospects awaiting proposal, 3 at risk of churning"
          />
          <PipelineCard
            stage="Approved"
            count="317"
            trend={5}
            trendLabel="today"
            dotPattern={[0, 0, 1, 0, 1, 0, 1, 0, 0]}
            subStages={[
              { label: "Scheduling", value: 120, color: "var(--color-supporting-base)" },
              { label: "In Progress", value: 95, color: "var(--color-supporting-strong)" },
              { label: "Final Inspection", value: 62, color: "var(--color-supporting-muted)" },
              { label: "Pending Sign-off", value: 40, color: "#E7EDF3" },
            ]}
            insight="8 projects ready for scheduling this week"
          />
          <PipelineCard
            stage="Collected"
            count="1,589"
            trend={9}
            trendLabel="today"
            dotPattern={[1, 0, 1, 0, 0, 0, 0, 1, 0]}
            subStages={[
              { label: "Invoiced", value: 580, color: "var(--color-supporting-base)" },
              { label: "Partial Payment", value: 390, color: "var(--color-supporting-strong)" },
              { label: "Paid in Full", value: 340, color: "var(--color-supporting-muted)" },
              { label: "Overdue", value: 180, color: "var(--color-supporting-faint)" },
              { label: "Written Off", value: 99, color: "#E7EDF3" },
            ]}
            insight="12 invoices overdue, $45k outstanding"
          />
        </div>
      </Pipeline>

      {/* --- Needs Review + Sales Leaderboard --- */}
      <div className="homepage-two-col">
        <div className="homepage-left-col">
          <SectionCard
            title="Needs review"
            count={7}
            headerAction={<SectionCard.ViewAllLink />}
          >
            <Tabs
              items={["All", "Checklist", "Requests", "Offerings"]}
              defaultValue="All"
            />
            <div className="homepage-ai-summary">
              <Icon name="ai-sparkle" size={16} />
              <span>
                Nine of these arrived after 4pm. Leads that land before noon
                get picked up in under 2 hours on average.
              </span>
            </div>
            <div className="homepage-review-list">
              <ReviewItem
                icon="clipboard-copy"
                color="var(--color-supporting-strong)"
                title="Claim number on file"
                subtitle="Denise Hollis"
                requestedBy={{ name: "Rahul Thangaraj", initials: "RT" }}
                actionLabel="View"
              />
              <ReviewItem
                icon="folder-documents-finder"
                color="var(--color-supporting-strong)"
                title="X8 — Roof replacement"
                subtitle="Marcus Webb"
                requestedBy={{ name: "Sarah Chen", initials: "SC" }}
                actionLabel="Assign"
              />
              <ReviewItem
                icon="clipboard-copy"
                color="var(--color-supporting-strong)"
                title="Insurance verification"
                subtitle="Tony Ramirez"
                requestedBy={{ name: "Rahul Thangaraj", initials: "RT" }}
                actionLabel="View"
              />
              <ReviewItem
                icon="folder-documents-finder"
                color="var(--color-supporting-strong)"
                title="Permit approval pending"
                subtitle="Angela Foster"
                requestedBy={{ name: "David Kim", initials: "DK" }}
                actionLabel="View"
              />
            </div>
          </SectionCard>

          {/* --- Collections Chart --- */}
          <CollectionsChart
            label="Collections"
            amount="$683,000"
            cents=".90"
            trend={12}
            period="Last 30 days"
            data={[
              42000, 48000, 52000, 47000, 55000, 61000, 58000, 64000, 70000, 67000,
              73000, 78000, 72000, 80000, 85000, 82000, 88000, 91000, 86000, 93000,
            ]}
            dates={[
              "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19",
              "Aug 20", "Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26",
              "Aug 27", "Aug 28", "Aug 29", "Aug 30", "Sep 1", "Sep 2",
            ]}
            xLabels={["Aug' 13", "Aug' 18", "Aug' 23", "Aug' 28", "Sep' 2"]}
          />

          {/* --- Most Outstanding Collections --- */}
          <SectionCard
            title="Most Outstanding Collections"
            headerAction={<SectionCard.FilterButton />}
          >
            <OutstandingTable data={outstandingData} />
          </SectionCard>
        </div>

        <SectionCard
          title="Sales Leaderboard"
          count={11}
          headerAction={<SectionCard.FilterButton />}
        >
          <SalesPodium data={podiumData} />
          <LeaderboardTable
            data={leaderboardTableData}
            currentUser="Rahul Thangaraj"
          />
        </SectionCard>
      </div>
    </div>
  );
}
