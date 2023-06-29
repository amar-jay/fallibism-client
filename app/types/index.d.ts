
type RouteType = {
		title: string;
		href: `/${string}`;
}[];

type SidebarItemType = {
	title: string
	href: string
	disabled?: boolean
	icon: React.ReactNode,
	external?: boolean,
	items?: Omit<SidebarItemType, "items">[]
}