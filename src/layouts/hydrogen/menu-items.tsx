import People from '@/components/moneyMuttImages/moneyMuttSideBar/people';
import ApiCommunity from '@/components/moneyMuttImages/moneyMuttSideBar/apiCommunity';
import Integration from '@/components/moneyMuttImages/moneyMuttSideBar/integration';
import Setting from '@/components/moneyMuttImages/moneyMuttSideBar/setting';
import Documentation from '@/components/moneyMuttImages/moneyMuttSideBar/documentation';
import { routes } from '@/config/routes';
import { MenuItem } from '@/types';
import {  TbDog, TbTagStarred} from "react-icons/tb";
import { LuBadgeDollarSign, LuLoader, LuPhone } from 'react-icons/lu';
import { RiHandCoinLine } from 'react-icons/ri';
import { BiBullseye } from "react-icons/bi";
import { FaUserPlus } from 'react-icons/fa';
import { MdOutlineLockOpen } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { GiDeadEye } from "react-icons/gi";
import { PiClipboardTextLight } from 'react-icons/pi';
import { IoBookOutline, IoWalletOutline } from 'react-icons/io5';
import { CgNotes } from "react-icons/cg";
import { HiOutlineDocumentText } from 'react-icons/hi2';




export const QuickMenuItems = [
   {
    icon: <CgNotes />,
    name: 'T&C',
    href: routes.jira.termAndCondition,
    resource: 'T&C',
    actions: 'T&C.read',
    type: "public"
  },
   {
    icon: <IoBookOutline />,
    name: 'FAQs',
    href: routes.jira.faqs,
    resource: 'FAQs',
    actions: 'FAQs.read',
    type: "public"
  },
   {
    icon: <HiOutlineDocumentText  />,
    name: 'About Us',
    href: routes.jira.aboutUs,
    resource: 'About_US',
    actions: 'About_US.read',
    type: "public"
  },

];





export const MenuItems: MenuItem[] = [
  {
    icon: <RxDashboard />,
    name: 'Dashboard ',
    href: routes.jira.dashBoard,
    resource: 'Dash_Board',
    actions: 'Dash_Board.read',
    type: "public"
  },
  {
    icon: <BiBullseye />,
    name: 'Dealing Slip',
    href: routes.jira.dealingSlip,
    resource: 'Dealing_Slip',
    actions: 'Dealing_Slip.read',
    type: "public"
  },
  {
    icon: <GiDeadEye  />,
    name: 'Start Journey',
    href: routes.jira.startJourney,
    resource: 'Start_Journey',
    actions: 'Start_Journey.read',
    type: "public"
  },
  {
    icon: <RiHandCoinLine />,
    name: 'Recharge',
    href: routes.jira.recharge,
    resource: 'Recharge',
    actions: 'Recharge.read',
    type: "public"
  },

  {
    icon: <FaUserPlus />,
    name: 'Invitation',
    href: routes.jira.invitation,
    resource: 'Invitation',
    actions: 'Invitation.read',
    type: "public"
  },
  {
    icon: <MdOutlineLockOpen  />,
    name: 'Security',
    href: routes.jira.security,
    resource: 'Security',
    actions: 'Security.read',
    type: "public"
  },
  {
  icon: <LuBadgeDollarSign  />,
  name: 'Withdraw',
  href: routes.jira.withdraw,
  resource: 'Withdraw',
  actions: 'Withdraw.read',
  type: "public"
},
  {
  icon: <IoWalletOutline  />,
  name: 'Wallet Info',
  href: routes.jira.walletInfo,
  resource: 'WalletInfo',
  actions: 'WalletInfo.read',
  type: "public"
},
  {
    icon: <LuPhone   />,
    name: 'Contact Us',
    href: routes.jira.contactUs,
    resource: 'Contact_Us',
    actions: 'Contact_Us.read',
    type: "public"
  },

  // {
  //   icon: <LuBadgeDollarSign  />,
  //   name: 'Withdraw',
  //   href: '#',
  //   resource: 'Ecosystem',
  //   dropdownItems: [
  //     {
  //       icon:<PiClipboardTextLight/>,
  //       name: 'Withdraw Amount',
  //       href: routes.jira.withdraw,
  //       resource: 'Governance',
  //     },
  //     {
  //       icon:<PiClipboardTextLight/>,
  //       name: 'Wallet Info',
  //       href: routes.jira.withdraw,
  //       resource: 'Governance',
  //     },
  //   ]
  // },
 
];



