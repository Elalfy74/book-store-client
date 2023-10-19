'use client';

import { useEffect } from 'react';

import type { CurrentUser } from '@/types';
import { useAuth } from './use-auth.store';

export const SetClientUser = ({ currentUser }: { currentUser: CurrentUser | null }) => {
  const loginUser = useAuth((state) => state.loginUser);

  useEffect(() => {
    if (currentUser) {
      loginUser(currentUser);
    }
  }, [currentUser, loginUser]);

  return <></>;
};
