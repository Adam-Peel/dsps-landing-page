"use client";

import { Burger, Button, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/app/styling/HeaderSimple.module.css";
import Logo from "@/app/styling/dsps-graphic-orange-nobg.png";
import Link from "next/link";
import Image from "next/image";

const links = [
  { link: "#about", label: "About us" },
  { link: "#buyers", label: "Services for Property Buyers" },
  { link: "#agents", label: "Service for Estate Agents" },
  { link: "#contact", label: "Contact Us" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link href={link.link} key={link.label}>
      <Button variant="transparent">{link.label}</Button>
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src={Logo} height={55} width={56} alt="Logo" />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
