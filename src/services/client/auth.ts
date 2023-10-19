import type { CurrentUser } from '@/types';
import { clientAxios } from '@/lib/client-axios';

interface LoginParam {
  email: string;
  password: string;
}

interface LoginRes {
  accessToken: string;
  user: CurrentUser;
}

export const loginWithCredentials = async (input: LoginParam) => {
  return clientAxios.post<LoginRes>('auth/credentials/login', input);
};

export const loginWithGoogle = async (accessToken: string) => {
  return clientAxios.post<LoginRes>('auth/google/login', { accessToken });
};
