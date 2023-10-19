import type { Locale } from '@/i18n.config';

export interface CurrentUser {
  name: string;
  email: string;
  avatar: string;
}

export interface PageBaseProps {
  params: {
    lang: Locale;
  };
}
