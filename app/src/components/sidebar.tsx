"use client";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function SideNav() {
	return null;
}

export function IconNav() {
	return null;
}

export function SidebarNav({ items }: { items: SidebarItemType[] }) {
	const pathname = usePathname();

	return (
		items.length > 0 && (
			<div className="w-full">
				{items.map(({ icon: Icon, ...item }, index) => {
					return (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<div className="pb-8">
									<div className="flex flex-row gap-1 items-center hover:bg-primary/10 cursor-pointer px-3 rounded-md">
										<p className="mr-2 h-4 w-4">{Icon}</p>
										<h4 className="rounded-md text-sm font-medium">
											{item.title}
										</h4>
									</div>
									{item.items ? (
										<SidebarNavItems items={item.items} pathname={pathname} />
									) : null}
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>{item.title}</p>
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
		)
	);
}

interface SidebarNavItemsProps {
	items: SidebarItemType[];
	pathname: string | null;
}

export function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
	return (
		!items?.length && (
			<div className="grid grid-flow-row auto-rows-max text-sm">
				{items.map((item, index) =>
					!item.disabled && item.href ? (
						<Link
							key={index}
							href={item.href}
							className={cn(
								"flex w-full items-center rounded-md p-2 hover:underline",
								{
									"bg-muted": pathname === item.href,
								}
							)}
							target={item.external ? "_blank" : ""}
							rel={item.external ? "noreferrer" : ""}
						>
							{item.title}
						</Link>
					) : (
						<span
							className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
							key={index}
						>
							{item.title}
						</span>
					)
				)}
			</div>
		)
	);
}
