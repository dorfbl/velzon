import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'las la-tachometer-alt',
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.DASHBOARD.LIST.MORTGAGE',
        link: '/',
        parentId: 2
      },
      {
        id: 4,
        label: 'MENUITEMS.DASHBOARD.LIST.PROPERTY_TAX',
        link: '/',
        parentId: 2
      },

    ]
  },
  {
    id: 5,
    label: 'MENUITEMS.CUSTOM.LIST.ADMINISTRATION',
    icon: 'las la-user-shield',
    subItems: [
      {
        id: 6,
        label: 'MENUITEMS.CUSTOM.LIST.USERS',
        link: '/starter',
        parentId: 5
      }
    ]
  },
];
