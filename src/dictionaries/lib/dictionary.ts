import "server-only";

import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: {
    header: () => import("@/dictionaries/en/header.json").then((module) => module.default),
    home: () => import("@/dictionaries/en/home.json").then((module) => module.default),
    login: () => import("@/dictionaries/en/login.json").then((module) => module.default),
  },
  ar: {
    header: () => import("@/dictionaries/ar/header.json").then((module) => module.default),
    home: () => import("@/dictionaries/ar/home.json").then((module) => module.default),
    login: () => import("@/dictionaries/ar/login.json").then((module) => module.default),
  },
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale];
};
