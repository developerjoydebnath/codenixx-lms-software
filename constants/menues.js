import {
    IconAccessPoint,
    IconArrowsDoubleNeSw,
    IconCash,
    IconGift,
    IconKey,
    IconLayoutDashboard,
    IconMap2,
    IconMapPin,
    IconMoonStars,
    IconSettingsCog,
    IconUser,
    IconUserScan,
    IconUserShield,
    IconUsers,
    IconUsersGroup,
    IconWifi,
} from "@tabler/icons-react";

export const corporatePermissionList = {
    agent: [
        {
            key_name: "agent_view",
            name: "view",
            group_name: "agent",
        },
        {
            key_name: "agent_create",
            name: "create",
            group_name: "agent",
        },
        {
            key_name: "agent_update",
            name: "update",
            group_name: "agent",
        },
        {
            key_name: "agent_delete",
            name: "delete",
            group_name: "agent",
        },
    ],
    sub_agent: [
        {
            key_name: "sub_agent_view",
            name: "view",
            group_name: "sub_agent",
        },
        {
            key_name: "sub_agent_create",
            name: "create",
            group_name: "sub_agent",
        },
        {
            key_name: "sub_agent_update",
            name: "update",
            group_name: "sub_agent",
        },
        {
            key_name: "sub_agent_delete",
            name: "delete",
            group_name: "sub_agent",
        },
    ],
    broadband: [
        {
            key_name: "broadband_view",
            name: "view",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_create",
            name: "create",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_update",
            name: "update",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_delete",
            name: "delete",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_enable_disable",
            name: "enable disable",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_disable_all",
            name: "disable all user",
            group_name: "broadband",
        },
    ],
    wifi: [
        {
            key_name: "wifi_view",
            name: "view",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_create",
            name: "create",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_update",
            name: "update",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_delete",
            name: "delete",
            group_name: "wifi",
        },
    ],
    package: [
        {
            key_name: "broadband_package_view",
            name: "broadband view",
            group_name: "package",
        },
        {
            key_name: "wifi_package_view",
            name: "wifi view",
            group_name: "package",
        },
        {
            key_name: "broadband_package_create",
            name: "broadband pkg create",
            group_name: "package",
        },
        {
            key_name: "wifi_package_create",
            name: "wifi pkg create",
            group_name: "package",
        },
        {
            key_name: "broadband_package_update",
            name: "broadband pkg update",
            group_name: "package",
        },
        {
            key_name: "wifi_package_update",
            name: "wifi pkg update",
            group_name: "package",
        },
        {
            key_name: "broadband_package_delete",
            name: "broadband pkg delete",
            group_name: "package",
        },
        {
            key_name: "wifi_package_delete",
            name: "wifi pkg delete",
            group_name: "package",
        },
        {
            key_name: "broadband_package_enable_disable",
            name: "broadband pkg status change",
            group_name: "package",
        },
        {
            key_name: "wifi_package_enable_disable",
            name: "wifi pkg status change",
            group_name: "package",
        },
    ],
    transaction: [
        {
            key_name: "transaction_view",
            name: "view",
            group_name: "wifi",
        },
    ],
    statement: [
        {
            key_name: "corporate_statement_view",
            name: "view",
            group_name: "wifi",
        },
    ],
    settings: [
        {
            key_name: "settings_view",
            name: "view",
            group_name: "settings",
        },
    ],
};

export const agentPermissionList = {
    sub_agent: [
        {
            key_name: "sub_agent_view",
            name: "view",
            group_name: "sub_agent",
        },
        {
            key_name: "sub_agent_create",
            name: "create",
            group_name: "sub_agent",
        },
        {
            key_name: "sub_agent_update",
            name: "update",
            group_name: "sub_agent",
        },
        {
            key_name: "sub_agent_delete",
            name: "delete",
            group_name: "sub_agent",
        },
    ],
    broadband: [
        {
            key_name: "broadband_view",
            name: "view",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_create",
            name: "create",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_update",
            name: "update",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_delete",
            name: "delete",
            group_name: "broadband",
        },
    ],
    wifi: [
        {
            key_name: "wifi_view",
            name: "view",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_create",
            name: "create",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_update",
            name: "update",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_delete",
            name: "delete",
            group_name: "wifi",
        },
    ],
    package: [
        {
            key_name: "broadband_package_view",
            name: "broadband view",
            group_name: "package",
        },
        {
            key_name: "wifi_package_view",
            name: "wifi view",
            group_name: "package",
        },
    ],
    transaction: [
        {
            key_name: "transaction_view",
            name: "view",
            group_name: "wifi",
        },
    ],
    statement: [
        {
            key_name: "corporate_statement_view",
            name: "view",
            group_name: "wifi",
        },
    ],
};

