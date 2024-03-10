import { create } from "zustand";

type DynamicStore = {
  alert: () => {};
  sheet: () => {};

  addValue: (key: string, value: string) => {};
};

const dynamicStore = create(() => ({
  addValue(key: string, value: string) {
    dynamicStore.setState({ [key]: value });
  },
  getForm: () => {},
}));
