import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {  cn, Icons, TooltipProvider, TooltipContent, TooltipTrigger} from "@/components";
import { buttonVariants } from "@/components";
import styles from "./sidebar.module.css";
import { Tooltip } from "@/components";

const sidebarItems = [
  {
    type: "item",
    title: "Profile",
    description: "Your profile details",
    icon: Icons.user,
    href: "/profile",
  },
  {
    type: "list",
    title: "Settings",
    description: "Change your profile details",
    icon: Icons.settings,
    href: "/settings",
    items: [
      {
        type: "item",
        title: "Profile",
        description: "Change your profile details",
        href: "/settings/profile",
      }
    ]
  },
  {
    type: "docs",
    title: "chat",
    description: "Chat with other users",
    icon: Icons.moon,
    href: "/chat",
  },
  {
    type: "link",
    title: "chat",
    description: "Chat with other users",
    icon: Icons.chat,
    href: "/chat",
  }
]

const SidebarMenuDemo: React.FC<{
  collapsible?: boolean;
  comprehensive?: boolean;
  className?: string;
}> = (
  // props: { items: React.ReactNode[] }
  {
  collapsible = false,
  comprehensive = true,
  className
  }
  ) => {
  return (
    <NavigationMenu.Root className={cn(
      styles.SidebarMenuRoot,
      className,
  )}>
      <NavigationMenu.List className={cn(
        styles.SidebarMenuList,
        "mr-1"
        )}>
          { comprehensive ?
            sidebarItems.map((Item, index) => {
              const items = Item?.items
              return (
                <NavigationMenu.Item key={index}>
                <NavigationMenu.Trigger className={styles.SidebarMenuTrigger}>
                  {(!collapsible && Item.title.length > 0) ?
                  <span className={styles.SidebarMenuTriggerText}>
                    {Item.title}
                  </span>
                  : null}
                  {
                    Item.icon ? <Item.icon className={styles.Icon} aria-hidden name="profile" />: null
                  }
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={cn(
                  styles.SidebarMenuContent,
                  "text-md text-primary/40 px-3 py-5 w-[280px] h-fit"
                )}>
                  {Item.type === "item" ? Item.description : null}
                  {Item.type === "link" ? Item.title : null}
                  {Item.type === "list" && items && items.length > 0 ? (
                    <ul className="grid grid-flow-row grid-cols-3">
                      {items.map((Item, index) => (
                        <ListItem
                        key={index}
                          title="Getting started"
                          href="/docs/primitives/overview/getting-started"
                        >
                          {Item.description}
                        </ListItem>
                      ))}
              </ul>
                
                  ): null
                  }
                </NavigationMenu.Content>
                  </NavigationMenu.Item>
              ) 
            }) : (
              <TooltipProvider>
              <Tooltip>
              <TooltipTrigger className={cn(buttonVariants({variant: "outline"}), styles.SidebarMenuTrigger)}>
                <Icons.add className={styles.Spinner} aria-hidden name="profile" />
              </TooltipTrigger>
              <TooltipContent sideOffset={4} className={cn()}>
                 <p>Add to library</p>
              </TooltipContent>
              <h1>ff</h1>
              </Tooltip> 
              </TooltipProvider>
            )

            }


        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.SidebarMenuTrigger}>
            <Icons.user className={styles.Icon} aria-hidden name="profile" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={cn(
            styles.SidebarMenuContent,
            "text-md text-primary/40 px-3 py-5 w-[280px]"
          )}>
            {/* grid layout with 3 columns */}
            <ul className="grid grid-flow-row grid-cols-3">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.SidebarMenuTrigger}>
            <Icons.settings className={cn(styles.Spinner)} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={cn(
            styles.SidebarMenuContent,
            "text-md text-primary/40 px-3 py-5 w-[280px]"
  )}>
                Beautiful, thought-out palettes with auto dark mode.
          </NavigationMenu.Content>
        </NavigationMenu.Item>


        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={styles.SidebarMenuLink}
            href="https://github.com/radix-ui"
          >
            <Icons.gitHub className={styles.Icon} aria-hidden />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={styles.SidebarMenuIndicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className={styles.SidebarMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  (
    {
      className,
      children,
      title,
      ...props
    }: {
      className?: string;
      children?: React.ReactNode;
      title?: string;
    } & DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    forwardedRef: React.LegacyRef<HTMLAnchorElement>
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={cn(styles.ListItemLink, className, "min-w-fit my-3")}
          {...props}
          ref={forwardedRef}
        >
          <div className={styles.ListItemHeading}>{title}</div>
          <p className={styles.ListItemText}>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default SidebarMenuDemo;
