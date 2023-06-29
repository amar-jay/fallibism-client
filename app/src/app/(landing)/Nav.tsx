import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Nav as MainNav} from "@/components/ui/nav";
import Link from "next/link"
type RouteType = {
		title: string;
		href: `/${string}`;
}[];
const routes: RouteType = [
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
export const Nav = () => (
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routes} />
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
)

export default Nav