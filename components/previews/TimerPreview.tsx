"use client";

import { useEffect, useState } from "react";
import { projectById, DEMO_SESSIONS, formatDuration } from "@/lib/projects";
import { PreviewShell } from "./PreviewShell";

// Show the markdown-editor session — the flagship indie project.
// Timer starts ~35 min in so the ring looks interesting on load.
const CURRENT_PROJECT_ID = "markdown-editor";
const TOTAL_MINUTES = 120;
const START_ELAPSED_SECONDS = 35 * 60; // 35 min elapsed → 1:25 remaining

type Task = { id: string; label: string; done: boolean };

const INITIAL_TASKS: Task[] = [
  { id: "t1", label: "Swap toolbar icons to SF Symbols", done: true },
  { id: "t2", label: "Test dark mode on all themes", done: true },
  { id: "t3", label: "Fix focus-mode cursor blink rate", done: false },
  { id: "t4", label: "Update App Store screenshot #3", done: false },
  { id: "t5", label: "Submit TestFlight build 48", done: false },
];

export function TimerPreview() {
  const project = projectById(CURRENT_PROJECT_ID);
  const totalSeconds = TOTAL_MINUTES * 60;

  const [elapsed, setElapsed] = useState(START_ELAPSED_SECONDS);
  const [running, setRunning] = useState(true);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [scratch, setScratch] = useState("");

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsed((e) => Math.min(totalSeconds, e + 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running, totalSeconds]);

  const remaining = totalSeconds - elapsed;
  const hh = Math.floor(remaining / 3600);
  const mm = Math.floor((remaining % 3600) / 60);
  const ss = remaining % 60;
  const progress = elapsed / totalSeconds;

  // Ring geometry
  const size = 180;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ * (1 - progress);

  const toggleTask = (id: string) =>
    setTasks((ts) =>
      ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  return (
    <PreviewShell
      title="Helio"
      activeView="dashboard"
      rightPanelWidth={220}
      main={
        <div className="flex h-full flex-col items-center justify-center px-10">
          {/* Current project header */}
          <div className="mb-1 text-[10px] uppercase tracking-wider text-white/40">
            Now working on
          </div>
          <div
            className="text-[22px] font-semibold tracking-tight"
            style={{ color: project.colour }}
          >
            {project.name}
          </div>
          <div className="mt-1 text-[10px] text-white/35">
            Started at 9:00 am
          </div>

          {/* Timer ring */}
          <div
            className="relative mt-5"
            style={{ width: size, height: size }}
          >
            <svg
              className="absolute inset-0 -rotate-90"
              width={size}
              height={size}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth={stroke}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={project.colour}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-mono text-[32px] font-semibold tabular-nums tracking-tight text-white">
                {hh}:{String(mm).padStart(2, "0")}:{String(ss).padStart(2, "0")}
              </div>
              <div className="text-[10px] text-white/35">remaining</div>
            </div>
          </div>

          {/* Progress bar under the ring */}
          <div className="mt-4 flex w-[260px] items-center gap-2 text-[9px] text-white/35">
            <span>0m</span>
            <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/8">
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress * 100}%`,
                  backgroundColor: project.colour,
                }}
              />
            </div>
            <span>{formatDuration(TOTAL_MINUTES)}</span>
          </div>

          {/* Tasks */}
          <div className="mt-5 w-[300px]">
            <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-white/35">
              Tasks
            </div>
            <div className="space-y-1">
              {tasks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className="flex w-full items-center gap-2 rounded px-1 py-[3px] text-left text-[11px] text-white/80 hover:bg-white/[0.03]"
                >
                  <span
                    className={`flex h-[11px] w-[11px] items-center justify-center rounded-[3px] border ${
                      t.done
                        ? "border-white/40 bg-white/15"
                        : "border-white/25"
                    }`}
                  >
                    {t.done && (
                      <svg width="7" height="7" viewBox="0 0 10 10" fill="currentColor">
                        <path d="M9 2L4 7 1 4l1-1 2 2 4-4z" />
                      </svg>
                    )}
                  </span>
                  <span className={t.done ? "line-through text-white/40" : ""}>
                    {t.label}
                  </span>
                </button>
              ))}
              <div className="flex items-center gap-2 px-1 py-[3px] text-[11px] text-white/25">
                <span className="text-[10px]">⊕</span>
                Add task…
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-5 flex items-center gap-2">
            <Button
              onClick={() => setRunning((r) => !r)}
              icon={running ? <PauseIcon /> : <PlayIcon />}
              label={running ? "Pause" : "Resume"}
            />
            <Button red icon={<StopIcon />} label="End Early" />
            <Button label="+15m" onClick={() => setElapsed((e) => Math.max(0, e - 15 * 60))} />
            <Button label="+30m" onClick={() => setElapsed((e) => Math.max(0, e - 30 * 60))} />
            <Button
              accent={project.colour}
              icon={<MoonIcon />}
              label="Wind Do…"
            />
          </div>
        </div>
      }
      rightPanel={
        <>
          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Previous session
          </div>
          <div
            className="mb-4 rounded-lg border-l-2 p-2.5 text-[11px] leading-relaxed text-white/60"
            style={{ borderColor: project.colour + "60" }}
          >
            Shipped dark mode to TestFlight (build 47). Three beta testers confirmed the toolbar renders correctly.
            <br /><br />
            <span className="text-white/40">Still open:</span> cursor blink rate feels off in focus mode — looks frozen on slower displays.
          </div>

          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Scratch pad
          </div>
          <textarea
            value={scratch}
            onChange={(e) => setScratch(e.target.value)}
            spellCheck={false}
            placeholder={"Quick notes, links, thoughts…\n(auto-saved)"}
            className="mb-4 h-[72px] w-full resize-none rounded border border-white/8 bg-black/20 p-2 text-[11px] leading-snug text-white/70 outline-none placeholder:text-white/25 focus:border-white/20"
          />

          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Wind-down
          </div>
          <div className="mb-4 flex items-center gap-2 rounded border border-amber-500/25 bg-amber-500/5 px-2 py-1.5">
            <span className="h-[6px] w-[6px] rounded-full bg-amber-400" />
            <span className="flex-1 text-[10px] text-white/70">
              Triggers in 1h 15m
            </span>
            <span className="text-[9px] text-white/35">10m</span>
          </div>

          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Next up
          </div>
          <div className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-2 text-[11px]">
            <span className="font-medium text-[#818CF8]">cs-247</span>
            <span className="text-white/40"> · 11:15 am</span>
            <div className="mt-0.5 text-[10px] text-white/40">
              Pset 6 — Dijkstra&apos;s with min-heap
            </div>
          </div>
        </>
      }
    />
  );
}

function Button({
  label,
  icon,
  onClick,
  red = false,
  accent,
}: {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  red?: boolean;
  accent?: string;
}) {
  const base =
    "flex items-center gap-1 rounded px-2 py-1 text-[10px] font-medium transition-colors";
  if (red) {
    return (
      <button
        onClick={onClick}
        className={`${base} bg-[#EF4444]/15 text-[#F87171] hover:bg-[#EF4444]/25`}
      >
        {icon}
        {label}
      </button>
    );
  }
  if (accent) {
    return (
      <button
        onClick={onClick}
        className={`${base} text-black`}
        style={{ backgroundColor: accent }}
      >
        {icon}
        {label}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${base} border border-white/10 text-white/70 hover:bg-white/5`}
    >
      {icon}
      {label}
    </button>
  );
}

function PauseIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
      <rect x="2" y="1.5" width="2" height="7" rx="0.4" />
      <rect x="6" y="1.5" width="2" height="7" rx="0.4" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2.5 1.5l6 3.5-6 3.5z" />
    </svg>
  );
}
function StopIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
      <rect x="2" y="2" width="6" height="6" rx="0.6" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
      <path d="M8 6.5A4 4 0 1 1 3.5 2a3.5 3.5 0 0 0 4.5 4.5z" />
    </svg>
  );
}
