"use client";

import { useState, useEffect } from "react";
import {
  DEMO_PROJECTS,
  DEMO_SESSIONS,
  WEEKLY_HISTORY,
  parseStart,
  endTime,
  displayTime,
  formatDuration,
  projectById,
} from "@/lib/projects";
import { PreviewShell } from "./PreviewShell";

const GRID_START_HOUR = 9;
const GRID_END_HOUR = 21;

const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getWeekDays() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const monday = new Date(now);
  monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1));

  return Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      label: WEEKDAY_SHORT[d.getDay()],
      date: d.getDate(),
      active: d.toDateString() === now.toDateString(),
    };
  });
}

function getTodayLabel() {
  const now = new Date();
  return `${WEEKDAY_SHORT[now.getDay()]} ${now.getDate()} ${MONTH_SHORT[now.getMonth()]}`;
}

// Static fallback for SSR — avoids hydration mismatch from Date()
const STATIC_WEEK = Array.from({ length: 7 }).map((_, i) => ({
  label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
  date: i + 1,
  active: false,
}));

export function CalendarPreview() {
  const [filterId, setFilterId] = useState<string | null>(null);
  const [weekDays, setWeekDays] = useState(STATIC_WEEK);
  const [todayLabel, setTodayLabel] = useState("Today");

  // Populate real dates client-side only to avoid hydration mismatch
  useEffect(() => {
    setWeekDays(getWeekDays());
    setTodayLabel(getTodayLabel());
  }, []);
  const totalMinutes = DEMO_SESSIONS.reduce(
    (a, s) => a + s.durationMinutes,
    0,
  );
  const totalHours = GRID_END_HOUR - GRID_START_HOUR;

  const toggleFilter = (id: string) =>
    setFilterId((cur) => (cur === id ? null : id));

  // Find the "up next" session — pick the 4th one as if first 3 are done
  const upNext = DEMO_SESSIONS[3];
  const upNextProject = upNext ? projectById(upNext.projectId) : null;

  return (
    <PreviewShell
      title="Helio"
      activeView="dashboard"
      selectedProjectId={filterId}
      onProjectClick={toggleFilter}
      rightPanelWidth={200}
      main={
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-start justify-between px-4 pt-3 pb-2 md:px-5 md:pt-4 md:pb-3">
            <div>
              <div className="text-[18px] font-semibold tracking-tight text-white md:text-[24px]">
                {todayLabel}
              </div>
              <div className="text-[11px] text-white/45 md:text-[12px]">
                {DEMO_SESSIONS.length} sessions · {formatDuration(totalMinutes)}
              </div>
            </div>
            <button className="rounded bg-[#3B82F6] px-3 py-1.5 text-[11px] font-medium text-white md:text-[12px]">
              New Session
            </button>
          </div>

          {/* Week selector */}
          <div className="flex items-center gap-0.5 overflow-x-auto px-4 pb-2 md:gap-1 md:px-5 md:pb-3">
            {weekDays.map((d) => (
              <div
                key={d.label + d.date}
                className={`flex shrink-0 flex-col items-center rounded px-2 py-1 md:px-3 ${
                  d.active ? "bg-white/8" : ""
                }`}
              >
                <span
                  className={`text-[9px] uppercase tracking-wider md:text-[10px] ${
                    d.active ? "text-white/70" : "text-white/35"
                  }`}
                >
                  {d.label}
                </span>
                <span
                  className={`text-[13px] font-medium md:text-[14px] ${
                    d.active ? "text-white" : "text-white/55"
                  }`}
                >
                  {d.date}
                </span>
                {d.active && (
                  <span className="mt-[1px] h-[3px] w-[3px] rounded-full bg-white" />
                )}
              </div>
            ))}
          </div>

          <div className="h-px bg-white/5" />

          {/* Timeline */}
          <div className="relative flex-1 overflow-hidden px-4 py-3 md:px-5">
            <div
              className="relative"
              style={{ height: `calc(var(--hour-height) * ${totalHours})` }}
            >
              {/* Hour lines */}
              {Array.from({ length: totalHours }).map((_, i) => {
                const hour = GRID_START_HOUR + i;
                return (
                  <div
                    key={hour}
                    className="absolute left-0 right-0 flex items-start"
                    style={{ top: `calc(var(--hour-height) * ${i})` }}
                  >
                    <span className="w-12 pr-2 text-right text-[10px] text-white/30 -translate-y-1 md:w-14 md:pr-3">
                      {displayTime(`${hour.toString().padStart(2, "0")}:00`)}
                    </span>
                    <div className="flex-1 border-t border-white/5" />
                  </div>
                );
              })}

              {/* Session blocks */}
              {DEMO_SESSIONS.map((s) => {
                const project = projectById(s.projectId);
                const hoursOffset = parseStart(s.start) - GRID_START_HOUR;
                const hoursSpan = s.durationMinutes / 60;
                const dimmed = filterId !== null && filterId !== project.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleFilter(project.id)}
                    className="absolute left-12 right-1 flex overflow-hidden rounded border text-left transition-all duration-200 hover:-translate-y-[1px] md:left-14"
                    style={{
                      top: `calc(var(--hour-height) * ${hoursOffset})`,
                      height: `calc(var(--hour-height) * ${hoursSpan})`,
                      background: `${project.colour}18`,
                      borderColor: `${project.colour}33`,
                      opacity: dimmed ? 0.22 : 1,
                    }}
                  >
                    <div
                      className="w-[2px]"
                      style={{ backgroundColor: project.colour }}
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-start px-2 py-1">
                      <div
                        className="truncate text-[13px] font-medium"
                        style={{ color: project.colour }}
                      >
                        {project.name}
                      </div>
                      <div className="truncate text-[11px] text-white/55">
                        {displayTime(s.start)} –{" "}
                        {displayTime(endTime(s.start, s.durationMinutes))}
                      </div>
                      {hoursSpan >= 1.1 && (
                        <div className="truncate text-[10px] text-white/35">
                          {formatDuration(s.durationMinutes)}
                          {s.windDownMinutes > 0 &&
                            ` · incl. ${s.windDownMinutes}m wind-down`}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      }
      rightPanel={
        <>
          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Weekly rotation
          </div>
          <div className="space-y-[3px]">
            {DEMO_PROJECTS.map((p) => {
              const history = WEEKLY_HISTORY[p.id];
              if (!history) return null;
              return (
                <div
                  key={p.id}
                  className="flex items-center gap-2 py-[2px] text-[12px]"
                >
                  <span
                    className="h-[6px] w-[6px] shrink-0 rounded-full"
                    style={{ backgroundColor: p.colour }}
                  />
                  <span className="truncate text-white/80">{p.name}</span>
                  <span className="ml-auto whitespace-nowrap text-[11px] text-white/35">
                    {formatDuration(history.logged)} / {formatDuration(history.target)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Up next
          </div>
          {upNext && upNextProject ? (
            <div
              className="rounded-lg border p-2.5"
              style={{
                borderColor: `${upNextProject.colour}30`,
                backgroundColor: `${upNextProject.colour}10`,
              }}
            >
              <div
                className="text-[12px] font-semibold"
                style={{ color: upNextProject.colour }}
              >
                {upNextProject.name}
              </div>
              <div className="text-[11px] text-white/50">
                {displayTime(upNext.start)} · {formatDuration(upNext.durationMinutes)}
              </div>
              <div className="mt-0.5 text-[11px] text-white/40">
                {upNext.goal}
              </div>
            </div>
          ) : (
            <div className="text-[11px] leading-relaxed text-white/45">
              Nothing scheduled.
              <br />
              Enjoy the space.
            </div>
          )}
        </>
      }
    />
  );
}
