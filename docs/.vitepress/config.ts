module.exports = {
  lang: "en-US",
  title: "K.island ✨",
  description: "K.'s island",

  themeConfig: {
    repo: "suressk",
    docsDir: "docs",
    docsBranch: "deploy",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      { text: "Home", link: "/", activeMatch: "^/$|^/main/" },
      {
        text: "Mood",
        link: "/mood/index",
        activeMatch: "^/mood/",
      },
      {
        text: "Knowledge",
        link: "/knowledge/index",
        activeMatch: "^/knowledge/",
      },
    ],

    sidebar: {
      // "/main/": getMainSidebar(),
      "/mood/": getMoodSidebar(),
      "/knowledge/": getKnowledgeSidebar(),
      "/": getMainSidebar(),
    },
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

/**
 * 心情文章列表
 * @returns nav[]
 */
function getMoodSidebar() {
  return [
    {
      text: "孤独与庸俗",
      link: "/mood/loneliness",
    },
    {
      text: "入秋",
      link: "/mood/autumn",
    },
    {
      text: "典籍里的中国",
      link: "/mood/chinaInTheClassics",
    },
    {
      text: "端午",
      link: "/mood/dragonBoatFestival",
    },
    {
      text: "感与叹",
      link: "/mood/feels",
    },
  ];
}

/**
 * 知识点文章列表
 * @returns nav[]
 */
function getKnowledgeSidebar() {
  return [
    {
      text: "Introduction",
    },
    {
      text: "Study Note",
      children: [
        { text: "JS EventLoop", link: "/knowledge/study/jsEventLoop" },
        { text: "Promise", link: "/knowledge/study/promise" },
        { text: "Vue NextTick", link: "/knowledge/study/vueNextTick" },
        { text: "Algorithm", link: "/knowledge/study/algorithm" },
      ],
    },
  ];
}
