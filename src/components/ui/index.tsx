import { ComponentsType } from "@/types/components";
import { SelectComponent } from "../shared/select";
import { ModeToggle } from "../shared/theme-toogle";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

export const components = {
  [ComponentsType.button]: Button,
  [ComponentsType.input]: Input,
  [ComponentsType.label]: Label,
  [ComponentsType.select]: SelectComponent,
  [ComponentsType.themeToggle]: ModeToggle,
};