// let menuItems
// if (userRoles?.permissions) {
//   menuItems = filterMenuItems(MenuItems, userRoles?.permissions)
// }
// else if (user?.accountType == 'owner') {
//   menuItems = MenuItems
// }

// console.log(menuItems, 'menuItems');


// export { menuItems }


// const permissions = [
//   {
//     "_id": "65fb0667be9d15d89f91c8e2",
//     "resource": "billing",
//     "actions": [
//       "create",
//       "read",
//       "update",
//       "delete"
//     ],
//     "id": "65fb0667be9d15d89f91c8e2"
//   },

// ]


// let menuItems: any = []

// if (role === 'AdministratorRole') {

// } else {
//   menuItems = [
//     {
//       name: 'MANAGE',
//     },
//     {
//       icon: <People />,
//       name: 'Assistants',
//       href: '#',
//     },
//     {
//       icon: <Integration />,
//       name: 'Audiences',
//       href: routes.MoneyMutt.product,
//     },
//     {
//       icon: <Setting />,
//       name: 'Company Settings',
//       href: '#',
//       dropdownItems: [
//         {
//           name: 'Company Details',
//           href: routes.MoneyMutt.companyDetails,
//           badge: '',
//         },
//         {
//           name: 'Team ',
//           href: routes.MoneyMutt.team,
//         },
//         {
//           name: 'billing',
//           href: '/dashboard/profile-settings/billing',
//         },
//       ],
//     },
//     {
//       icon: <Documentation />,
//       name: 'Documentation',
//       href: '#',
//     },
//     {
//       icon: <ApiCommunity />,
//       name: 'API Community',
//       href: '#',
//     },
//   ];
// }


// export { menuItems }


// function filterMenuItems(menuItems, permissions) {
//   const filteredMenuItems = [];

//   // Iterate over each menu item
//   menuItems.forEach(menuItem => {
//     // If the menu item is public, add it directly to filteredMenuItems
//     if (menuItem.type === 'public') {
//       filteredMenuItems.push(menuItem);
//     } else {
//       // If the menu item is not public, check if the user has permission for it
//       if (menuItem.dropdownItems) {
//         // If the menu item has dropdown items, filter them based on permissions
//         const filteredDropdownItems = menuItem.dropdownItems.filter(dropDownItem => {
//           return permissions.some(permission => {
//             return permission.resource === dropDownItem.resource &&
//               permission.actions.includes(dropDownItem.actions[0]);
//           });
//         });
//         // Add the menu item to filteredMenuItems only if at least one dropdown item has permission
//         if (filteredDropdownItems.length > 0) {
//           filteredMenuItems.push({
//             ...menuItem,
//             dropdownItems: filteredDropdownItems
//           });
//         }
//       } else {
//         // If the menu item doesn't have dropdown items, check if the user has permission for it
//         if (permissions.some(permission => {
//           return permission.resource === menuItem.resource &&
//             permission.actions.includes(menuItem.actions);
//         })) {
//           filteredMenuItems.push(menuItem);
//         }
//       }
//     }
//   });

//   return filteredMenuItems;
// }


// const MenuItems = [
//   {
//     icon: '<Documentation />',
//     name: 'Documentation',
//     href: '#',
//     resource: 'documentation',
//     actions: 'documentation.read',
//     type: "public"
//   },
//   {
//     icon: '<Setting />',
//     name: 'Company Settings',
//     href: '#',
//     resource: 'company_settings',
//     dropdownItems: [
//       {
//         name: 'Company Details',
//         href: '/company-details',
//         resource: 'company_details',
//         actions: ['read']
//       },
//       {
//         name: 'Team',
//         href: '/team',
//         resource: 'teams',
//         //     actions: ['create', 'read', 'update', 'delete']
//         actions: ['read']
//       },
//       {
//         name: 'Team',
//         href: '/team/create',
//         resource: 'teams',
//         //     actions: ['create', 'read', 'update', 'delete']
//         actions: ['create']
//       },
//       {
//         name: 'Billing',
//         href: '/billing',
//         resource: 'billing',
//         actions: ['create', 'read', 'update', 'delete']
//       },
//     ]
//   },
// ];

// const permissions = [
//   {
//     "_id": "65fb0667be9d15d89f91c8e2",
//     "resource": "teams",
//     "actions": [
//       "create",
//       "read",
//       "update",
//       "delete"
//     ],
//     "id": "65fb0667be9d15d89f91c8e2"
//   },

// ]


// const filteredMenuItems = filterMenuItems(MenuItems, permissions);
// console.log(filteredMenuItems);
