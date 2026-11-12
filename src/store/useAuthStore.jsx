import { create } from "zustand"

export const useAuthstore = create((set) => ({
    token: localStorage.getItem('token'),
    login: (newToken) => {
        localStorage.setItem('token', newToken);
        set({ token: newToken });
    },
    logoutn: () => {
        localStorage.removeItem('token');
        set({ token: null });
    }
}));