import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import { HeroContentLeft } from "@/components/Hero";
import TimeLine from "@/components/Timeline";
import { EstateAgentsGrid } from "@/components/EstateAgentsGrid";
import { HeaderSimple } from "@/components/Header";
import { PricingTable } from "@/components/PricingTable";
import { PropertyStatsGrid } from "@/components/PropertyStats";

export default function Home() {
  return (
    <AppShell header={{ height: 56 }} padding="md">
      <AppShellHeader>
        <HeaderSimple />
      </AppShellHeader>
      <AppShellMain>
        <HeroContentLeft />
        <TimeLine />
        <PropertyStatsGrid />
        <EstateAgentsGrid />
        <PricingTable />

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
