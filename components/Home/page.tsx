//import Navigations from "@/components/navigations/page"; <Navigations />
import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import Faq from "@/components/faq/page";
import Pricing from "@/components/pricing/page";
import CallToAction from "@/components/callAction/page";
//import AvisClient from "@/components/avis-clients/page";
import Footer from "@/components/footer/page";

export default function page() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Pricing />
      <Faq />
      <CallToAction />
      <Footer />
    </div>
  );
}
