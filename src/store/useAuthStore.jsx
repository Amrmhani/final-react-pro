import { create } from "zustand"

export const useAuthstore = create(()=>({
    token:localStorage.getItem('token'),
}));