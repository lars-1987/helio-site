import { FeatureSection } from "../FeatureSection";
import { Highlight } from "../Highlight";
import { TimerPreview } from "../previews/TimerPreview";

export function TimerSection() {
  return (
    <FeatureSection
      id="timer"
      eyebrow="Focus"
      heading={
        <>
          One tab.
          <br />
          One <Highlight>timer.</Highlight>
        </>
      }
      subheading="When a session starts, Helio brings up your last notes, and keeps the clock honest."
      preview={<TimerPreview />}
    />
  );
}
