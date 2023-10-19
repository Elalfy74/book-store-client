import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

import type { ISession } from "@/types";

interface SessionState {
  session: ISession | null;
  loginUser: (session: ISession) => void;
  logoutUser: () => void;
}

export const useSession = create<SessionState>((set) => ({
  session: null,

  loginUser: (session) => set({ session }),
  logoutUser: () => set({ session: null }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Session", useSession);
}
