// ts-nocheck
"use client";
import { components } from "@/components";
import { useViewerStore } from "@/store/useViewerStore";
import { Component, ComponentsType } from "@/types/components";
import { use } from "chai";

type ComponentBuilderType = {
  component: Component;
};

export default function ComponentBuilder({ component }: ComponentBuilderType) {
  const Component = components[component.type];

  if (component.type === ComponentsType.input) {
    return (
      <Component
        {...component.props}
        onChange={(e) => {
          useViewerStore.setState({ [component.id]: e.target.value });
        }}
      />
    );
  }

  if (component.type === ComponentsType.button) {
    <Component
      {...component.props}
      onClick={useViewerStore.getState()[component.props.actions]}
    />;
  }

  return <Component {...component.props} />;
}
