"user client";

import { useMutation } from "@tanstack/react-query";

import { useSession } from "@/store/client/session.store";

import { loginWithCredentials } from "@/services/client/auth";

export const useLoginWithCredentials = () => {
  const loginUser = useSession((state) => state.loginUser);

  const { mutate, isPending } = useMutation({
    mutationFn: loginWithCredentials,
    onSuccess: (res) => {
      loginUser(res.data.user);
    },
  });

  return {
    loginWithCredentials: mutate,
    isPending,
  };
};
