'use server';

import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import setCookie from 'set-cookie-parser';

import type { CurrentUser } from '@/types';
import type { LoginSchemaType } from '@/app/[lang]/(auth)/login/components/login-form.schema';

import { privateServerAxios } from '@/lib/private-axios';
import { publicAxios } from '@/lib/public-axios';

export const getCurrentUser = async () => {
  try {
    const { data } = await privateServerAxios.get<CurrentUser>('auth/current-user');

    return data;
  } catch (err) {
    return null;
  }
};

export const loginWithCredentials = async (input: LoginSchemaType) => {
  try {
    const res = await publicAxios.post<CurrentUser>('auth/credentials/login', input);

    const receivedCookies = res.headers['set-cookie'];
    setTokensInCookies(receivedCookies);

    return res.data;
  } catch (err) {
    return handleError(err);
  }
};

export const loginWithGoogle = async (accessToken: string) => {
  try {
    const res = await publicAxios.post<CurrentUser>('auth/google/login', { accessToken });

    const receivedCookies = res.headers['set-cookie'];
    setTokensInCookies(receivedCookies);

    return res.data;
  } catch (err) {
    return handleError(err);
  }
};

const setTokensInCookies = (receivedCookies: string[] | undefined) => {
  if (!receivedCookies) throw new Error('No Token Received');

  const parsedCookies = setCookie.parse(receivedCookies);
  parsedCookies.forEach((cookie) => {
    cookies().set({
      name: cookie.name,
      value: cookie.value,
      httpOnly: cookie.httpOnly,
      maxAge: 900000,
      path: cookie.path,
      secure: cookie.secure,
    });
  });
};

const handleError = (err: unknown) => {
  if (err instanceof AxiosError) {
    throw err.response?.data.message || err;
  }
  throw err;
};
