import { FeatureSection } from "../FeatureSection";
import { Highlight } from "../Highlight";
import { WrapUpPreview } from "../previews/WrapUpPreview";

export function WrapUpSection() {
  return (
    <FeatureSection
      id="wrap-up"
      eyebrow="Capture"
      heading={
        <>
          End each session
          <br />
          with a <Highlight>breadcrumb.</Highlight>
        </>
      }
      subheading="Jot what you finished and where you got stuck. Next time, Helio puts you right back in it."
      preview={<WrapUpPreview />}
    />
  );
}
