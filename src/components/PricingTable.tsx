import {
  IconPercentage100,
  IconPercentage33,
  IconPercentage66,
  IconCheck,
} from "@tabler/icons-react";
import {
  Badge,
  Card,
  CardSection,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  List,
  ListItem,
} from "@mantine/core";
import classes from "@/app/styling/Pricing.module.css";

const mockdata = [
  {
    title: "Information and Guidance",
    description:
      "Ideal if you're looking for information about where to get started as a self-employed estate agent, or guidance for a specific query you have.",
    icon: IconPercentage33,
    list: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Consultancy",
    description:
      "Perfect for those looking for a more comprehensive service in getting started as a self-employed estate agent, but who do not need full guidance or introduction to management agencies.",
    icon: IconPercentage66,
    list: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Full Service",
    description:
      "Our fullest service, including full support, guidance, consultancy and matching you with existing networks of estate agents and managament agencies.",
    icon: IconPercentage100,
    list: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
      "Feature 6",
    ],
  },
];

export function PricingTable() {
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <div style={{ minHeight: 210 }}>
        <Text>£ Price</Text>
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" className={classes.shadedtext} mt="sm">
          {feature.description}
        </Text>
      </div>
      <CardSection style={{ marginTop: "2px", paddingBottom: "10px" }}>
        <List style={{ paddingLeft: "32px" }}>
          {feature.list.map((item, index) => (
            <Group
              key={index}
              style={{
                marginBottom: "8px",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                alignItems: "center",
              }}
            >
              <IconCheck
                color="green"
                size={20}
                style={{
                  marginRight: "5px",
                }}
              />
              <Text>{item}</Text>
            </Group>
          ))}
        </List>
      </CardSection>
    </Card>
  ));

  return (
    <Container size="lg">
      <Group justify="center"></Group>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
