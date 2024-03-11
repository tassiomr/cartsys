import cuid from "cuid";
import { z } from "zod";
import { ComponentsType } from "./components";

export const SelectSchema = z.object({
	id: z.string().cuid().optional(),
	type: z.nativeEnum(ComponentsType).default(ComponentsType.select),
	props: z.object({
		placeholder: z.string().optional(),
		options: z.string(),
	}),
});

export type select = z.infer<typeof SelectSchema>;

export const selectBuilder = {
	title: "Adicione um seletor",
	type: "select",
	props: [
		{
			type: "input",
			prop: "options",
			placeholder: "item1;item2;item3",
			shortDescription: "Options",
		},
		{
			type: "input",
			prop: "placeholder",
			placeholder: "Adicione um placeholder para o seu select",
			shortDescription: "Placeholder",
		},
	],
};
