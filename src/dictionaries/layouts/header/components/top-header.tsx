import { Flex } from "@mantine/core";

import { headerDicStore } from "@/store/server/dictionaries.store";

export const TopHeader = async () => {
  const dict = headerDicStore.data.topHeader;

  return (
    <Flex justify="space-between" bg="#252B42" c="white" px="xl" py="md" visibleFrom="lg">
      <Flex gap={30}>
        <span>{dict.phone}</span>
        <span>mahmoudelalfy13@gmail.com</span>
      </Flex>

      <span>{dict.discount}</span>

      <span>{dict.followUs}</span>
    </Flex>
  );
};
