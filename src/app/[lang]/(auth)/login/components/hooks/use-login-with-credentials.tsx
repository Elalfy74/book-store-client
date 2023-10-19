'user client';

import { useMutation } from '@tanstack/react-query';

import { useAuth } from '@/store/client/use-auth.store';
import { loginWithCredentials } from '@/actions/auth.actions';

export const useLoginWithCredentials = () => {
  const loginUser = useAuth((state) => state.loginUser);

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginWithCredentials,
    onSuccess: (user) => {
      loginUser(user);
    },
  });

  return {
    loginWithCredentials: mutate,
    isPending,
    error,
  };
};
