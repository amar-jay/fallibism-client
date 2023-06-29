import { Icons } from "@/components/icons";
import { SidebarNav } from "@/components/ui/sidebar";

const sidebarItems: SidebarItemType[] = [
	{
		title: "Profile",
		href: "/profile",
		icon: <Icons.user />,
	},
	{
		title: "Settings",
		href: "/settings",
		icon: <Icons.settings />,
	},
]
export default function ChatPage({ children }: { children: React.ReactNode }) {
	return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
        <SidebarNav items={sidebarItems} />
      </aside>
      {children}
    </div>
	)
}