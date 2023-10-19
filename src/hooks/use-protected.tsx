'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/store/client/use-auth.store';
import { useLocale } from './use-locale';

export const useProtected = (requireAuth: boolean, path: string) => {
  const currentUser = useAuth((state) => state.currentUser);
  const { locale } = useLocale();
  const { push } = useRouter();

  // We have to conditions to navigate
  // First if it is protected (require auth) and we don't have a one
  // Second if it is public only (not require auth like Auth) and we already have a user
  const shouldNavigate = (requireAuth && !currentUser) || (!requireAuth && currentUser);

  useEffect(() => {
    if (shouldNavigate) {
      push(`/${locale}${path}`);
    }
  }, [locale, path, push, shouldNavigate]);
};
