import * as React from "react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type SelectComponentProps = {
	options: { value: string; label: string }[];
	onChange: (e: string) => void;
	placeholder: string;
	value: string;
};

export function SelectComponent({
	options,
	placeholder,
	onChange,
	value,
}: SelectComponentProps) {
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className="min-w-[180px] w-full">
				<SelectValue defaultValue={value} placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options.map((option) => {
						return (
							<SelectItem className="capitalize" value={option.value}>
								{option.label}
							</SelectItem>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
