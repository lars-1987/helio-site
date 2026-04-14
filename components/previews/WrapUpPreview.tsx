"use client";

import { useState } from "react";
import { projectById } from "@/lib/projects";
import { PreviewShell } from "./PreviewShell";

const PROJECT_ID = "markdown-editor";

export function WrapUpPreview() {
  const project = projectById(PROJECT_ID);

  const [accomplished, setAccomplished] = useState(
    "Swapped all toolbar icons to SF Symbols — dark mode renders clean now. Tested across all 4 theme variants. Cursor blink rate still feels sluggish on 60Hz displays, filed as issue #142."
  );
  const [unfinished, setUnfinished] = useState(
    "App Store screenshot #3 needs the new toolbar — retake after merging the icon branch"
  );
  const [notes, setNotes] = useState(
    "https://github.com/lars/markdown-editor/issues/142"
  );
  const [nextTasks, setNextTasks] = useState([
    { id: "nt1", label: "Fix cursor blink on 60Hz displays (#142)", carried: true },
    { id: "nt2", label: "Retake App Store screenshot #3", carried: true },
    { id: "nt3", label: "Submit TestFlight build 48", carried: false },
  ]);

  return (
    <PreviewShell
      title="Helio"
      activeView="dashboard"
      rightPanelWidth={200}
      main={
        <div className="flex h-full flex-col">
          {/* Wrap-up banner */}
          <div className="flex items-start justify-between px-6 pt-4 pb-3">
            <div className="flex items-start gap-2">
              <span className="mt-[5px] h-[8px] w-[8px] shrink-0 rounded-full bg-amber-400" />
              <div>
                <div className="text-[14px] font-semibold text-amber-400">
                  Time to wrap up {project.name}
                </div>
                <div className="text-[10px] text-white/50">
                  Capture what you did so future-you can pick up cold
                </div>
              </div>
            </div>
            <div className="font-mono text-[13px] text-amber-400 tabular-nums">
              1:59:44
            </div>
          </div>

          <div className="h-px bg-white/5" />

          {/* Main form body */}
          <div className="flex-1 overflow-hidden px-6 py-4">
            <div className="space-y-3">
              {/* Task recap */}
              <Field label="Task recap">
                <div className="space-y-1">
                  <TaskRecapRow label="Swap toolbar icons to SF Symbols" done />
                  <TaskRecapRow label="Test dark mode on all themes" done />
                  <TaskRecapRow label="Fix focus-mode cursor blink rate" />
                  <TaskRecapRow label="Update App Store screenshot #3" />
                  <TaskRecapRow label="Submit TestFlight build 48" />
                </div>
              </Field>

              {/* What did you accomplish */}
              <Field label="What did you accomplish?">
                <textarea
                  value={accomplished}
                  onChange={(e) => setAccomplished(e.target.value)}
                  spellCheck={false}
                  className="h-[56px] w-full resize-none rounded border border-white/8 bg-black/20 px-2 py-1.5 text-[11px] leading-snug text-white/80 outline-none placeholder:text-white/25 focus:border-white/20"
                />
              </Field>

              {/* Unfinished work */}
              <Field label="Unfinished work">
                <input
                  value={unfinished}
                  onChange={(e) => setUnfinished(e.target.value)}
                  spellCheck={false}
                  className="w-full rounded border border-white/8 bg-black/20 px-2 py-1.5 text-[11px] text-white/75 outline-none focus:border-white/20"
                />
              </Field>

              {/* Tasks for next session */}
              <Field label="Tasks for next session">
                <div className="space-y-1">
                  {nextTasks.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between rounded px-1 py-[3px] text-[11px] text-white/75"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full border border-white/25">
                          <span className="h-[5px] w-[5px] rounded-full bg-white/25" />
                        </span>
                        {t.label}
                      </div>
                      {t.carried && (
                        <div className="flex items-center gap-1">
                          <span className="rounded-full bg-white/5 px-1.5 py-[2px] text-[8px] text-white/50">
                            Carried over
                          </span>
                          <button
                            onClick={() =>
                              setNextTasks((ts) =>
                                ts.filter((x) => x.id !== t.id)
                              )
                            }
                            className="text-white/30 hover:text-white/60"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 px-1 py-[3px] text-[11px] text-white/25">
                    <span>⊕</span>
                    Add task for next session…
                  </div>
                  <div className="pl-1 text-[9px] text-white/30">
                    These auto-load as micro-tasks next time
                  </div>
                </div>
              </Field>

              {/* Notes */}
              <Field label="Notes">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  spellCheck={false}
                  className="h-[36px] w-full resize-none rounded border border-white/8 bg-black/20 px-2 py-1.5 text-[11px] leading-snug text-white/75 outline-none placeholder:text-white/25 focus:border-white/20"
                />
              </Field>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between border-t border-white/5 px-6 py-2">
            <span className="text-[10px] text-white/35">
              Skip capture (not recommended)
            </span>
            <div className="flex items-center gap-2">
              <button className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/70 hover:bg-white/5">
                +15 min work time
              </button>
              <button className="rounded bg-amber-400 px-3 py-1 text-[10px] font-medium text-black hover:bg-amber-300">
                Save &amp; complete session
              </button>
            </div>
          </div>
        </div>
      }
      rightPanel={
        <>
          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Scratch pad notes
          </div>
          <div className="mb-4 rounded border-l-2 border-white/10 pl-2 text-[11px] leading-relaxed text-white/50">
            Check if NSTimer precision is enough for the blink — might need CADisplayLink on 60Hz
          </div>

          <div className="pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/35">
            Session stats
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-white/50">Duration</span>
              <span className="text-white/70">2h (incl. 10m wind-down)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Tasks completed</span>
              <span className="text-white/70">2 of 5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">This week</span>
              <span className="text-white/70">8h 40m / 10h target</span>
            </div>
          </div>
        </>
      }
    />
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/40">
        {label}
      </div>
      {children}
    </div>
  );
}

function TaskRecapRow({
  label,
  done = false,
}: {
  label: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded border border-white/5 bg-black/10 px-2 py-1.5">
      <div className="flex items-center gap-2 text-[11px] text-white/75">
        <span
          className={`flex h-[12px] w-[12px] items-center justify-center rounded-full border ${
            done ? "border-[#34D399] bg-[#34D399]/15" : "border-white/25"
          }`}
        >
          {done && (
            <svg width="7" height="7" viewBox="0 0 10 10" fill="#34D399">
              <path d="M9 2L4 7 1 4l1-1 2 2 4-4z" />
            </svg>
          )}
        </span>
        <span className={done ? "text-white/50 line-through" : ""}>
          {label}
        </span>
      </div>
      {done ? (
        <span className="text-[8px] font-medium text-[#34D399]">Done</span>
      ) : (
        <span className="rounded-full bg-red-500/15 px-1.5 py-[2px] text-[8px] font-medium text-red-300">
          Incomplete
        </span>
      )}
    </div>
  );
}
