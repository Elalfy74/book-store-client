import { AxiosError } from 'axios';

import type { CurrentUser } from '@/types';
import { serverAxios } from '@/lib/server-axios';

export const getCurrentUser = async () => {
  try {
    const { data } = await serverAxios.get<CurrentUser>('auth/current-user');

    console.log(data);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return null;
  }
};
