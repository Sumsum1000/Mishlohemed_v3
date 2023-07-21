import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    name: "guest",
  },
  setName: (currentName) => {
    set((state) => ({ user: { ...state.user, name: currentName } }));
  },
}));
