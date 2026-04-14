"use client";

import {
  DEMO_PROJECTS,
  WEEKLY_HISTORY,
  formatDuration,
  projectById,
} from "@/lib/projects";

export function AnalyticsView() {
  // Sort projects by logged time descending
  const ranked = [...DEMO_PROJECTS].sort(
    (a, b) =>
      (WEEKLY_HISTORY[b.id]?.logged ?? 0) - (WEEKLY_HISTORY[a.id]?.logged ?? 0)
  );
  const maxLogged = Math.max(
    ...ranked.map((p) => WEEKLY_HISTORY[p.id]?.logged ?? 0)
  );
  const totalLogged = ranked.reduce(
    (a, p) => a + (WEEKLY_HISTORY[p.id]?.logged ?? 0),
    0
  );
  const top = ranked[0];

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <div className="text-[16px] font-semibold tracking-tight text-white">
          Analytics
        </div>
        <div className="text-[11px] text-white/45">Last 4 weeks</div>
      </div>

      <div className="h-px bg-white/5" />

      <div className="flex-1 overflow-hidden px-5 py-4">
        {/* Stats row */}
        <div className="mb-5 grid grid-cols-3 gap-3">
          <StatCard
            label="Total tracked"
            value={formatDuration(totalLogged)}
          />
          <StatCard label="Daily streak" value="12 days" />
          <StatCard
            label="Most focused"
            value={top.name}
            sub={formatDuration(WEEKLY_HISTORY[top.id]?.logged ?? 0)}
            colour={top.colour}
          />
        </div>

        {/* Bar chart */}
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/35">
          Time per project
        </div>
        <div className="space-y-2">
          {ranked.map((p) => {
            const data = WEEKLY_HISTORY[p.id];
            if (!data) return null;
            const pct = maxLogged > 0 ? (data.logged / maxLogged) * 100 : 0;
            const overTarget = data.logged >= data.target;
            return (
              <div key={p.id}>
                <div className="mb-0.5 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-[6px] w-[6px] rounded-full"
                      style={{ backgroundColor: p.colour }}
                    />
                    <span className="text-white/80">{p.name}</span>
                  </div>
                  <span className="text-white/40">
                    {formatDuration(data.logged)}{" "}
                    <span className="text-white/25">
                      / {formatDuration(data.target)}
                    </span>
                    {overTarget && (
                      <span className="ml-1 text-[#34D399]">✓</span>
                    )}
                  </span>
                </div>
                <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: p.colour,
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trend */}
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
          <span className="text-[13px]">📈</span>
          <div>
            <div className="text-[11px] font-medium text-[#34D399]">
              +3h 20m vs last month
            </div>
            <div className="text-[10px] text-white/40">
              You&apos;re tracking 18% more time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  colour,
}: {
  label: string;
  value: string;
  sub?: string;
  colour?: string;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
      <div className="mb-0.5 text-[9px] uppercase tracking-wider text-white/35">
        {label}
      </div>
      <div
        className="text-[14px] font-semibold"
        style={{ color: colour ?? "white" }}
      >
        {value}
      </div>
      {sub && <div className="text-[10px] text-white/40">{sub}</div>}
    </div>
  );
}
