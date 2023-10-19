"use client";

import { useEffect } from "react";

import type { ISession } from "@/types";
import { useSession } from "./session.store";

export const SetSession = ({ session }: { session: ISession | null }) => {
  const loginUser = useSession((state) => state.loginUser);

  useEffect(() => {
    if (session) {
      loginUser(session);
    }
  }, [session, loginUser]);

  return <></>;
};
