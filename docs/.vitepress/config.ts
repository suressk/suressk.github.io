module.exports = {
  lang: "en-US",
  title: "K.island ✨",
  icon: "./favicon.ico",
  description: "K.'s island",

  head: [
    ["link", { rel: "icon", href: "./favicon.ico", sizes: "64x64" }],
    [
      "link",
      {
        rel: "apple-touch-icon-precomposed",
        href: "./favicon.ico",
        sizes: "64x64",
      },
    ],
    [
      "link",
      {
        rel: "msapplication-square64x64logo",
        href: "./favicon.ico",
        sizes: "64x64",
      },
    ],
  ],

  themeConfig: {
    repo: "suressk",
    docsDir: "docs",
    docsBranch: "deploy",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      { text: "Home", link: "/", activeMatch: "^/$|^/home/" },
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
      "/": [],
    },
  },
};

// function getMainSidebar() {
//   return [];
// }

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
