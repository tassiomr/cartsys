import { create } from "zustand";

type ViewerStore = {
  // biome-ignore lint/suspicious/noExplicitAny: is necessary to create a dynamic store
  [key: string]: any;
};

const initialState: ViewerStore = {};

export const useViewerStore = create<ViewerStore>(() => ({
  ...initialState,
  getValue(key: string) {
    return useViewerStore.getState()[key];
  },
  alert: () => {
    alert("use view store");
  },
  sheet: () => {
    alert("use view store sheet");
  },
  getForm() {
    const state = useViewerStore.getState();
    const newState: ViewerStore = {};

    for (const key in state) {
      if (typeof state[key] !== "function") {
        newState[key] = state[key];
      }
    }

    return newState;
  },
}));
