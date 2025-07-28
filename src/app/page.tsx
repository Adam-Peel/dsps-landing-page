import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { AppShell, AppShellHeader, AppShellMain, Text } from "@mantine/core";

import { HeroContentLeft } from "@/components/Hero";
import TimeLine from "@/components/Timeline";
import { EstateAgentsGrid } from "@/components/EstateAgentsGrid";
import { HeaderSimple } from "@/components/Header";

export default function Home() {
  return (
    <AppShell header={{ height: 56 }} padding="md">
      <AppShellHeader>
        <HeaderSimple />
      </AppShellHeader>
      <AppShellMain>
        <HeroContentLeft />
        <TimeLine />

        <EstateAgentsGrid />

        <div className="flex justify-center mt-10">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "pink", to: "yellow" }}
          >
            Orange Text
          </Text>{" "}
          <ColorSchemesSwitcher />
        </div>
      </AppShellMain>
    </AppShell>
  );
}
