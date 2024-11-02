type NavItem = {
  href: string;
  label: string;
};

export const navigationItems: { [key: string]: NavItem } = {
  home: {
    href: '/',
    label: 'Inicio',
  },
  onlineAppointments: {
    href: '/booking/user-info',
    label: 'Citas',
  },
  // services: {
  //   href: '/plans',
  //   label: 'Servicios',
  // },
  about: {
    href: '/about',
    label: 'Conóceme',
  },
  login: {
    href: '/login',
    label: 'Login',
  },
};
