import { Icons, Icon } from "@/components";
import SidebarDemo from "./layout/sidebar";
import { TooltipProvider } from "@radix-ui/react-tooltip";
// import { DocsSearch } from "@/components/search"

const navItems = [
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

interface DashSidebarItemType {
  title: string;
  href: string;
  icon: Icon;
}
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

export function DashboardLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container bg-slate-300 flex h-10 items-center space-x-4 sm:justify-between sm:space-x-0"></div>
      </header>
      <div className="flex-1">
        <TooltipProvider>
          <aside className="bg-green-400 fixed">
            {/* <SidebarGroup title="dashboard" items={items} /> */}
        	<SidebarDemo />
            <h1>sidebar</h1>
          </aside>
          {children}
        </TooltipProvider>
      </div>
      {/* <SiteFooter className="border-t" /> */}
    </div>
  );
}
