import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icons, cn } from "@/components";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./sidebar.module.css";

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
      }
    ]
  },
  {
    type: "link",
    title: "chat",
    description: "Chat with other users",
    icon: Icons.chat,
    href: "/chat",
  }
]

const SidebarMenuDemo = (
  // props: { items: React.ReactNode[] }
  collapsible = false
  ) => {
  return (
    <NavigationMenu.Root className={cn(
      styles.SidebarMenuRoot,
  )}>
      <NavigationMenu.List className={cn(
        styles.SidebarMenuList,
        "mr-1"
        )}>
          {
            sidebarItems.map((Item, index) => {
              return (
                <NavigationMenu.Item key={index}>
                <NavigationMenu.Trigger className={styles.SidebarMenuTrigger}>
                  {collapsible && Item.title ?
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
                  "text-md text-primary/40 px-3 py-5 w-[280px]"
                )}>
                  {Item.description}
                </NavigationMenu.Content>
                  </NavigationMenu.Item>
              ) 
            })
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
