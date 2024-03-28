import { SpotlightPreview } from "../_components/SpotlightPreview";
//import CallToAction from "@/components/callAction/page";<CallToAction />
import { BentoGridThirdDemo } from "../_components/BentoPreview";

export default function page() {
  return (
    <div className="bg-home_page">
      <SpotlightPreview />
      <BentoGridThirdDemo />
    </div>
  );
}
