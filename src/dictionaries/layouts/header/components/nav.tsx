import Link from "next/link";
import { Anchor, Group } from "@mantine/core";

import type { LinkType } from "../links";

interface NavProps {
  links: LinkType[];
}

export const Nav = ({ links }: NavProps) => {
  const items = links.map((link) => (
    <Anchor component={Link} key={link.label} href={link.link} c="dark.2">
      {link.label}
    </Anchor>
  ));

  return (
    <Group gap={20} visibleFrom="sm">
      {items}
    </Group>
  );
};
