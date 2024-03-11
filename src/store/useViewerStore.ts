import { create } from "zustand";

type ViewerStore = {
	[key: string]: any;
};

const initialState: ViewerStore = {};

export const useViewerStore = create<ViewerStore>(() => ({
	...initialState,
	getValue(key: string) {
		return useViewerStore.getState()[key];
	},
	alert: (value: string) => {
		alert(`Clicked at: ${value}`);
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
