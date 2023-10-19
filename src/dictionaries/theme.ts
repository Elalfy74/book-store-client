"use client";

import { MantineColorsTuple, createTheme } from "@mantine/core";

import { cairo } from "./font";

const myColor: MantineColorsTuple = [
  "#e1f9ff",
  "#cdeeff",
  "#9ed9fb",
  "#6bc4f6",
  "#42b3f2",
  "#27a8f0",
  "#0da2f0",
  "#008dd7",
  "#007dc2",
  "#006dac",
];

export const theme = createTheme({
  breakpoints: {
    xs: "640px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1536px",
  },

  fontFamily: cairo.style.fontFamily,
  colors: {
    primary: myColor,
  },

  primaryColor: "primary",
});
