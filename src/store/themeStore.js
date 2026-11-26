import { create } from "zustand";

export const useThemeStore = create((set) => ({
    mode: localStorage.getItem("mode") || 'light',
    toggleMode: () => set((state) => {
    const currentMode = get().mode;

    })
}));