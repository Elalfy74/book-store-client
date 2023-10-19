import { AxiosError } from "axios";

import type { ISession } from "@/types";
import { serverAxios } from "@/lib/server-axios";

export const getServerSession = async () => {
  try {
    const { data } = await serverAxios.get<ISession>("auth/session");

    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(err.message);
    return null;
  }
};
