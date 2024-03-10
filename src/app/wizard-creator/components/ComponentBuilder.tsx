import { components } from "@/components/ui";
import { Component } from "@/types/components";

type ComponentBuilderType = {
	component: Component;
};

export default function ComponentBuilder({ component }: ComponentBuilderType) {
	const Component = components[component.type];

	return <Component {...component.props} />;
}
