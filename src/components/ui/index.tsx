import { ComponentSchema, ComponentsType } from "@/types/components";
import { Button } from "./button";
import { Input } from "./input";
import { Title } from "./text";

export const components = {
	[ComponentsType.button]: Button,
	[ComponentsType.input]: Input,
};
