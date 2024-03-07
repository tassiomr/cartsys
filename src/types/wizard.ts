import { Page } from "./pages";

export enum Orientation {
  vertiacal = "Vertical",
  horizontal = "Horizontal",
}
export interface Wizard {
  name: string;
  pages: Page[];
  orientation: Orientation;
}
