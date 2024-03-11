import { z } from "zod";
import { ComponentsType } from "./components";
import cuid from "cuid";

export enum InputTypes {
  text = "text",
  password = "password",
  phone = "phone",
  email = "email",
  date = "date",
}

export const InputSchema = z.object({
  id: z.string().cuid().optional(),
  type: z
    .nativeEnum(ComponentsType)
    .default(ComponentsType.input)
    .refine((value) => ComponentsType[value]),
  props: z.object({
    label: z.string().min(5, "A propriedade label é obrigátoria"),
    type: z.nativeEnum(InputTypes).refine((value) => {
      if (value) {
        return InputTypes[value];
      }

      return InputTypes.text;
    }),
  }),
});

export type Input = z.infer<typeof InputSchema>;

export const inputBuilder = {
  title: "Criar input",
  type: "input",
  props: [
    {
      type: "input",
      prop: "label",
      placeholder: "Digite para adicionar uma label",
      shortDescription: "Label",
    },
    {
      type: "select",
      prop: "type",
      placeholder: "Escolha o tipo da sua caixa de texto",
      shortDescription: "Tipo",
      options: Object.values(InputTypes).map((value) => ({
        value,
        label: value,
      })),
    },
  ],
};
