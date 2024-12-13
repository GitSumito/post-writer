export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    x: string
    github: string
  }
}

export type MarketingConfig = {
  mainNav: NavItem[]
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: never
      items: NavItem[]
    }
)

export type DashboardConfig = {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}