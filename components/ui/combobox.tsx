"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Typography } from "../Typography";

interface ComboboxProps {
  elements: { value: string; label: string; image: string | null }[];
}

interface ImageDisplayProps {
  element: { value: string; label: string; image: string | null };
}

const ElementDisplay = ({ element }: ImageDisplayProps) => {
  return (
    <div className="flex gap-1 justify-center items-center desktop-4k:gap-3">
      {element.image ? (
        <Image
          src={element.image}
          width={24}
          height={24}
          alt={element.label + " image"}
          className="rounded-full w-6 h-6 desktop-4k:w-10 desktop-4k:h-10"
        />
      ) : (
        <div className="rounded-full bg-sky-400 w-6 h-6 desktop-4k:w-10 desktop-4k:h-10" />
      )}
      <Typography className="w-36 desktop-md:text-md desktop-md:w-52 desktop-4k:text-xl">
        {element.label}
      </Typography>
    </div>
  );
};

const CommandListItems = ({
  elements,
  value,
  onSelect,
}: {
  elements: { value: string; label: string; image: string | null }[];
  value: string;
  onSelect: (value: string) => void;
}) => {
  return (
    <>
      {elements.map((element) => (
        <CommandItem
          key={element.value}
          className="flex gap-2"
          value={element.value}
          onSelect={(currentValue) => {
            onSelect(currentValue === value ? "" : currentValue);
          }}
        >
          <Check
            className={cn(
              "h-4 w-4",
              value === element.value ? "opacity-100" : "opacity-0"
            )}
          />
          <ElementDisplay element={element} />
        </CommandItem>
      ))}
    </>
  );
};

export function Combobox({ elements }: ComboboxProps) {
  const { user } = useUser();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(
    user?.firstName + " " + user?.lastName || ""
  );

  if (!user) return <>Loading...</>;

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
    setOpen(false);
  };

  const userElement = {
    value: `${user.firstName} ${user.lastName}`,
    label: `${user.firstName} ${user.lastName}`,
    image: user.imageUrl,
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="flex items-center">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex px-2 truncate items-center justify-between w-[216px] laptop-sm:w-[340px] laptop-sm:gap-4 laptop-sm:justify-normal laptop-md:justify-between desktop-md:w-[400px] desktop-4k:w-[444px] desktop-4k:h-14"
        >
          {value ? (
            <ElementDisplay
              element={
                elements.find((element) => element.value === value) ||
                userElement
              }
            />
          ) : (
            <ElementDisplay element={userElement} />
          )}
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col p-0 gap-4 w-[248px] desktop-md:w-[312px] desktop-4k:w-[366px]">
        <Command>
          <CommandInput
            placeholder="Search team..."
            className="desktop-md:placeholder:text-md desktop-md:text-md desktop-4k:placeholder:text-2xl desktop-4k:text-2xl"
          />

          <CommandList>
            <CommandListItems
              elements={[userElement]}
              value={value}
              onSelect={handleSelect}
            />
          </CommandList>

          <CommandList>
            <CommandListItems
              elements={elements.filter(
                (element) =>
                  element.label !== user.firstName + " " + user.lastName
              )}
              value={value}
              onSelect={handleSelect}
            />
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
