"use client";
import { Icons } from "@/components/icons";
import { SidebarNav } from "~/components/sidebar";
import Link from "next/link";

import { siteConfig } from "~/site-config";
import { Nav as MainNav } from "~/components/nav";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SidebarGroup, SidebarItem } from "./Nav";
// import { DocsSearch } from "@/components/search"

const navItems: RouteType = [
	{
		title: "Features",
		href: "/#features",
	},
	{
		title: "Pricing",
		href: "/pricing",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "Documentation",
		href: "/docs",
	},
];

const sidebarItems: DashSidebarItemType[] = [
	{
		title: "Profile",
		href: "/profile",
		icon: Icons.user,
	},
	{
		title: "Settings",
		href: "/settings",
		icon: Icons.settings,
	},
	{
		title: "chat",
		href: "/chat",
		icon: Icons.chat,
	},
];
interface DocsLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: DocsLayoutProps) {
	const items = sidebarItems.map((item, i) => (
		<SidebarItem key={i} {...item} Icon={item.icon}>
			{item.title}
		</SidebarItem>
	));
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-40 w-full border-b bg-background">
				<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<MainNav items={navItems}>
						<SidebarNav items={sidebarItems} />
					</MainNav>
					<div className="flex flex-1 items-center space-x-4 sm:justify-end">
						<div className="flex-1 sm:grow-0">{/* <DocsSearch /> */}</div>
						<nav className="flex space-x-4">
							<Link
								href={siteConfig.github.url}
								target="_blank"
								rel="noreferrer"
							>
								<Icons.user className="h-7 w-7" />
								<span className="sr-only">Login</span>
							</Link>
						</nav>
					</div>
				</div>
			</header>
			<div className="container flex-1">
				<TooltipProvider>
					<div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
						<aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
							<SidebarGroup title="dashboard" items={items} />
						</aside>
						{children}
					</div>
				</TooltipProvider>
			</div>
			{/* <SiteFooter className="border-t" /> */}
		</div>
	);
}
