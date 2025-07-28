import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { AppShell, AppShellHeader, AppShellMain, Text } from "@mantine/core";

import { HeroContentLeft } from "@/components/Hero";
import TimeLine from "@/components/Timeline";
import { EstateAgentsGrid } from "@/components/EstateAgentsGrid";
import { HeaderSimple } from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <AppShell header={{ height: 56 }} padding="md">
      <AppShellHeader>
        <HeaderSimple />
      </AppShellHeader>
      <AppShellMain>
        <div className="flex justify-center mt-10">
          <ColorSchemesSwitcher />
        </div>
        <HeroContentLeft />
        <TimeLine />
        <Testimonials />
        <EstateAgentsGrid />
      </AppShellMain>
    </AppShell>
  );
}
