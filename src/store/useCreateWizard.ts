import { Component } from "@/types/components";
import { Orientation, Wizard } from "@/types/wizard";
import cuid from "cuid";
import { create } from "zustand";

type Action = {
  addComponent: (component: Component, pageId: string) => void;
  updatePages: (pages: Wizard["pages"]) => void;
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
  updatePages: (pages) => set(() => ({ pages: pages })),
  addComponent: (component, pageId) =>
    set(({ pages }) => ({
      pages: pages.map((page) => {
        if (page.id === pageId) {
          return { ...page, components: [...page.components, component] };
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
}));
