import Link from "next/link";
import { Button } from "@mantine/core";

import { headerDicStore } from "@/store/server/dictionaries.store";
import { localeStore } from "@/store/server/locale.store";

import { LocaleSwitcher } from "./locale-switcher";

interface HeaderActionsProps {
  fullWidthLocale?: boolean;
}

export const HeaderActions = ({ fullWidthLocale }: HeaderActionsProps) => {
  const dict = headerDicStore.data.mainHeader.actions;

  return (
    <>
      <Button variant="default" component={Link} href={`/${localeStore.data}/login`}>
        {dict.login}
      </Button>
      <Button>{dict.signUp}</Button>

      <LocaleSwitcher fullWidth={fullWidthLocale} />
    </>
  );
};
