import LandingPageSection1Component from "@/components/landingPage/landingIndexpage.component";
import LandingPageSection2Component from "@/components/landingPage/landingPageSection2.component";
import LandingPageSection3Component from "@/components/landingPage/landingPageSection3.component";
import LandingPageSection4Component from "@/components/landingPage/landingPageSection4.component";
import LandingPageSection5Component from "@/components/landingPage/landingPageSection5.component";

export default function LandingPage() {
  return (
    <main className="">
      <LandingPageSection1Component />
      <LandingPageSection2Component />
      <LandingPageSection3Component />
      <LandingPageSection4Component />
      <LandingPageSection5Component />
    </main>
  );
}
