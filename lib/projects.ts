// Seed data for the landing page previews.
//
// Diverse mix of projects: software, academics, fitness, creative, and
// life admin — showing Helio handles ALL structured work, not just code.
// Names use kebab-case so a dev instantly reads them as project/repo names.

export type DemoProject = {
  id: string;
  name: string;
  tagline: string;
  colour: string;
  lastContext: string;
};

export type DemoSession = {
  id: string;
  projectId: string;
  start: string; // "09:00" 24h
  durationMinutes: number;
  windDownMinutes: number;
  goal: string;
  tasks?: string[];
};

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: "markdown-editor",
    name: "markdown-editor",
    tagline: "SwiftUI writing app",
    colour: "#A78BFA",
    lastContext:
      "Dark mode toolbar icons are invisible on the new bg. Swap to SF Symbols with .primary tint. Also: TestFlight build 47 is waiting for review.",
  },
  {
    id: "cs-247",
    name: "cs-247",
    tagline: "Algorithms & Data Structures",
    colour: "#818CF8",
    lastContext:
      "Pset 6 — implement Dijkstra's with a min-heap. Started the adjacency list but ran out of time. Due Thursday.",
  },
  {
    id: "workout-log",
    name: "workout-log",
    tagline: "Gym & mobility tracking",
    colour: "#10B981",
    lastContext:
      "Hit 100kg squat — new PR. Left knee felt tight on the last set. Add foam rolling to warm-up next push day.",
  },
  {
    id: "indie-game",
    name: "indie-game",
    tagline: "Godot puzzle platformer",
    colour: "#F97316",
    lastContext:
      "Level 3 boss pattern works but the hitbox is too generous. Shrink it 20% and add a wind-up tell animation before the slam attack.",
  },
  {
    id: "portfolio-site",
    name: "portfolio-site",
    tagline: "Next.js personal site",
    colour: "#3B82F6",
    lastContext:
      "Blog section deployed. Need to write the markdown-editor case study and fix the OG image generation for social shares.",
  },
  {
    id: "meal-prep",
    name: "meal-prep",
    tagline: "Weekly meal planning",
    colour: "#F59E0B",
    lastContext:
      "The salmon teriyaki was a hit. Double the rice next time. Still need to find a good weekday breakfast that isn't eggs.",
  },
  {
    id: "podcast-app",
    name: "podcast-app",
    tagline: "React Native audio player",
    colour: "#EC4899",
    lastContext:
      "Offline download queue is working but crashes when the phone switches from WiFi to cellular mid-download. Need to handle the network transition.",
  },
  {
    id: "thesis-draft",
    name: "thesis-draft",
    tagline: "MSc research paper",
    colour: "#22D3EE",
    lastContext:
      "Methodology section at 1,800 words. Advisor wants more detail on the sampling strategy. Incorporate her email feedback before Friday.",
  },
];

// ---- Today's sessions ------------------------------------------------
// A realistic day: mix of deep work, classes, gym, and life stuff.
export const DEMO_SESSIONS: DemoSession[] = [
  {
    id: "s1",
    projectId: "markdown-editor",
    start: "09:00",
    durationMinutes: 120,
    windDownMinutes: 10,
    goal: "Fix dark mode toolbar icons",
    tasks: [
      "Swap icon set to SF Symbols .primary",
      "Test on light + dark backgrounds",
      "Submit TestFlight build 48",
    ],
  },
  {
    id: "s2",
    projectId: "cs-247",
    start: "11:15",
    durationMinutes: 90,
    windDownMinutes: 10,
    goal: "Pset 6 — Dijkstra's with min-heap",
    tasks: [
      "Finish adjacency list implementation",
      "Write the relaxation step",
      "Test against provided graph samples",
    ],
  },
  {
    id: "s3",
    projectId: "workout-log",
    start: "13:00",
    durationMinutes: 75,
    windDownMinutes: 0,
    goal: "Pull day — back & biceps",
  },
  {
    id: "s4",
    projectId: "thesis-draft",
    start: "14:30",
    durationMinutes: 90,
    windDownMinutes: 10,
    goal: "Expand sampling strategy section",
  },
  {
    id: "s5",
    projectId: "indie-game",
    start: "16:15",
    durationMinutes: 60,
    windDownMinutes: 0,
    goal: "Shrink boss hitbox + add slam tell",
  },
  {
    id: "s6",
    projectId: "portfolio-site",
    start: "17:30",
    durationMinutes: 45,
    windDownMinutes: 0,
    goal: "Write markdown-editor case study",
  },
  {
    id: "s7",
    projectId: "podcast-app",
    start: "19:00",
    durationMinutes: 90,
    windDownMinutes: 10,
    goal: "Handle WiFi→cellular mid-download",
  },
];

