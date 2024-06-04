"use client";

import { useState } from "react";
import { Input as UIInput } from "../ui/input";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/collections";

interface InputProps {
  name: string;
  placeholder?: string;
  className?: string;
}

export const Input = ({ name, className, placeholder }: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const resetInput = (_e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
    setValue("");

  return (
    <>
      <label htmlFor={name} className="sr-only" />
      <div className="relative">
        <UIInput
          onChange={handleChange}
          name={name}
          value={value}
          className={cn("pr-7", className)}
          placeholder={placeholder}
        />
        {value && (
          <CloseIcon
            className="absolute size-5 mr-2 top-1/2 right-0 transform -translate-y-1/2"
            onClick={resetInput}
          />
        )}
      </div>
    </>
  );
};
