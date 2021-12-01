module.exports = {
  lang: "en-US",
  title: "K.island ✨",
  description: "K.'s study-note site",

  themeConfig: {
    repo: "suressk/suressk.github.io",
    docsDir: "docs",
    docsBranch: "deploy",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
  },

  nav: [
    { text: "Main", link: "/", activeMatch: "^/$|^/main/" },
    {
      text: "Mood",
      link: "/mood",
      activeMatch: "^/mood/",
    },
    {
      text: "GitHub",
      link: "https://github.com/suressk",
    },
  ],

  sidebar: {
    "/main/": getMainSidebar(),
    "/mood/": getMoodSidebar(),
    "/": getMainSidebar(),
  },
};

function getMainSidebar() {
  return [
    {
      text: "Introduction",
      children: [{ text: "Front End", link: "/" }],
    },
    {
      text: "Advanced",
      children: [
        { text: "Frontmatter", link: "/guide/frontmatter" },
        { text: "Theming", link: "/guide/theming" },
        { text: "API Reference", link: "/guide/api" },
        {
          text: "Differences from Vuepress",
          link: "/guide/differences-from-vuepress",
        },
      ],
    },
  ];
}

function getMoodSidebar() {
  return [
    {
      text: "Loneliness and Vulgarity",
      link: "/mood/loneliness",
    },
    {
      text: "Theme Config",
      children: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}
