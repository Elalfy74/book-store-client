'use client';

import { useEffect } from 'react';

import type { CurrentUser } from '@/types';
import { useSession } from './current-user.store';

export const SetSession = ({ session }: { session: CurrentUser | null }) => {
  const loginUser = useSession((state) => state.loginUser);

  useEffect(() => {
    if (session) {
      loginUser(session);
    }
  }, [session, loginUser]);

  return <></>;
};
