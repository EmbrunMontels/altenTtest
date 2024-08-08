import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Products',
    icon: 'shopping-cart',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: '/products'

  },
  {
    id: 'Admin',
    icon: 'cog',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: '/admin/products'

  }

];
