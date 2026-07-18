import { MenuItem , Permission} from "@/types";

export function filterMenuItems(menuItems: MenuItem[], permissions: Permission[]): MenuItem[] {
    const filteredMenuItems: MenuItem[] = [];

    menuItems.forEach(menuItem => {
        if (menuItem.type === 'public') {
            filteredMenuItems.push(menuItem);
        } else {
            if (menuItem.dropdownItems) {
                const filteredDropdownItems = menuItem.dropdownItems.filter(dropDownItem => {
                    return permissions.some(permission => {
                        return permission.resource === dropDownItem.resource &&
                               (Array.isArray(dropDownItem.actions)
                                    ? dropDownItem.actions.some(action => permission.actions.includes(action))
                                    : permission.actions.includes(dropDownItem?.actions || ""));
                    });
                });
                if (filteredDropdownItems.length > 0) {
                    filteredMenuItems.push({
                        ...menuItem,
                        dropdownItems: filteredDropdownItems
                    });
                }
            } else {
                if (permissions.some(permission => {
                    return permission.resource === menuItem.resource &&
                           (Array.isArray(menuItem.actions)
                                ? menuItem.actions.some(action => permission.actions.includes(action))
                                : permission.actions.includes(menuItem?.actions || ""));
                })) {
                    filteredMenuItems.push(menuItem);
                }
            }
        }
    });

    return filteredMenuItems;
}



// const MenuItems = [
//     {
//         icon: '<Documentation />',
//         name: 'Documentation',
//         href: '#',
//         resource: 'documentation',
//         actions: 'documentation.read',
//         type: "public"
//     },
//     {
//         icon: '<Setting />',
//         name: 'Company Settings',
//         href: '#',
//         resource: 'company_settings',
//         dropdownItems: [
//             {
//                 name: 'Company Details',
//                 href: '/company-details',
//                 resource: 'company_details',
//                 actions: ['read']
//             },
//             {
//                 name: 'Team',
//                 href: '/team',
//                 resource: 'teams',
//            //     actions: ['create', 'read', 'update', 'delete']
//              actions: ['read']
//             },
//                {
//                 name: 'Team',
//                 href: '/team/create',
//                 resource: 'teams',
//            //     actions: ['create', 'read', 'update', 'delete']
//              actions: ['create']
//             },
//             {
//                 name: 'Billing',
//                 href: '/billing',
//                 resource: 'billing',
//                 actions: ['create', 'read', 'update', 'delete']
//             },
//         ]
//     },
// ];

// const permissions = [
//     {
//         "_id": "65fb0667be9d15d89f91c8e2",
//         "resource": "teams",
//         "actions": [
//             "create",
//             "read",
//             "update",
//             "delete"
//         ],
//         "id": "65fb0667be9d15d89f91c8e2"
//     },

// ]
