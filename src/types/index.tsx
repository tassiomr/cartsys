import { ComponentsType } from "./components";
import { ButtonSchema, buttonBuilder } from "./button";
import { InputSchema, inputBuilder } from "./input";
import { LabelSchema, labelBuilder } from "./label";
import { selectBuilder, SelectSchema } from "./select";
import { ToggleThemeSchema, toggleThemeBuilder } from "./themeToggle";

export const Fileds = {
  [ComponentsType.input]: { builder: inputBuilder, zod: InputSchema },
  [ComponentsType.button]: { builder: buttonBuilder, zod: ButtonSchema },
  [ComponentsType.label]: { builder: labelBuilder, zod: LabelSchema },
  [ComponentsType.select]: { builder: selectBuilder, zod: SelectSchema },
  [ComponentsType.themeToggle]: {
    builder: toggleThemeBuilder,
    zod: ToggleThemeSchema,
  },
};