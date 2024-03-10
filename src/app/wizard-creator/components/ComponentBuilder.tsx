import { components } from "@/components";
import { Component } from "@/types/components";

type ComponentBuilderType = {
  component: Component;
};

export default function ComponentBuilder({ component }: ComponentBuilderType) {
  const Component = components[component.type];

  console.log(Component);
  return <Component {...component.props} />;
}
