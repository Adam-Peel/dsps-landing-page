import {
  Container,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import classes from "@/app/styling/Testimonials.module.css";

const data = [
  {
    image: "https://ui.mantine.dev/_next/static/media/auditors.32124e83.svg",
    title: "Jane J",
    description:
      "Danny was instrumental in finding me the right property, and worked seamlessly with my team ot make it happen.",
  },
  {
    image: "https://ui.mantine.dev/_next/static/media/lawyers.3ddb0c33.svg",
    title: "Mark M",
    description:
      "The step to becoming self-employed was daunting. But with DSPS, it was made easy. Great team, great service.",
  },
  {
    image: "https://ui.mantine.dev/_next/static/media/accountants.ba1b4633.svg",
    title: "Barbara B",
    description: "I never thought I could make so much money!",
  },
  {
    image: "https://ui.mantine.dev/_next/static/media/others.0a9c7795.svg",
    title: "Harry H",
    description:
      "Speaking to DSPS was the best move I ever made. I'm now running my own show and have never been in a better place with work.",
  },
];

export function Testimonials() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <Image src={item.image} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size="lg" className={classes.wrapper}>
      <Title className={classes.title} order={2}>
        We are proud to have supported{" "}
        <span className={classes.highlight}> hundreds of clients.</span>
      </Title>

      {/* <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Its lungs contain an organ that creates electricity. The crackling
          sound of electricity can be heard when it exhales. Azurill’s tail is
          large and bouncy. It is packed full of the nutrients this Pokémon
          needs to grow.
        </Text>
      </Container> */}

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
