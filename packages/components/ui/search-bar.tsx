import clsx from "clsx";
import React from "react";
import { Icons } from "../icons";
import { Input, InputProps } from "./input";

export interface SearchBarProps extends InputProps {
  inputClassName?: string;
  device?: "mobile" | "desktop";
  isLoading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = "",
  inputClassName = "",
  placeholder,
  isLoading = false,
  device = "desktop",
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const mobile = device === "mobile";
  return (
    <div
      className={clsx(
        "items-center flex w-full bg-primary-700 text-primary-300 transition duration-200 ease-in-out focus-within:text-primary-100 rounded-lg",
        mobile ? "w-fit hover:text-primary-100" : "w-full",
        !mobile ? "cursor-pointer px-1 py-2 my-2" : "cursor-text my-2 py-2",
        className
      )}
    >
      <Icons.search
        className={clsx(
          "text-gray-100 h-full mx-4 flex items-center",
          mobile && "cursor-pointer"
        )}
        onClick={() => mobile && setOpen(!open)}
      />
      {!mobile && (
        <Input
          placeholder={placeholder}
          data-testid="searchbar"
          className={`${inputClassName} pl-0`}
          {...props}
        />
      )}

      {isLoading && (
        <div
          className={`h-full flex items-center pointer-events-none ${
            !mobile && "mx-4"
          }`}
        >
          <Icons.spinner />
        </div>
      )}
    </div>
  );
};
