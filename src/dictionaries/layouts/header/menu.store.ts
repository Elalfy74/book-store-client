import { create } from "zustand";

interface MenuState {
  isMenuOpen: boolean;
  toggle: () => void;
}

export const useMenu = create<MenuState>((set) => ({
  isMenuOpen: false,
  toggle: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
