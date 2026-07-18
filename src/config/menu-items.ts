import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa';

export interface MenuItem {
  name: string;
  href: string;
  icon?: IconType;
  dropdownItems?: {
    name: string;
    href: string;
  }[];
}

export const menuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About Us',
    href: '#about',
    dropdownItems: [
      {
        name: 'Our Story',
        href: '#about/story'
      },
      {
        name: 'Our Team',
        href: '#about/team'
      }
    ]
  },
  {
    name: 'Tokenomics',
    href: '#services',
    dropdownItems: [
      {
        name: 'Token Distribution',
        href: '#services/distribution'
      },
      {
        name: 'Economics',
        href: '#services/economics'
      }
    ]
  },
  {
    name: 'Whitepaper',
    href: '#portfolio'
  },
  {
    name: 'Mutt Map',
    href: '#pricing'
  },
  {
    name: 'Rewards',
    href: '#blog',
    dropdownItems: [
      {
        name: 'Staking',
        href: '#blog/staking'
      },
      {
        name: 'Referrals',
        href: '#blog/referrals'
      }
    ]
  },
  {
    name: 'Contact Us',
    href: '#contact'
  }
];