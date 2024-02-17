import { create } from "zustand";

type TitleStore = {
    title: string;
    setTitle: (title: string) => void;
    subtitle: string;
    setSubtitle: (subtitle: string) => void;
    resetTitle: () => void;
};

export const useTitleStore = create<TitleStore>((set) => ({
    title: "Welcome",
    subtitle: "",
    setTitle: (title) => set({ title }),
    setSubtitle: (subtitle) => set({ subtitle }),
    resetTitle: () => set({ title: "Welcome", subtitle: "" }),
}));
