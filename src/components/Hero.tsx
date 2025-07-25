import {
  IconCheck,
  IconBuildings,
  IconHomeSearch,
  IconKey,
} from "@tabler/icons-react";
import {
  Button,
  Container,
  Overlay,
  Text,
  Title,
  List,
  ListItem,
  ThemeIcon,
} from "@mantine/core";
import classes from "@/app/styling/HeroContentLeft.module.css";

export function HeroContentLeft() {
  return (
    <div className={classes.hero} id="about">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .75) 50%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="lg">
        <Title className={classes.title}>DS Property Consultants</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Providers of a wide range of services across the property sector
          helping estate agents and buyers.
        </Text>
        <List className={classes.description} mt={30} spacing="md" size="md">
          <ListItem
            icon={
              <ThemeIcon size={40} radius="xl">
                <IconBuildings size={28} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <b>Estate Agents</b>
            <br />
            Whether you are new to the industry or looking to go self-employed,
            we provide consultatncy and can match you with estate management
            agencies.
          </ListItem>

          <ListItem
            icon={
              <ThemeIcon size={40} radius="xl">
                <IconHomeSearch size={28} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <b>Property Investors</b>
            <br />
            We source suitable properties to expand your portfolio and conduct
            thorough due dilligence and market research to ensure quality and
            yield.
          </ListItem>
          <ListItem
            icon={
              <ThemeIcon size={40} radius="xl">
                <IconKey size={28} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <b>Buyers</b>
            <br />
            We advise on property purchasing to ease the complexity of the
            process, and conduct negotiations to help ensure the best price.
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
