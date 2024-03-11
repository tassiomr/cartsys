import cuid from "cuid";
import { z } from "zod";
import { ComponentsType } from "./components";

export const LabelSchema = z.object({
	id: z.string().cuid().optional(),
	type: z
		.nativeEnum(ComponentsType)
		.default(ComponentsType.label)
		.refine((value) => ComponentsType[value]),
	props: z.object({
		children: z.string().min(5, "A propriedade label é obrigátoria"),
	}),
});

export type label = z.infer<typeof LabelSchema>;

export const labelBuilder = {
	title: "Criar label",
	type: "label",
	props: [
		{
			type: "input",
			prop: "children",
			placeholder: "Digite para adicionar texto ao label",
			shortDescription: "Label",
		},
	],
};