export const subAgentPermissionList = {
    broadband: [
        {
            key_name: "broadband_view",
            name: "view",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_create",
            name: "create",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_update",
            name: "update",
            group_name: "broadband",
        },
        {
            key_name: "broadband_user_delete",
            name: "delete",
            group_name: "broadband",
        },
    ],
    wifi: [
        {
            key_name: "wifi_view",
            name: "view",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_create",
            name: "create",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_update",
            name: "update",
            group_name: "wifi",
        },
        {
            key_name: "wifi_user_delete",
            name: "delete",
            group_name: "wifi",
        },
    ],
    package: [
        {
            key_name: "broadband_package_view",
            name: "broadband view",
            group_name: "package",
        },
        {
            key_name: "wifi_package_view",
            name: "wifi view",
            group_name: "package",
        },
    ],
    transaction: [
        {
            key_name: "transaction_view",
            name: "view",
            group_name: "wifi",
        },
    ],
    statement: [
        {
            key_name: "corporate_statement_view",
            name: "view",
            group_name: "wifi",
        },
    ],
};

export const Menus = () => [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: () => <IconLayoutDashboard size={24} stroke={1.5} />,
        requirePermissions: [],
    },
    {
        id: 30,
        name: "Broadband",
        path: "/broadband-users",
        requirePermissions: ["broadband_view"],
        icon: () => <IconAccessPoint size={24} stroke={1.5} />,
        // subMenu: [
        //     {
        //         id: 1,
        //         name: "User List",
        //         path: "/broadband-users",
        //         icon: () => <IconUsers size={24} stroke={1.5} />,
        //         requirePermissions: ["broadband_view"],
        //     },
        // ],
    },
    {
        id: 31,
        name: "Wifi",
        path: "/wifi-users",
        requirePermissions: ["wifi_view"],
        icon: () => <IconWifi size={24} stroke={1.5} />,
        // subMenu: [
        //     {
        //         id: 1,
        //         name: "User List",
        //         path: "/wifi-users",
        //         icon: () => <IconUsers size={24} stroke={1.5} />,
        //         requirePermissions: ["wifi_view"],
        //     },
        // ],
    },
    // {
    //     id: 32,
    //     name: "Agent",
    //     path: "/sub-agents",
    //     requirePermissions: ["corporate", "agent", "agent_view"],
    //     icon: () => <IconUserScan size={24} stroke={1.5} />,
    //     subMenu: [
    //         {
    //             id: 1,
    //             name: "Agent List",
    //             path: "/agents",
    //             icon: () => <IconClipboardList size={24} stroke={1.5} />,
    //             requirePermissions: ["corporate", "agent_view"],
    //         },
    //         {
    //             id: 2,
    //             name: "Sub Agent List",
    //             path: "/sub-agents",
    //             icon: () => <IconClipboardList size={24} stroke={1.5} />,
    //             requirePermissions: ["corporate", "agent", "sub_agent_view"],
    //         },
    //     ],
    // },
    {
        id: 36,
        name: "Agents",
        path: "/agents",
        requirePermissions: ["corporate", "agent", "agent_view"],
        icon: () => <IconUserScan size={24} stroke={1.5} />,
    },
    {
        id: 37,
        name: "Sub Agents",
        path: "/sub-agents",
        requirePermissions: ["corporate", "agent", "agent_view"],
        icon: () => <IconUserScan size={24} stroke={1.5} />,
    },
    {
        id: 7,
        name: "Employees",
        path: "/employees",
        requirePermissions: ["employee_view"],
        icon: () => <IconUsers size={24} stroke={1.5} />,
    },
    {
        id: 33,
        name: "Packages",
        path: "/packages",
        icon: () => <IconGift size={24} stroke={1.5} />,
        requirePermissions: ["package_view", "broadband_package_view", "wifi_package_view"],
        subMenu: [
            {
                id: 1,
                name: "Broadband",
                path: "/packages/broadband-package-list",
                icon: () => <IconAccessPoint size={24} stroke={1.5} />,
                requirePermissions: ["broadband_package_view"],
            },
            {
                id: 2,
                name: "Wifi/Hotspot",
                path: "/packages/wifi-package-list",
                icon: () => <IconWifi size={24} stroke={1.5} />,
                requirePermissions: ["wifi_package_view"],
            },
        ],
    },

    {
        id: 35,
        name: "Bill Info",
        path: "/bill-info",
        requirePermissions: ["corporate", "agent", "sub_agent", "corporate_statement_view"],
        icon: () => <IconCash size={24} stroke={1.5} />,
    },
    {
        id: 34,
        name: "Transaction History",
        path: "/transaction-history",
        icon: () => <IconArrowsDoubleNeSw size={24} stroke={1.5} />,
        requirePermissions: ["transaction_view"],
    },
    {
        id: 28,
        name: "Permissions",
        path: "/permissions",
        requirePermissions: ["permission_view"],
        icon: () => <IconUserShield size={24} stroke={1.5} />,
    },
    {
        id: 10,
        name: "Locations",
        path: "/locations",
        requirePermissions: ["location_view"],
        icon: () => <IconMapPin size={24} stroke={1.5} />,
    },
    {
        id: 12,
        name: "Maps",
        path: "/maps",
        requirePermissions: ["map_view"],
        icon: () => <IconMap2 size={24} stroke={1.5} />,
    },
    {
        id: 8,
        name: "Users",
        path: "/users",
        requirePermissions: ["user_view"],
        icon: () => <IconUsersGroup size={24} stroke={1.5} />,
    },

    // {
    //     id: 2,
    //     name: "Internet Users",
    //     path: "/internet-users",
    //     requirePermissions: ["internet_user_view"],
    //     icon: () => <IconWorld size={24} stroke={1.5} />,
    // },
    // {
    //     id: 3,
    //     name: "Support Centers",
    //     path: "/support-centers",
    //     requirePermissions: ["support_center_view"],
    //     icon: () => <IconHeadset size={24} stroke={1.5} />,
    // },
    // {
    //     id: 4,
    //     name: "Sales Points",
    //     path: "/sales-points",
    //     requirePermissions: ["sales_point_view"],
    //     icon: () => <IconBuildingStore size={24} stroke={1.5} />,
    // },
    // {
    //     id: 5,
    //     name: "Sales Agents",
    //     path: "/sales-agents",
    //     requirePermissions: ["sales_agent_view"],
    //     icon: () => <IconUserScan size={24} stroke={1.5} />,
    // },
    // {
    //     id: 27,
    //     name: "ISP Business",
    //     path: "/isp-business",
    //     requirePermissions: ["isp_business_view"],
    //     icon: () => <IconBriefcase size={24} stroke={1.5} />,
    // },
    // {
    //     id: 6,
    //     name: "Career",
    //     path: "/career",
    //     requirePermissions: ["career_view"],
    //     icon: () => <IconStairsUp size={24} stroke={1.5} />,
    // },

    // {
    //     id: 9,
    //     name: "Payments",
    //     path: "/payments",
    //     requirePermissions: ["payment_view"],
    //     icon: () => <IconCreditCard size={24} stroke={1.5} />,
    // },

    // {
    //     id: 11,
    //     name: "Transmission",
    //     path: "/transmission",
    //     requirePermissions: ["transmission_view", "distance_calculate", "find_users"],
    //     icon: () => <IconBuildingBroadcastTower size={24} stroke={1.5} />,
    //     subMenu: [
    //         {
    //             id: 1,
    //             name: "Dashboard",
    //             path: "/transmission",
    //             requirePermissions: ["transmission_view"],
    //             icon: () => <IconBuildingBroadcastTower size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view"],
    //         },
    //         {
    //             id: 2,
    //             name: "Companies",
    //             path: "/transmission/companies",
    //             icon: () => <IconHeartHandshake size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "distance_calculate"],
    //         },
    //         // {
    //         //     id: 2,
    //         //     name: 'Distance Calculation',
    //         //     path: '/transmission/calculate-distance',
    //         //     icon: () => <IconMapPins size={24} stroke={1.5} />,
    //         //     requirePermissions: ['transmission_view', 'distance_calculate'],
    //         // },
    //         {
    //             id: 3,
    //             name: "NTTN POPs",
    //             path: "/transmission/nttn-pops",
    //             icon: () => <IconCloudComputing size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 4,
    //             name: "Branch POPs",
    //             path: "/transmission/find-users",
    //             icon: () => <IconTournament size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 5,
    //             name: "All TJ-Box",
    //             path: "/transmission/find-users",
    //             icon: () => <IconServer size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 6,
    //             name: "Backbone TJ-Box",
    //             path: "/transmission/find-users",
    //             icon: () => <IconCirclesRelation size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 7,
    //             name: "Joining TJ-Box",
    //             path: "/transmission/find-users",
    //             icon: () => <IconPlugConnected size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 8,
    //             name: "Distribution TJ-Box",
    //             path: "/transmission/find-users",
    //             icon: () => <IconAffiliate size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 9,
    //             name: "Customer TJ-Box",
    //             path: "/transmission/find-users",
    //             icon: () => <IconUserScreen size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 10,
    //             name: "All Loops",
    //             path: "/transmission/find-users",
    //             icon: () => <IconInfinity size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 11,
    //             name: "Reserved Loops",
    //             path: "/transmission/find-users",
    //             icon: () => <IconBrandLoom size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 12,
    //             name: "Distribution Loops",
    //             path: "/transmission/find-users",
    //             icon: () => <IconArrowLoopRight size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 13,
    //             name: "Customers",
    //             path: "/transmission/find-users",
    //             icon: () => <IconUsersGroup size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         {
    //             id: 14,
    //             name: "Transmission Maps",
    //             path: "/transmission/find-users",
    //             icon: () => <IconMapPin size={24} stroke={1.5} />,
    //             requirePermissions: ["transmission_view", "find_users"],
    //         },
    //         // {
    //         //     id: 15,
    //         //     name: 'Find Users',
    //         //     path: '/transmission/find-users',
    //         //     icon: () => <IconUserSearch size={24} stroke={1.5} />,
    //         //     requirePermissions: ['transmission_view', 'find_users'],
    //         // },
    //         // {
    //         //     id: 16,
    //         //     name: 'Find Users',
    //         //     path: '/transmission/find-users',
    //         //     icon: () => <IconUserSearch size={24} stroke={1.5} />,
    //         //     requirePermissions: ['transmission_view', 'find_users'],
    //         // },
    //     ],
    // },

    // {
    //     id: 26,
    //     name: "Search OTP",
    //     path: "/search-otp",
    //     requirePermissions: ["otp_view"],
    //     icon: () => <IconDeviceMobileSearch size={24} stroke={1.5} />,
    // },
    // {
    //     id: 29,
    //     name: "Branch List",
    //     path: "/branch-list",
    //     requirePermissions: ["branch_view"],
    //     icon: () => <IconSitemap size={24} stroke={1.5} />,
    // },
    // {
    //     id: 36,
    //     name: "Unpaid Users Finder",
    //     path: "/find-mismatched",
    //     requirePermissions: ["branch_view"],
    //     icon: () => <IconUserSearch size={24} stroke={1.5} />,
    // },

    // {
    //     id: 13,
    //     name: 'SDT / Zone',
    //     path: '/sdt-zone',
    //     requirePermissions: ['sdt_zone_view', 'branch_view'],
    //     icon: () => <IconMapPin size={24} stroke={1.5} />,
    //     subMenu: [
    //         {
    //             id: 1,
    //             name: 'Create Zone',
    //             path: '/sdt-zone/create-zone',
    //             icon: () => <IconMapPinPlus size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 2,
    //             name: 'Zone List',
    //             path: '/sdt-zone/zone-list',
    //             icon: () => <IconClipboardList size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 3,
    //             name: 'Customer Payments',
    //             path: '/sdt-zone/customer-payments',
    //             icon: () => <IconReceipt2 size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 4,
    //             name: 'Payments',
    //             path: '/sdt-zone/payments',
    //             icon: () => <IconReceipt2 size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 5,
    //             name: 'Zone Cust Summary',
    //             path: '/sdt-zone/zone-customer-summary',
    //             icon: () => <IconChartBar size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 6,
    //             name: 'Zone Coll Summary',
    //             path: '/sdt-zone/zone-collection-summary',
    //             icon: () => <IconChartBar size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 7,
    //             name: 'SDT Coll Summary',
    //             path: '/sdt-zone/sdt-collection-summary',
    //             icon: () => <IconChartBar size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //         {
    //             id: 8,
    //             name: 'SDT Rates',
    //             path: '/sdt-zone/sdt-rates',
    //             icon: () => <IconCurrencyDollar size={24} stroke={1.5} />,
    //             requirePermissions: ['sdt_zone_view', 'branch_view'],
    //         },
    //     ],
    // },
    // {
    //     id: 14,
    //     name: 'Home / Soho',
    //     path: '/home-soho',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconHome size={24} stroke={1.5} />,
    // },
    // {
    //     id: 15,
    //     name: 'Corporate',
    //     path: '/corporate',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconBriefcase size={24} stroke={1.5} />,
    // },
    // {
    //     id: 16,
    //     name: 'Hotspot',
    //     path: '/hotspot',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconBroadcast size={24} stroke={1.5} />,
    // },
    // {
    //     id: 17,
    //     name: 'Tickets',
    //     path: '/tickets',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconTicket size={24} stroke={1.5} />,
    // },
    // {
    //     id: 18,
    //     name: 'SMS',
    //     path: '/sms',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconDeviceMobileMessage size={24} stroke={1.5} />,
    // },
    // {
    //     id: 19,
    //     name: 'Accounts',
    //     path: '/accounts',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconBuildingBank size={24} stroke={1.5} />,
    // },
    // {
    //     id: 20,
    //     name: 'Users',
    //     path: '/users',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconUsersGroup size={24} stroke={1.5} />,
    // },
    // {
    //     id: 21,
    //     name: 'Reports',
    //     path: '/reports',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconReport size={24} stroke={1.5} />,
    // },
    // {
    //     id: 22,
    //     name: 'Vendor',
    //     path: '/vendor',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconBuildingStore size={24} stroke={1.5} />,
    // },
    // {
    //     id: 23,
    //     name: 'FTTH',
    //     path: '/ftth',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconAffiliate size={24} stroke={1.5} />,
    // },
    // {
    //     id: 24,
    //     name: 'Mail',
    //     path: '/mail',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconMail size={24} stroke={1.5} />,
    // },
    // {
    //     id: 25,
    //     name: 'Settings',
    //     path: '/settings',
    //     requirePermissions: ['map_view'],
    //     icon: () => <IconSettings size={24} stroke={1.5} />,
    // },
];

export const settingsMenus = [
    {
        id: 1,
        name: "Account",
        path: "/settings/account",
        requirePermissions: ["settings_view"],
        icon: () => <IconUser size={24} stroke={1.5} />,
    },
    {
        id: 2,
        name: "Change Password",
        path: "/settings/reset-password",
        requirePermissions: ["settings_view"],
        icon: () => <IconKey size={24} stroke={1.5} />,
    },
    {
        id: 3,
        name: "Appearance",
        path: "/settings/appearance",
        requirePermissions: ["settings_view"],
        icon: () => <IconMoonStars size={24} stroke={1.5} />,
    },
    {
        id: 4,
        name: "Customize Setting",
        path: "/settings/customize-setting",
        requirePermissions: ["settings_view"],
        icon: () => <IconSettingsCog size={24} stroke={1.5} />,
    },
];
