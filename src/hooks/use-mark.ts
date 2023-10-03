import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    setMarked: (_id: string, marked: boolean) => void;
    namesList: Record<string, boolean>;
};
export const useMarked = create<State>()(
    persist(
        (set) => ({
            namesList: {},
            setMarked: (id, marked) =>
                set((s) => ({
                    namesList: {
                        ...s.namesList,
                        [id]: marked,
                    },
                })),
        }),
        {
            name: "marked-names-of-god",
        },
    ),
);
