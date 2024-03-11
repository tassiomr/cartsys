import * as React from "react";

import { cn } from "@/lib/utils";
import { InputTypes } from "@/types/input";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const placeholders = {
  [InputTypes.email]: "email@email.com",
  [InputTypes.password]: "password",
  [InputTypes.text]: "tap here",
  [InputTypes.phone]: "31 99999-9988",
  [InputTypes.date]: "MM/DD/YYYY",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    return (
      <div className="lex min-h-10 w-full flex flex-col gap-2">
        {label && <Label className="capitalize">{label}:</Label>}
        <input
          type={type}
          className={cn(
            " rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          placeholder={placeholder || placeholders[type! as InputTypes]}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
