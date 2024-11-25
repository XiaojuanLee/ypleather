type NavLink = {
    href: string;
    label: string;
  };
  
type LeatherClassesLink = {
    href: string;
    label: string;
  };

  export const links: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/classes ', label: 'Leather Classes' },
    { href: '/contact ', label: 'Contact' },
  ];

  export const leatherClassesLink: LeatherClassesLink[] = [
    { href: '/beginner', label: 'Beginner'},
    { href: '/intermediate', label: 'Intermediate'},
    { href: '/Advanced', label: 'Advanced'}
  ]