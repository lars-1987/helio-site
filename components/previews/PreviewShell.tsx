"use client";

import { ReactNode, useState } from "react";
import { DEMO_PROJECTS } from "@/lib/projects";
import { ScheduleView } from "./ScheduleView";
import { AnalyticsView } from "./AnalyticsView";
import { SettingsView } from "./SettingsView";

type ViewId = "dashboard" | "schedule" | "analytics" | "settings";

type Props = {
  title?: string;
  main: ReactNode;
  rightPanel: ReactNode;
  rightPanelWidth?: number;
  activeView?: ViewId;
  onProjectClick?: (projectId: string) => void;
  selectedProjectId?: string | null;
};

export function PreviewShell({
  title = "Helio",
  main,
  rightPanel,
  rightPanelWidth = 220,
  activeView: initialView = "dashboard",
  onProjectClick,
  selectedProjectId = null,
}: Props) {
  // Internal view state — null means show the caller's main/rightPanel
  const [currentView, setCurrentView] = useState<ViewId>(initialView);

  const showDashboard = currentView === "dashboard";

  // Built-in view content for non-dashboard views
  const builtInView: Record<string, ReactNode> = {
    schedule: <ScheduleView />,
    analytics: <AnalyticsView />,
    settings: <SettingsView />,
  };

  return (
    <div className="preview-scale-wrapper">
      <div className="preview-scale-card relative overflow-hidden rounded-2xl bg-ink md:rounded-[40px]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5 md:px-5 md:py-3">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
          <div className="flex-1" />
          <span className="text-[11px] font-medium text-white/50 md:hidden">
            {title}
          </span>
        </div>

        <div
          data-preview-grid=""
          className="grid h-auto grid-cols-1 md:h-[670px]"
          style={{
            ["--cols" as string]: showDashboard
              ? `200px 1fr ${rightPanelWidth}px`
              : "200px 1fr",
          }}
        >
          {/* Left sidebar — desktop only */}
          <aside className="hidden flex-col border-r border-white/5 bg-[#161413] md:flex">
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <span className="text-[13px] font-semibold text-white">
                {title}
              </span>
              <SidebarToggle />
            </div>

            <div className="flex-1 overflow-hidden px-2">
              <SectionLabel>Views</SectionLabel>
              <NavItem
                label="Dashboard"
                icon="dashboard"
                active={currentView === "dashboard"}
                onClick={() => setCurrentView("dashboard")}
              />
              <NavItem
                label="Schedule"
                icon="schedule"
                active={currentView === "schedule"}
                onClick={() => setCurrentView("schedule")}
              />
              <NavItem
                label="Analytics"
                icon="analytics"
                active={currentView === "analytics"}
                onClick={() => setCurrentView("analytics")}
              />
              <NavItem
                label="Settings"
                icon="settings"
                active={currentView === "settings"}
                onClick={() => setCurrentView("settings")}
              />

              <SectionLabel className="mt-3">Projects</SectionLabel>
              <div className="space-y-[1px]">
                {DEMO_PROJECTS.map((p) => {
                  const selected = selectedProjectId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setCurrentView("dashboard");
                        onProjectClick?.(p.id);
                      }}
                      className={`flex w-full items-center gap-2 rounded px-2 py-[5px] text-left text-[13px] transition-colors ${
                        selected
                          ? "bg-white/8 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white/90"
                      }`}
                    >
                      <span
                        className="h-[7px] w-[7px] rounded-full"
                        style={{ backgroundColor: p.colour }}
                      />
                      {p.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/5 px-3 py-2 text-[11px] text-white/40">
              + New Project
            </div>
          </aside>

          {/* Main area */}
          <main className="relative overflow-hidden">
            {showDashboard ? main : builtInView[currentView]}
          </main>

          {/* Right info panel — only on Dashboard */}
          {showDashboard && (
            <aside className="hidden overflow-hidden border-l border-white/5 bg-[#141211] px-4 py-3 text-[11px] text-white/70 md:block">
              {rightPanel}
            </aside>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          [data-preview-grid] {
            grid-template-columns: var(--cols);
          }
        }
      `}</style>
    </div>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-2 pt-2 pb-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/35 ${className}`}
    >
      {children}
    </div>
  );
}

function NavItem({
  label,
  icon,
  active = false,
  onClick,
}: {
  label: string;
  icon: "dashboard" | "schedule" | "analytics" | "settings";
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 rounded px-2 py-[5px] text-left text-[13px] transition-colors ${
        active
          ? "bg-[#3B82F6] text-white"
          : "text-white/70 hover:bg-white/5 hover:text-white/90"
      }`}
    >
      <span className="h-3 w-3 opacity-80">
        {icon === "dashboard" && <IconDashboard />}
        {icon === "schedule" && <IconSchedule />}
        {icon === "analytics" && <IconAnalytics />}
        {icon === "settings" && <IconSettings />}
      </span>
      {label}
    </button>
  );
}

function SidebarToggle() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-white/30">
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <line x1="6" y1="3" x2="6" y2="13" />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2" y="3" width="12" height="11" rx="1.5" />
      <path d="M2 6h12M5.5 1.5v3M10.5 1.5v3" strokeLinecap="round" />
    </svg>
  );
}

function IconSchedule() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 4h7M2 8h12M2 12h9" strokeLinecap="round" />
    </svg>
  );
}

function IconAnalytics() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <rect x="2" y="9" width="2.5" height="5" rx="0.4" />
      <rect x="6" y="5" width="2.5" height="9" rx="0.4" />
      <rect x="10" y="7" width="2.5" height="7" rx="0.4" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8" cy="8" r="2" />
      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.3 3.3l1.4 1.4M11.3 11.3l1.4 1.4M3.3 12.7l1.4-1.4M11.3 4.7l1.4-1.4" />
    </svg>
  );
}
