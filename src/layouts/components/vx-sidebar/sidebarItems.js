export default [
    {
        url: null,
        name: "Dashboard",
        slug: "dashboard",
        icon: "HomeIcon",
        i18n: "Dashboard",
        submenu: [
            {
                url: '/dashboard/analytics',
                name: "Analytics",
                slug: "dashboardAnalytics",
                i18n: "Analytics",
            },
            {
                url: '/dashboard/ecommerce',
                name: "eCommerce",
                slug: "dashboardECommerce",
                i18n: "eCommerce",
            },
        ]
    },
    //{
    //    url: 'https://vue-feather-icons.netlify.com/',
    //    name: "Icon",
    //    icon: "BookOpenIcon",
    //    slug: "external",
    //    i18n: "Icon",
    //    target: "_blank"
    //},
    {
        header: "Apps",
        i18n: "Apps",
    },
    {
        url: "/apps/email",
        name: "Email",
        slug: "email",
        icon: "MailIcon",
        i18n: "Email",
    },
    {
        url: "/apps/chat",
        name: "Chat",
        slug: "chat",
        icon: "MessageSquareIcon",
        i18n: "Chat",
    },
    {
        url: "/apps/todo",
        name: "Todo",
        slug: "todo",
        icon: "CheckSquareIcon",
        i18n: "Todo",
    },
    {
        url: "/apps/calendar",
        name: "Calendar",
        slug: "calendar",
        icon: "CalendarIcon",
        i18n: "Calendar",
    },
    {
        url: null,
        name: "eCommerce",
        slug: "eCommerce",
        icon: "ShoppingCartIcon",
        i18n: "eCommerce",
        submenu: [
            {
                url: '/apps/eCommerce/shop',
                name: "Shop",
                slug: "eCommerceShop",
                i18n: "Shop",
            },
            {
                url: '/apps/eCommerce/wish-list',
                name: "Wish List",
                slug: "eCommerceWishList",
                i18n: "WishList",
            },
            {
                url: '/apps/eCommerce/checkout',
                name: "Checkout",
                slug: "eCommerceCheckout",
                i18n: "Checkout",
            },
        ]
    },
]
