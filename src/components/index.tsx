import { ComponentsType } from "@/types/components";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Title } from "./ui/text";
import { Label } from "./ui/label";
import { SelectComponent } from "./shared/select";
import { ModeToggle } from "./shared/theme-toogle";

export const components = {
  [ComponentsType.button]: Button,
  [ComponentsType.input]: Input,
  [ComponentsType.label]: Label,
  [ComponentsType.select]: SelectComponent,
  [ComponentsType.themeToggle]: ModeToggle,
};
