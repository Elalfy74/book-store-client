'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

instance.interceptors.request.use((request) => {
  const allCookies = cookies().getAll();
  let sentCookies = ``;

  allCookies.forEach((cookie) => {
    sentCookies += `${cookie.name}=${cookie.value};`;
  });

  request.headers.set('Cookie', sentCookies);

  return request;
});

export const serverAxios = instance;
