import { Icons, Icon, cn } from "@/components";
import SidebarDemo from "./sidebar";
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
  sidebarItems?: DashSidebarItemType[];
}

export function DashboardLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container bg-slate-300 flex h-10 items-center space-x-4 sm:justify-between sm:space-x-0"></div>
      </header>
      <div className="relative w-full min-h-full flex items-center justify-center">
        <TooltipProvider>
          <aside className={
            cn(
          "h-full top-0 left-0 z-50 pt-10",
          "fixed"
            )
          }
          >
            <SidebarDemo 
            comprehensive={false}
            collapsible={true}
            />
          </aside>
        <div className={cn(
          "flex-1 min-h-full",
          "mt-10 ml-16")}>
            {/* <SidebarGroup title="dashboard" items={items} /> */}
            {/* // items={[]}  */}
            <h1>sidebar</h1>
            <h1
            className="text-center text-2xl font-bold text-slate-800"
            >sidebar</h1>
          {children}
        </div>
        </TooltipProvider>
      </div>
      {/* <SiteFooter className="border-t" /> */}
    </div>
  );
}
