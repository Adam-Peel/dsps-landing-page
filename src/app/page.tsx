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

export default function Home() {
  return (
    <AppShell header={{ height: 56 }} padding="md">
      <AppShellHeader>
        <HeaderSimple />
      </AppShellHeader>
      <AppShellMain>
        <HeroContentLeft />
        <div id="buyers"></div>
        <TimeLine />
        <EstateAgentsGrid />

        <Title className="text-center mt-20">
          Welcome to{" "}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "pink", to: "yellow" }}
          >
            Mantine
          </Text>{" "}
          +
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "blue", to: "green" }}
          >
            TailwindCSS
          </Text>
        </Title>
        <Text
          className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto mt-xl"
          ta="center"
          size="lg"
          maw={580}
          mx="auto"
          mt="xl"
        >
          This starter Next.js project includes a minimal setup for Mantine with
          TailwindCSS. To get started edit page.tsx file.
        </Text>

        <div className="flex justify-center mt-10">
          <ColorSchemesSwitcher />
        </div>
      </AppShellMain>
    </AppShell>
  );
}
