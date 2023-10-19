'use client';

import { Select } from '@mantine/core';

import { i18n } from '@/i18n.config';
import { useLocale } from '@/hooks/use-locale';

export function LocaleSwitcher({ fullWidth }: { fullWidth?: boolean }) {
  const { locale, changeLanguage } = useLocale();

  return (
    <Select
      // @ts-ignore locales are readonly
      data={i18n.locales}
      w={!fullWidth ? 80 : undefined}
      value={locale}
      allowDeselect={false}
      onChange={changeLanguage}
      classNames={{
        input: 'uppercase',
        option: 'uppercase',
      }}
    />
  );
}
