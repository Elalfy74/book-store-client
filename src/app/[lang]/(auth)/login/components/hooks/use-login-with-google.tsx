'use client';

import { useMutation } from '@tanstack/react-query';

import { useSession } from '@/store/client/current-user.store';

import { loginWithGoogle } from '@/services/client/auth';

export const useLoginWithGoogle = () => {
  const loginUser = useSession((state) => state.loginUser);

  const { mutate, isPending } = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (res) => {
      loginUser(res.data.user);
    },
  });

  return {
    loginWithGoogle: mutate,
    isPending,
  };
};
