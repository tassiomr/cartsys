import { z } from "zod";

export enum ComponentsType {
	input = "input",
	button = "button",
	select = "select",
	label = "label",
	themeToggle = "themeToggle",
}

export const ComponentSchema = z.object({
	id: z.string().cuid(),
	type: z.nativeEnum(ComponentsType),
	props: z.object({}),
});

export type Component = z.infer<typeof ComponentSchema>;
