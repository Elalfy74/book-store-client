"use client";

import { Burger } from "@mantine/core";

import { useMenu } from "../menu.store";

export const HeaderBurger = () => {
  const { isMenuOpen, toggle } = useMenu();

  return <Burger opened={isMenuOpen} onClick={toggle} hiddenFrom="sm" size="sm" />;
};
