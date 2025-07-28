import {
  IconMap2,
  IconTrendingUp,
  IconUsersGroup,
  IconReceiptOff,
} from "@tabler/icons-react";
import {
  Container,
  Grid,
  GridCol,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "@/app/styling/EstateAgentsGrid.module.css";
import AgentTimeline from "./AgentsTimeline";
import { PricingTable } from "./PricingTable";

const features = [
  {
    icon: IconReceiptOff,
    title: "Save on admin",
    description:
      "We know the processes to becoming self-employed. So offload your admin onto us, and focus on building your profile and portfolio.",
  },
  {
    icon: IconMap2,
    title: "Get direction",
    description:
      "We provide a tailored roadmap for your progression, so you can get onto what you do best.",
  },
  {
    icon: IconTrendingUp,
    title: "Increase your work volume",
    description:
      "We provide expert consultancy on strategies to increase your own client base, and your profit margin.",
  },
  {
    icon: IconUsersGroup,
    title: "Networking",
    description:
      "Take advantage of our network to further yourself in the field. The first steps of self-employment are easier with support and mentoring.",
  },
];

export function EstateAgentsGrid() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius="md">
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text className={classes.shadedtext} fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container
      size="lg"
      style={{ minHeight: "100vh", alignContent: "center" }}
      id="agents"
    >
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <GridCol span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
              A full support service for estate agents across England.
            </Title>
            <Text className={classes.shadedtext}>
              Whether you're looking to branch out to become self-employed, or
              are looking to be recruited, we can help. We have a strong record
              of recruitment nationwide, and can provide expert consultancy and
              support to guide you through the necessary steps of setting up
              solo.
            </Text>
          </GridCol>
          <GridCol span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </GridCol>
        </Grid>
        <AgentTimeline />
        <PricingTable />
      </div>
    </Container>
  );
}
