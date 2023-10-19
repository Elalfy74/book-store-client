import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { Flex, Title, Text, Button, TextInput, ActionIcon } from "@mantine/core";

import { homeDicStore } from "@/store/server/dictionaries.store";

import heroImg from "/public/hero.png";

export const Hero = () => {
  const dict = homeDicStore.data.hero;

  return (
    <div className="container text-[#252B42] ">
      <Flex
        align="center"
        justify="space-between"
        gap={30}
        direction={{
          base: "column",
          lg: "row",
        }}
        py={{
          base: 20,
          lg: 0,
        }}
        className="rounded-2xl"
        style={{
          background: "linear-gradient(90deg, #96E9FB 0%, #ABECD6 100%)",
        }}
      >
        <div className="px-10 lg:px-20 xl:px-[70px] flex-1 text-center xl:text-justify">
          {/* Description */}
          <Title
            className="uppercase "
            order={1}
            fz={{
              xs: "40px",
              xl: "60px",
            }}
          >
            {dict.title}
          </Title>
          <Text c="dark.2" fz={20}>
            {dict.subTitle}
          </Text>

          {/* Actions */}
          <Flex
            align="center"
            mt={15}
            gap={20}
            wrap="wrap"
            justify={{
              base: "center",
              lg: "start",
            }}
          >
            <Button size="xl" className="uppercase" visibleFrom="lg">
              {dict.actions.button}
            </Button>

            <Button size="lg" className="uppercase" hiddenFrom="lg">
              {dict.actions.button}
            </Button>

            <TextInput
              size="xl"
              placeholder={dict.actions.search}
              variant="filled"
              w={{
                base: "100%",
                lg: "400px",
              }}
              radius="xl"
              rightSection={
                <ActionIcon variant="transparent" aria-label="search">
                  <SearchIcon />
                </ActionIcon>
              }
            />
          </Flex>
        </div>

        <Image src={heroImg} height={500} className="w-auto" alt="hero" priority />
      </Flex>
    </div>
  );
};
