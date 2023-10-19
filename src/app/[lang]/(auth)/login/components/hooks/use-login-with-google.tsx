'use client';

import { useMutation } from '@tanstack/react-query';

import { useAuth } from '@/store/client/use-auth.store';
import { loginWithGoogle } from '@/actions/auth.actions';

export const useLoginWithGoogle = () => {
  const loginUser = useAuth((state) => state.loginUser);

  const { mutate, isPending } = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (user) => {
      loginUser(user);
    },
  });

  return {
    loginWithGoogle: mutate,
    isPending,
  };
};
