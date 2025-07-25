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
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .75) 50%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
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
            We provide consulting if you are looking to go self-employed.
            <br />
            We have estate management agencies looking to recruit estate agents.
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
            We source suitable properties to expand your portfolio.
            <br />
            We conduct due dilligence and negotiations to ensure quality and
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
            process.
            <br />
            We conduct negotiations to help ensure a fair price.
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
