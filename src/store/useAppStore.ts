import { Orientation, Wizard } from "@/types/wizard";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ViewerStore = {
  theme: "dark" | "light" | "system";
  wizard: Wizard | null;
  wizards: Wizard[];
  createWizard: (wizard: Wizard) => void;
  // biome-ignore lint/suspicious/noExplicitAny: is necessary to create a dynamic store
  addValue: (key: keyof typeof initialState, value: any) => void;
};

const initialState: ViewerStore = {
  theme: "dark",
  wizard: null,
  wizards: [],
  addValue() {},
  createWizard(wizard) {},
};

export const useAppStore = create(
  persist<ViewerStore>(
    (set) => ({
      ...initialState,

      // biome-ignore lint/suspicious/noExplicitAny: is necessary to create a dynamic store
      addValue: (key: keyof typeof initialState, value: any) => {
        set((state) => {
          if (key === "addValue") {
            return state;
          }
          return { ...state, [key]: value };
        });
      },
      createWizard: (wizard) => {
        return set(({ wizards }) => ({ wizards: [...wizards, wizard] }));
      },
    }),
    {
      name: "wizard-app",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
