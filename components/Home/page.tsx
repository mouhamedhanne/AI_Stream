import Navigations from "@/components/navigations/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import Faq from "@/components/faq/page";
import Pricing from "@/components/pricing/page";

export default function page() {
  return (
    <div className="">
      <Navigations />
      <Hero />
      <Services />
      <Faq />
      <Pricing />
    </div>
  );
}
