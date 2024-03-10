import { ComponentsType } from "./components";
import { InputSchema, inputBuilder } from "./input";

export const Fileds = {
  [ComponentsType.input]: { builder: inputBuilder, zod: InputSchema },
  [ComponentsType.button]: { builder: inputBuilder, zod: InputSchema },
};
