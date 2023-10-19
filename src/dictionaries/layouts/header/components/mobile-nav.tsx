"use client";

import Link from "next/link";
import { Box, Container, NavLink } from "@mantine/core";

import type { LinkType } from "../links";
import { useMenu } from "../menu.store";

interface MobileNavProps {
  links: LinkType[];
  children: React.ReactNode;
}

export const MobileNav = ({ links, children }: MobileNavProps) => {
  const isMenuOpen = useMenu((state) => state.isMenuOpen);

  if (!isMenuOpen) return;

  return (
    <Container hiddenFrom="sm" size="xl" mb={10}>
      <Box component="nav" mb="sm">
        <LinksList links={links} />
      </Box>

      {children}
    </Container>
  );
};

interface LinksListProps {
  links: LinkType[];
}

const LinksList = ({ links }: LinksListProps) => (
  <>
    {links.map((link) => (
      <NavLink
        component={Link}
        key={link.label}
        label={link.label}
        href={link.link}
        classNames={{
          body: "text-justify",
        }}
      />
    ))}
  </>
);
