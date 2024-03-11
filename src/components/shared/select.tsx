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

const parseString = (
  value: string | { value: string; label: string }[]
): { value: string; label: string }[] => {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    return value.split(";").map((item) => ({
      label: item,
      value: item,
    }));
  }

  return [];
};

export const SelectComponent = React.forwardRef<
  HTMLSelectElement,
  SelectComponentProps
>((props, ref) => {
  const { options, placeholder, onChange, value } = props;

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="min-w-[180px] w-full">
        <SelectValue ref={ref} defaultValue={value} placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {parseString(options).map((option) => {
            return (
              <SelectItem
                key={option.value}
                className="capitalize"
                value={option.value}
              >
                {option.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
