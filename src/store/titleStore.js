import { create } from "zustand";

export const useTitleStore = create((set) => ({
    title: "Welcome",
    setTitle: (title) => set({ title }),
    subtitle: "",
    setSubtitle: (subtitle) => set({ subtitle }),
    resetTitle: () => set({ title: "Welcome", subtitle: "" }),
}));
