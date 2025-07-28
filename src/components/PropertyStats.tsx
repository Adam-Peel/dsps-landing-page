import {
  IconCoinPound,
  IconDiscount2,
  IconBuildingSkyscraper,
  IconUserPlus,
} from "@tabler/icons-react";
import { Group, Paper, SimpleGrid, Text, Container } from "@mantine/core";
import classes from "@/app/styling/PropertyStats.module.css";

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  building: IconBuildingSkyscraper,
  coin: IconCoinPound,
};

const data = [
  {
    title: "Property Sales",
    icon: "building",
    value: "456",
    tagline: "Total number of sales completed",
  },
  {
    title: "Profit margin",
    icon: "coin",
    value: "12%",
    tagline: "Average landlord yield",
  },
  {
    title: "Negotiation Success",
    icon: "discount",
    value: "11%",
    tagline: "Average reduction in sale price vs. listed price",
  },
  {
    title: "Clients",
    icon: "user",
    value: "188",
    tagline: "Number of landlords we have represented",
  },
] as const;

export function PropertyStatsGrid() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          {stat.tagline}
        </Text>
      </Paper>
    );
  });
  return (
    <Container size="lg">
      <div className={classes.root}>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
      </div>
    </Container>
  );
}
