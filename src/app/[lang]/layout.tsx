import "../globals.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { theme } from "@/theme";
import { cairo } from "@/font";

import { type Locale, i18n } from "@/i18n.config";
import { getServerSession } from "@/services/actions/auth.actions";
import { localeStore } from "@/store/server/locale.store";

import { QueryProvider } from "@/layouts/query-provider";
import { SetSession } from "@/store/client/set-session";
import { Header } from "@/layouts/header/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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

  const session = await getServerSession();

  return (
    <html lang={lang} dir={lang === "en" ? "ltr" : "rtl"}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cairo.className}>
        <MantineProvider theme={theme}>
          <QueryProvider>
            <Header lang={lang} />
            {children}
            <SetSession session={session} />
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
