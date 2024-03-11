import { Component } from "@/types/components";
import { Orientation, Page, Wizard } from "@/types/wizard";
import cuid from "cuid";
import { create } from "zustand";

type Action = {
	addComponent: (component: Component, pageId: string) => void;
	updatePages: (page: Page) => void;
	setOrientation: (orientation: Orientation) => void;
	addPage: () => void;
	reset: () => void;
};

const initialState: Wizard = {
	pages: [] as Wizard["pages"],
	id: "",
	orientation: Orientation.none,
	createdAt: new Date(),
};

export const createWizard = create<Wizard & Action>((set) => ({
	...initialState,

	addComponent: (component, pageId) =>
		set(({ pages }) => ({
			pages: pages.map((page) => {
				if (page.id === pageId) {
					return {
						...page,
						components: [...page.components, { ...component, id: cuid() }],
					};
				}
				return page;
			}),
		})),
	addPage: () =>
		set(({ pages }) => ({
			pages: [
				...pages,
				{ id: cuid(), title: `Página ${pages.length + 1}`, components: [] },
			],
		})),
	reset() {
		return set(() => ({ ...initialState }));
	},
	setOrientation: (orientation) => set(() => ({ orientation })),
	updatePages: (page) =>
		set(({ pages }) => ({
			pages: pages.map((pg) => (pg.id === page.id ? page : pg)),
		})),
}));
