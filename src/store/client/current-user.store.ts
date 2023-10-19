import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

import type { CurrentUser } from '@/types';

interface SessionState {
  currentUser: CurrentUser | null;
  loginUser: (currentUser: CurrentUser) => void;
  logoutUser: () => void;
}

export const useSession = create<SessionState>((set) => ({
  currentUser: null,

  loginUser: (currentUser) => set({ currentUser: currentUser }),
  logoutUser: () => set({ currentUser: null }),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('currentUser', useSession);
}
