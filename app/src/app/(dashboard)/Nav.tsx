import { Icons } from "@/components/icons";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
type RouteType = {
	title: string;
	href: `/${string}`;
}[];

const sizeClassnames: Record<
	Exclude<ButtonProps["size"], null | undefined>,
	string
> = {
	lg: "py-2 px-6 text-sm rounded-lg",
	sm: "px-2 py-1 text-sm rounded-md",
	default: "px-1 text-sm rounded-sm",
};

const colorClassnames: Record<
	Exclude<ButtonProps["variant"], null | undefined | "link">,
	string
> = {
	default:
		"text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300",
	outline:
		"text-button bg-accent transition duration-200 ease-in-out hover:bg-accent-hover disabled:text-accent-disabled disabled:bg-accent-hover",
	secondary:
		"text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-300",
	ghost: "text-button bg-transparent",
	destructive:
		"text-button bg-secondary hover:bg-red-300 disabled:text-red-100 dark:hover:bg-red-700 dark:disabled:text-red-300",
};

interface SidebarItemProps extends ButtonProps {
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	transition?: boolean;
	variant?: "default" | "outline" | "ghost" | "secondary";
	loading?: boolean;
	disabled?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
	size = "lg",
	variant = "default",
	disabled,
	loading,
	Icon,
	transition,
	children,
	className = "",
	...props
}) => {
	return (
		<button
			disabled={disabled || loading}
			className={cn(
				"flex outline-none focus:ring-4 ",
				"focus:ring-" + variant,
				sizeClassnames[size!],
				colorClassnames[variant],
				"font-bold flex items-center justify-center",
				transition ? `transition duration-200 ease-in-out` : ``,
				className
			)}
			data-testid="button"
			{...props}
		>
			<span className={loading ? "opacity-0" : `flex items-center`}>
				{Icon ? (
					<Icon
						className={cn(
							size === "sm" ? "text-md" : "text-xl",
							children && size === "sm" ? "mr-6" : "mr-3",
							children ? "mr-2" : "ml-0"
						)}
					/>
				) : null}
				{/* {
          children ? (
            <span className="flex items-center">
              {children}
            </span>
          ) : null
        } */}
			</span>
			{loading ? (
				<span className={`absolute`}>
					<Icons.spinner className={size === "sm" ? "text-md" : "text-xl"} />
				</span>
			) : null}
		</button>
	);
};

export const SidebarGroup = ({
	title,
	items,
	className,
}: {
	title: string;
	items: React.ReactElement<SidebarItemProps>[];
	className?: string;
}) => {
	const [pinned, setPinned] = React.useState(false);
	const togglePinned = () => setPinned(!pinned);

	return (
		<div
			className={cn(
				"flex flex-col space-y-6 bg-primary-700 px-3 py-3 min-h-screen",
				className,
				!pinned ? "absolute top-0 left-0 h-full" : "relative"
			)}
		>
			{items.map((Item, i) => {
				return Item;
			})}
			{/* {!!children && children.length > 0
        ? children.map((Icon, _: number) => {
            return Icon;
          })
        : null} */}
		</div>
	);
};