// ---- 4-week accumulated history (minutes per project) ----------------
// Used in Weekly Rotation panel and Analytics view. Represents realistic
// usage across 4 weeks — some projects get heavy focus, some are lighter.
export const WEEKLY_HISTORY: Record<string, { target: number; logged: number }> = {
  "markdown-editor": { target: 600, logged: 520 },   // 8h 40m of 10h
  "cs-247":          { target: 480, logged: 440 },   // 7h 20m of 8h
  "workout-log":     { target: 360, logged: 380 },   // 6h 20m of 6h (over!)
  "indie-game":      { target: 360, logged: 280 },   // 4h 40m of 6h
  "portfolio-site":  { target: 300, logged: 210 },   // 3h 30m of 5h
  "meal-prep":       { target: 120, logged: 105 },   // 1h 45m of 2h
  "podcast-app":     { target: 480, logged: 390 },   // 6h 30m of 8h
  "thesis-draft":    { target: 600, logged: 540 },   // 9h of 10h
};

// ---- Weekly schedule (for the Schedule view) -------------------------
// Sessions distributed across Mon–Sun to fill a realistic week grid.
export type WeekSession = {
  day: number; // 0=Mon, 6=Sun
  projectId: string;
  start: string;
  durationMinutes: number;
  goal: string;
};

export const WEEK_SCHEDULE: WeekSession[] = [
  // Monday
  { day: 0, projectId: "markdown-editor", start: "09:00", durationMinutes: 120, goal: "Fix dark mode toolbar" },
  { day: 0, projectId: "cs-247", start: "13:00", durationMinutes: 90, goal: "Lecture + lab" },
  { day: 0, projectId: "thesis-draft", start: "15:00", durationMinutes: 90, goal: "Write methodology" },
  // Tuesday
  { day: 1, projectId: "workout-log", start: "07:00", durationMinutes: 75, goal: "Push day" },
  { day: 1, projectId: "podcast-app", start: "10:00", durationMinutes: 120, goal: "Offline downloads" },
  { day: 1, projectId: "indie-game", start: "14:00", durationMinutes: 90, goal: "Boss fight polish" },
  // Wednesday
  { day: 2, projectId: "cs-247", start: "09:00", durationMinutes: 90, goal: "Pset 6 — Dijkstra's" },
  { day: 2, projectId: "markdown-editor", start: "11:00", durationMinutes: 90, goal: "TestFlight build 48" },
  { day: 2, projectId: "meal-prep", start: "17:00", durationMinutes: 45, goal: "Plan next week's meals" },
  // Thursday
  { day: 3, projectId: "thesis-draft", start: "09:00", durationMinutes: 120, goal: "Advisor feedback" },
  { day: 3, projectId: "portfolio-site", start: "13:00", durationMinutes: 60, goal: "Case study draft" },
  { day: 3, projectId: "workout-log", start: "16:00", durationMinutes: 75, goal: "Pull day" },
  // Friday (today — mirrors DEMO_SESSIONS)
  { day: 4, projectId: "markdown-editor", start: "09:00", durationMinutes: 120, goal: "Fix dark mode toolbar icons" },
  { day: 4, projectId: "cs-247", start: "11:15", durationMinutes: 90, goal: "Pset 6 — Dijkstra's" },
  { day: 4, projectId: "workout-log", start: "13:00", durationMinutes: 75, goal: "Pull day — back & biceps" },
  { day: 4, projectId: "thesis-draft", start: "14:30", durationMinutes: 90, goal: "Sampling strategy" },
  { day: 4, projectId: "indie-game", start: "16:15", durationMinutes: 60, goal: "Boss hitbox + tell" },
  { day: 4, projectId: "portfolio-site", start: "17:30", durationMinutes: 45, goal: "Case study" },
  { day: 4, projectId: "podcast-app", start: "19:00", durationMinutes: 90, goal: "WiFi→cell handling" },
  // Saturday
  { day: 5, projectId: "indie-game", start: "10:00", durationMinutes: 120, goal: "Level 4 design" },
  { day: 5, projectId: "meal-prep", start: "14:00", durationMinutes: 60, goal: "Grocery run + prep" },
  // Sunday
  { day: 6, projectId: "thesis-draft", start: "10:00", durationMinutes: 120, goal: "Literature review" },
  { day: 6, projectId: "podcast-app", start: "14:00", durationMinutes: 60, goal: "UI polish" },
];

export const projectById = (id: string): DemoProject =>
  DEMO_PROJECTS.find((p) => p.id === id) ?? DEMO_PROJECTS[0];

// ---- Helpers ---------------------------------------------------------

export function parseStart(hm: string): number {
  const [h, m] = hm.split(":").map(Number);
  return h + m / 60;
}

export function endTime(start: string, durationMinutes: number): string {
  const [h, m] = start.split(":").map(Number);
  const total = h * 60 + m + durationMinutes;
  const eh = Math.floor(total / 60);
  const em = total % 60;
  return `${eh.toString().padStart(2, "0")}:${em.toString().padStart(2, "0")}`;
}

export function displayTime(hm: string): string {
  const [h, m] = hm.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const displayH = h % 12 === 0 ? 12 : h % 12;
  return `${displayH}:${m.toString().padStart(2, "0")} ${period}`;
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

export const TOTAL_DEMO_MINUTES = DEMO_SESSIONS.reduce(
  (a, s) => a + s.durationMinutes,
  0,
);
