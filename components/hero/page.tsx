import { SpotlightPreview } from "../_components/SpotlightPreview";
import { BentoGridThirdDemo } from "../_components/BentoPreview";

export default function page() {
  return (
    <div className="">
      <SpotlightPreview />
      <div className="bg-home_page pt-10 pb-10">
        <BentoGridThirdDemo />
      </div>
    </div>
  );
}
