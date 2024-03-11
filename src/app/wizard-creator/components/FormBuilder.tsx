import BottomSheet from "@/components/shared/bottom-sheet";
import { SelectComponent } from "@/components/shared/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fileds } from "@/types";
import { Component, ComponentsType } from "@/types/components";
import { zodResolver } from "@hookform/resolvers/zod";
import cuid from "cuid";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type FormBuilderType = {
	formStatus: {
		componentType: ComponentsType;
		isOpen: boolean;
		pageId: string;
	};
	onSave: (param: Component, pageId: string) => void;
	onOpenChange: () => void;
};

export default function FormBuilder({
	formStatus: { componentType, isOpen, pageId },
	onSave,
	onOpenChange,
}: FormBuilderType) {
	const configs = Fileds[componentType];
	type configType = z.infer<typeof configs.zod>;

	const {
		handleSubmit,
		setValue,
		control,
		formState: { errors },
		reset,
	} = useForm<configType>({
		resolver: zodResolver(configs.zod),
		defaultValues: {
			id: cuid(),
		},
	});

	const handleOnSubmit = async (data: any) => {
		onSave(data, pageId);
		reset();
	};

	return (
		<BottomSheet
			title={configs.builder.title}
			open={isOpen}
			onOpenChange={onOpenChange}
			footer={
				<Button type="submit" onClick={handleSubmit(handleOnSubmit)}>
					Adicionar
				</Button>
			}
		>
			<form className="flex flex-col gap-4">
				{configs.builder.props.map((field: any) => {
					if (field.type === "input") {
						return (
							<div>
								<Label className="capitalize" htmlFor={`props.${field.prop}`}>
									{field.shortDescription}:
								</Label>
								<Input
									placeholder={field.placeholder}
									name={`props.${field.prop}`}
									id={`props.${field.prop}`}
									onChange={(event) => {
										setValue(`props.${field.prop}`, event?.target.value);
									}}
								/>
								{
									// @ts-ignore: The type exist dynamic in mount component
									errors.props?.label && <p>{errors.props.label.message}</p>
								}
							</div>
						);
					}

					if (field.type === "select") {
						return (
							<div>
								<Label className="capitalize" htmlFor={`props.${field.prop}`}>
									{field.shortDescription}:
								</Label>
								<Controller
									name={`props.${field.prop}`}
									control={control}
									render={({ field: renderField }) => (
										<SelectComponent
											value={renderField.value}
											onChange={renderField.onChange}
											options={field.options}
											placeholder={field.placeholder}
										/>
									)}
								/>
								{
									// @ts-ignore: The type exist dynamic in mount component
									errors.props?.label && <p>{errors.props.label.message}</p>
								}
							</div>
						);
					}
				})}
			</form>
		</BottomSheet>
	);
}
