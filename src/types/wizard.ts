import cuid from "cuid";
import { z } from "zod";
import { ComponentSchema } from "./components";

enum Orientation {
	horizontal = "horizontal",
	vertical = "vertical",
	none = "none",
}

const PageSchema = z.object({
	id: z.string().cuid().default(cuid()),
	title: z.string(),
	components: z.array(ComponentSchema).default([]),
});

const WizardSchema = z.object({
	id: z.string().cuid().optional().default(cuid()),
	pages: z.array(PageSchema),
	orientation: z.nativeEnum(Orientation),
});

type Wizard = z.infer<typeof WizardSchema>;
type Page = z.infer<typeof PageSchema>;
type Component = z.infer<typeof WizardSchema>;

export { PageSchema, WizardSchema, Orientation };
export type { Wizard, Page, Component };
