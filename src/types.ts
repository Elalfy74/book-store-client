import type { Locale } from "@/i18n.config";

export interface ISession {
  name: string;
  email: string;
  avatar: string;
}

export interface PageBaseProps {
  params: {
    lang: Locale;
  };
}
