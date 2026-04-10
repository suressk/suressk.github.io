const navList = [
    'knowledge',
    'interview',
    'algorithm',
];

const generateNav = () => {
    const nav = [
        { text: "Home", link: "/", activeMatch: "^/$|^/home/" },
    ];

    for (const navItem of navList) {
        nav.push({
            text: navItem.charAt(0).toUpperCase() + navItem.slice(1),
            link: `/${navItem}/index`,
            activeMatch: `^/${navItem}/`,
        });
    }
    return nav;
};

export default generateNav;
