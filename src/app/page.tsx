import { ColorSchemesSwitcher } from "../components/color-schemes-switcher";
import { HeroContentLeft } from "../components/Hero";
import TimeLine from "../components/Timeline";
import { EstateAgentsGrid } from "../components/EstateAgentsGrid";

import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <ColorSchemesSwitcher />
      </div>
      <HeroContentLeft />
      <TimeLine />
      <Testimonials />
      <EstateAgentsGrid />
    </>
  );
}
