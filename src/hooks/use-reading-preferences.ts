import { persist } from 'zustand/middleware';
import { create } from "zustand"

type State = {
    theme: "light" | "dark";
    fontSize: number;
    incFontSize: () => void;
    decFontSize: () => void;
    setTheme: () => void;
}

export const useReadingPreferences = create<State>()(persist(set => ({
    theme: "light",
    fontSize: 0,
    incFontSize: () => set(state => ({ fontSize: state.fontSize + 1 })),
    decFontSize: () => set(state => ({ fontSize: state.fontSize - 1 })),
    setTheme: () => set(state => ({ theme: state.theme === "light" ? "dark" : "light" }))
}), {
    name: "reading-preferences"
}))