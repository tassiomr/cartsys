import { z } from "zod";
import { ComponentsType } from "./components";

export enum ButtonVariant {
  foreground = "foreground",
  default = "default",
  destructive = "destructive",
  outline = "outline",
  secondary = "secondary",
  ghost = "ghost",
  link = "link",
}

export const ButtonSchema = z.object({
  id: z.string().cuid(),
  type: z.nativeEnum(ComponentsType).default(ComponentsType.button),
  props: z.object({
    children: z.string().min(5, "A propriedade label é obrigátoria"),
    variant: z
      .nativeEnum(ButtonVariant)
      .refine((value) => ButtonVariant[value]),
    action: z.string(),
  }),
});

export type Button = z.infer<typeof ButtonSchema>;

export const buttonBuilder = {
  title: "Criar Button",
  type: "button",
  props: [
    {
      type: "input",
      prop: "children",
      placeholder: "Digite para adicionar texto ao botão",
      shortDescription: "Label",
    },
    {
      type: "select",
      prop: "variant",
      placeholder: "Escolha o estilo do seu botão",
      shortDescription: "Estilo do botão",
      options: Object.values(ButtonVariant).map((value) => ({
        value,
        label: value,
      })),
    },
    {
      type: "select",
      prop: "action",
      placeholder: "Escolha o estilo do seu botão",
      shortDescription: "Estilo do botão",
      options: ["alert_action", "sheet_action"].map((value) => ({
        value,
        label: value,
      })),
    },
  ],
};
