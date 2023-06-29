"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function SideNav() {

	return null
}


export function IconNav() {
	
	return null
}

export function SidebarNav({
	items,
}: {
	items: SidebarItemType[]
}) {
	const pathname = usePathname()

  return items.length > 0 && (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium hover:bg-primary/50">
            {item.title}
          </h4>
          {item.items ? (
            <SidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) 
}

interface SidebarNavItemsProps {
  items: SidebarItemType[]
  pathname: string | null
}

export function SidebarNavItems({
  items,
  pathname,
}: SidebarNavItemsProps) {
  return !items?.length && (
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
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60" key={index}>
            {item.title}
          </span>
        )
      )}
    </div>
  ) 
}