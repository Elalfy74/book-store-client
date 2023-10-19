"use server";

import axios from "axios";
import { cookies } from "next/headers";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
});

instance.interceptors.request.use(async (request) => {
  const allCookies = cookies().getAll();

  let sentCookies = ``;

  allCookies.forEach((cookie) => {
    sentCookies += `${cookie.name}=${cookie.value};`;
  });

  request.headers.set("Cookie", sentCookies);

  return request;
});

export const serverAxios = instance;
