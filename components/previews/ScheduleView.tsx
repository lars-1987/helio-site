"use client";

import { useState, useEffect } from "react";
import {
  DEMO_PROJECTS,
  WEEK_SCHEDULE,
  projectById,
  displayTime,
  formatDuration,
} from "@/lib/projects";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = [8, 10, 12, 14, 16, 18, 20];
const GRID_START = 7;
const GRID_END = 21;
const ROW_H = 3; // px per minute in the mini grid

export function ScheduleView() {
  // Defer Date() to client to avoid hydration mismatch
  const [todayIdx, setTodayIdx] = useState(-1);
  useEffect(() => {
    const d = new Date().getDay();
    setTodayIdx(d === 0 ? 6 : d - 1);
  }, []);

  const totalSessions = WEEK_SCHEDULE.length;
  const totalMinutes = WEEK_SCHEDULE.reduce((a, s) => a + s.durationMinutes, 0);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div>
          <div className="text-[16px] font-semibold tracking-tight text-white">
            This Week
          </div>
          <div className="text-[11px] text-white/45">
            {totalSessions} sessions · {formatDuration(totalMinutes)}
          </div>
        </div>
      </div>

      <div className="h-px bg-white/5" />

      {/* Week grid */}
      <div className="flex flex-1 overflow-hidden">
        {/* Time gutter */}
        <div className="flex w-10 shrink-0 flex-col pt-8">
          {HOURS.map((h) => (
            <div
              key={h}
              className="text-right text-[9px] text-white/25"
              style={{
                height: `${(HOURS[1] - HOURS[0]) * 60 * ROW_H}px`,
              }}
            >
              {displayTime(`${h.toString().padStart(2, "0")}:00`)}
            </div>
          ))}
        </div>

        {/* Day columns */}
        <div className="grid flex-1 grid-cols-7 gap-px">
          {DAYS.map((day, dayIdx) => {
            const sessions = WEEK_SCHEDULE.filter((s) => s.day === dayIdx);
            const isToday = dayIdx === todayIdx;

            return (
              <div key={day} className="relative flex flex-col">
                {/* Day header */}
                <div
                  className={`flex flex-col items-center py-1.5 text-center ${
                    isToday ? "bg-white/5" : ""
                  }`}
                >
                  <span
                    className={`text-[9px] uppercase tracking-wider ${
                      isToday ? "text-white/70" : "text-white/30"
                    }`}
                  >
                    {day}
                  </span>
                  {isToday && (
                    <span className="mt-0.5 h-[3px] w-[3px] rounded-full bg-white" />
                  )}
                </div>

                {/* Session blocks */}
                <div
                  className={`relative flex-1 border-l border-white/5 ${
                    isToday ? "bg-white/[0.02]" : ""
                  }`}
                  style={{
                    height: `${(GRID_END - GRID_START) * 60 * ROW_H}px`,
                  }}
                >
                  {sessions.map((s, i) => {
                    const project = projectById(s.projectId);
                    const [h, m] = s.start.split(":").map(Number);
                    const startMin = (h - GRID_START) * 60 + m;
                    return (
                      <div
                        key={i}
                        className="absolute left-0.5 right-0.5 overflow-hidden rounded-sm"
                        style={{
                          top: `${startMin * ROW_H}px`,
                          height: `${s.durationMinutes * ROW_H}px`,
                          backgroundColor: `${project.colour}25`,
                          borderLeft: `2px solid ${project.colour}`,
                        }}
                        title={`${project.name}: ${s.goal}`}
                      >
                        {s.durationMinutes >= 60 && (
                          <div
                            className="truncate px-1 pt-0.5 text-[8px] font-medium"
                            style={{ color: project.colour }}
                          >
                            {project.name}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
