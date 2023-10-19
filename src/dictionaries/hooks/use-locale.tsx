"use client";

import { usePathname, useRouter } from "next/navigation";

const COOKIE_NAME = "NEXT_LOCALE";

export const useLocale = () => {
  const router = useRouter();
  const pathName = usePathname();

  const segments = pathName.split("/");
  const locale = segments[1];

  const changeLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      const cookieValue = newLocale;
      document.cookie = `${COOKIE_NAME}=${cookieValue}`;

      segments[1] = newLocale;
      router.push(segments.join("/"));
    }
  };

  return {
    locale,
    changeLanguage,
  };
};
