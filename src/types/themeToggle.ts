import { z } from "zod";
import { ComponentsType } from "./components";

export const ToggleThemeSchema = z.object({
  id: z.string().cuid(),
  type: z
    .nativeEnum(ComponentsType)
    .default(ComponentsType.themeToggle)
    .refine((value) => ComponentsType[value]),
  props: z.object({
    action: z.string(),
  }),
});

export type label = z.infer<typeof ToggleThemeSchema>;

export const toggleThemeBuilder = {
  title: "Criar toggle theme",
  type: "toggleTheme",
  props: [
    {
      type: "select",
      prop: "action",
      placeholder: "Digite para adicionar texto ao label",
      shortDescription: "Actions",
      options: ["alert", "sheet"].map((e) => ({ label: e, value: e })),
    },
  ],
};
