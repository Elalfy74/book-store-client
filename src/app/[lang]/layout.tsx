import '../globals.css';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

import { theme } from '@/theme';
import { cairo } from '@/font';

import { type Locale, i18n } from '@/i18n.config';
import { getCurrentUser } from '@/actions/auth.actions';
import { localeStore } from '@/store/server/locale.store';

import { QueryProvider } from '@/layouts/query-provider';
import { Header } from '@/layouts/header/header';
import { SetClientUser } from '@/store/client/set-client-user';

export const metadata: Metadata = {
  title: 'My Books',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default async function RootLayout(props: RootLayoutProps) {
  const {
    children,
    params: { lang },
  } = props;

  localeStore.data = lang;

  const currentUser = await getCurrentUser();

  return (
    <html lang={lang} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cairo.className}>
        <MantineProvider theme={theme}>
          <QueryProvider>
            <Header lang={lang} />
            {children}
            <SetClientUser currentUser={currentUser} />
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
