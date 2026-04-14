"use client";

export function SettingsView() {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <div className="text-[16px] font-semibold tracking-tight text-white">
          Settings
        </div>
      </div>

      <div className="h-px bg-white/5" />

      <div className="flex-1 overflow-hidden px-5 py-4">
        {/* Sessions */}
        <SettingSection label="Sessions">
          <SettingRow
            label="Default duration"
            right={<Pill>2h</Pill>}
          />
          <SettingRow
            label="Wind-down period"
            right={<Pill>10 min</Pill>}
          />
          <SettingRow
            label="Wind-down sound"
            right={
              <span className="text-[11px] text-white/50">Gentle chime</span>
            }
          />
          <SettingRow
            label="Auto-pause on idle"
            right={<Toggle checked />}
          />
        </SettingSection>

        {/* Notifications */}
        <SettingSection label="Notifications">
          <SettingRow
            label="Session reminders"
            right={<Toggle checked />}
          />
          <SettingRow
            label="Remind before"
            right={<Pill>5 min</Pill>}
          />
          <SettingRow
            label="Wind-down alert"
            right={<Toggle checked />}
          />
          <SettingRow
            label="Daily summary"
            right={<Toggle />}
          />
        </SettingSection>

        {/* Integrations */}
        <SettingSection label="Integrations">
          <SettingRow
            label="Sync with Apple Calendar"
            right={<Toggle checked />}
          />
          <SettingRow
            label="Calendar"
            right={
              <span className="text-[11px] text-white/50">Work</span>
            }
          />
        </SettingSection>

        {/* Appearance */}
        <SettingSection label="Appearance">
          <SettingRow
            label="Theme"
            right={
              <div className="flex gap-1">
                <ThemeDot active />
                <ThemeDot light />
                <ThemeDot auto />
              </div>
            }
          />
        </SettingSection>

        {/* About */}
        <div className="mt-4 text-center text-[10px] text-white/25">
          Helio v1.2.0 (beta) · Made with ☕ in Melbourne
        </div>
      </div>
    </div>
  );
}

function SettingSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-white/35">
        {label}
      </div>
      <div className="space-y-0">{children}</div>
    </div>
  );
}

function SettingRow({
  label,
  right,
}: {
  label: string;
  right: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-2">
      <span className="text-[12px] text-white/80">{label}</span>
      {right}
    </div>
  );
}

function Toggle({ checked = false }: { checked?: boolean }) {
  return (
    <div
      className={`h-[16px] w-[28px] rounded-full transition-colors ${
        checked ? "bg-[#3B82F6]" : "bg-white/15"
      }`}
    >
      <div
        className={`h-[12px] w-[12px] translate-y-[2px] rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-[14px]" : "translate-x-[2px]"
        }`}
      />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-white/8 px-2 py-0.5 text-[11px] text-white/70">
      {children}
    </span>
  );
}

function ThemeDot({
  active = false,
  light = false,
  auto = false,
}: {
  active?: boolean;
  light?: boolean;
  auto?: boolean;
}) {
  const bg = light ? "#E5E5E5" : auto ? "linear-gradient(135deg, #1C1917 50%, #E5E5E5 50%)" : "#1C1917";
  return (
    <div
      className={`flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 ${
        active ? "border-[#3B82F6]" : "border-white/15"
      }`}
    >
      <div
        className="h-[10px] w-[10px] rounded-full"
        style={{ background: bg }}
      />
    </div>
  );
}
