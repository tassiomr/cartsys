"use client";
import { components } from "@/components/ui";
import { useViewerStore } from "@/store/useViewerStore";
import React, { useEffect, useRef } from "react";

export default function ComponentBuilder({ component }) {
	const Component = components[component.type];

	const ref = useRef();

	const handleOnChange = (event) => {
		useViewerStore.setState({ [component.id]: event.target.value });
	};

	const handleClick = () => {
		useViewerStore
			.getState()
			[component.props.action](component.props?.children || component.id);
	};

	useEffect(() => {
		console.log(component);
		if (ref.current) {
			if (component.props.action) {
				ref?.current?.addEventListener("click", handleClick);
			}
			ref?.current?.addEventListener("change", handleOnChange);
		}

		return () => {
			ref?.current?.removeEventListener("change", handleOnChange);
			ref?.current?.removeEventListener("click", handleClick);
		};
	}, [ref]);

	return <Component {...component.props} ref={ref} />;
}
