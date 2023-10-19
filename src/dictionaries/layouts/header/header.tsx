import Link from "next/link";
import { Title, Box, Flex, Stack, Group } from "@mantine/core";

import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { headerDicStore } from "@/store/server/dictionaries.store";

import { type LinkType, links } from "./links";
import { TopHeader, HeaderActions, HeaderBurger, MobileNav, Nav } from "./components";

export const Header = async ({ lang }: { lang: Locale }) => {
  headerDicStore.data = await getDictionary(lang).header();
  const dict = headerDicStore.data.mainHeader;

  const translatedLinks: LinkType[] = links.map(({ label, link }) => ({
    link,
    label: dict.nav[label as keyof typeof dict.nav],
  }));

  return (
    <>
      <Box component="header">
        <TopHeader />

        <Flex
          justify="space-between"
          align="center"
          py="lg"
          className="container 2xl:max-w-[1700px] 2xl:px-4"
        >
          <Title>
            <Link href={`/${lang}`}>{dict.title}</Link>
          </Title>

          <Nav links={translatedLinks} />

          <Group visibleFrom="sm">
            <HeaderActions />
          </Group>

          <HeaderBurger />
        </Flex>
      </Box>

      <MobileNav links={translatedLinks}>
        <Stack>
          <HeaderActions fullWidthLocale />
        </Stack>
      </MobileNav>
    </>
  );
};
