import { create } from "zustand";

export const useCategory = create((set) => ({
  category: null,
  setCategory: (category) => set({ category }),
}));
