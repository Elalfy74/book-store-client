"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/store/client/session.store";

import { useLocale } from "./use-locale";

export const useProtected = (requireSession: boolean, path: string) => {
  const session = useSession((state) => state.session);
  const { locale } = useLocale();
  const { push } = useRouter();

  // We have to conditions to navigate
  // First if it is protected (require session) and we don't have a one
  // Second if it is public only (not require session like Auth) and we already have a session
  const shouldNavigate = (requireSession && !session) || (!requireSession && session);

  useEffect(() => {
    if (shouldNavigate) {
      push(`/${locale}${path}`);
    }
  }, [locale, path, push, shouldNavigate]);
};
