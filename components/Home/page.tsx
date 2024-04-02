import Navigations from "@/components/navigations/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import Faq from "@/components/faq/page";
import Pricing from "@/components/pricing/page";
import CallToAction from "@/components/callAction/page";
//import AvisClient from "@/components/avis-clients/page";   <AvisClient />
import Footer from "@/components/footer/page";

export default function page() {
  return (
    <div className="">
      <Navigations />
      <Hero />
      <Services />
      <Pricing />
      <Faq />

      <CallToAction />
      <Footer />
    </div>
  );
}
