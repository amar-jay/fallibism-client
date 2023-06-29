import { Icons } from "@/components/icons";
import { SidebarNav  } from "@/components/ui/sidebar";
import Link from "next/link"

import { siteConfig } from "@/site-config"
import { Nav as MainNav} from "@/components/ui/nav";
// import { DocsSearch } from "@/components/search"
import { SiteFooter } from "@/components/ui/footer"

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

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={navItems}>
            <SidebarNav items={sidebarItems} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              {/* <DocsSearch /> */}
			  <p>Search</p>
            </div>
            <nav className="flex space-x-4">
              <Link
                href={siteConfig.github.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  )
}