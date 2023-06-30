
type RouteType = {
		title: string;
		href: `/${string}`;
}[];

type SidebarItemType = {
	title: string
	href: string
	disabled?: boolean
	icon?: React.Element<React.SVGProps<SVGSVGElement>>
	external?: boolean,
	items?: Omit<SidebarItemType, "items">[]
}

interface DashSidebarItemType extends SidebarItemType {
	icon?: React.FC<React.SVGProps<SVGSVGElement>>
}