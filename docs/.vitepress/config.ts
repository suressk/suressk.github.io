module.exports = {
  lang: "en-US",
  title: "K.island ✨",
  description: "K.'s island",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "64x64" }],
    [
      "link",
      {
        rel: "apple-touch-icon-precomposed",
        href: "/favicon.ico",
        sizes: "64x64",
      },
    ],
    [
      "link",
      {
        rel: "msapplication-square64x64logo",
        href: "/favicon.ico",
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

    footer: {
      message: 'MIT',
      copyright: 'Copyright © 2022 suressk (K.)'
    },
    nav: [
      { text: "Home", link: "/", activeMatch: "^/$|^/home/" },
      {
        text: "Mood",
        link: "/mood/",
        activeMatch: "^/mood/",
      },
      {
        text: "Knowledge",
        link: "/knowledge/index",
        activeMatch: "^/knowledge/",
      },
      {
        text: "Interview",
        link: "/interview/index",
        activeMatch: "^/interview/",
      },
      {
        text: "Algorithm",
        link: "/algorithm/index",
        activeMatch: "^/algorithm/",
      },
    ],

    sidebar: {
      "/mood/": getMoodSidebar(),
      "/knowledge/": getKnowledgeSidebar(),
      "/interview/": getInterviewSidebar(),
      "/algorithm/": getAlgorithmSidebar(),
      // "/": [],
    }
  }
}

/**
 * 心情文章列表
 * @returns nav[]
 */
function getMoodSidebar() {
  return [
    {
      test: 'Mood',
      items: [
        {
          text: "孤独与庸俗",
          link: "/mood/loneliness",
        },
        {
          text: "感与叹",
          link: "/mood/feels",
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
          text: "Year-End",
          link: "/mood/yearEnd",
        },
        {
          text: "风过无痕",
          link: "/mood/wind",
        },
        {
          text: "Spring Festival",
          link: "/mood/spring",
        },
        {
          text: "Fate",
          link: "/mood/fate",
        },
        {
          text: "Met & Lost",
          link: "/mood/metAndLost",
        },
      ]
    }
  ]
}

/**
 * 知识点文章列表
 * @returns nav[]
 */
function getKnowledgeSidebar() {
  return [
    {
      text: "Introduction",
      items: []
    },
    {
      text: "Study Note",
      items: [
        { text: "JS EventLoop", link: "/knowledge/study/jsEventLoop" },
        { text: "Promise", link: "/knowledge/study/promise" },
        { text: "Vue NextTick", link: "/knowledge/study/vueNextTick" },
        { text: "Algorithm", link: "/knowledge/study/algorithm" },
      ],
    },
    {
      text: "React",
      items: [
        { text: "React 笔记文章 - 掘金", link: "/knowledge/react/index" },
        { text: "React Fiber", link: "/knowledge/react/fiber" },
      ],
    },
    {
      text: "Vite",
      items: [
        { text: "Vite 原理简介", link: "/knowledge/vite/index" },
        { text: "从 vite 到 createServer", link: "/knowledge/vite/vitejs" },
        { text: "resolveConfig", link: "/knowledge/vite/resolveConfig" },
        { text: "依赖预构建", link: "/knowledge/vite/esbuild" },
        { text: "插件机制", link: "/knowledge/vite/plugin" },
        { text: "热更新机制", link: "/knowledge/vite/hmr" },
      ],
    },
    {
      text: "Engineering",
      items: [
        { text: "webpack", link: "/knowledge/engineering/webpack" },
        { text: "webpack Loader & plugin", link: "/knowledge/engineering/loaderAndPlugin" },
        { text: "webpack Tapable", link: "/knowledge/engineering/tapable" },
        { text: "webpack 热更新", link: "/knowledge/engineering/hotUpdate" },
        { text: "webpack 打包优化", link: "/knowledge/engineering/wpOptimize" },
        { text: "代码规范", link: "/knowledge/engineering/lint" },
        { text: "打包工具对比", link: "/knowledge/engineering/compare" },
        { text: "tsconfig 配置一览", link: "/knowledge/engineering/tsconfig" },
      ],
    },
  ];
}

/**
 * 面试相关文章列表
 * @returns nav[]
 */
function getInterviewSidebar() {
  return [
    {
      text: "Introduction",
      items: []
    },
    {
      text: "Knowledge Summary",
      items: [
        { text: "JavaScript 基础", link: "/interview/summary/basis" },
        { text: "网络基础", link: "/interview/summary/internet" },
        { text: "实战面试题", link: "/interview/summary/actual" },
        { text: "八股文（一）", link: "/interview/summary/index" },
        { text: "八股文（二）", link: "/interview/summary/strands" },
        { text: "八股文（三）", link: "/interview/summary/optimization" },
      ],
    },
    // {
    //   text: "Actual Combat",
    //   items: [
    //     { text: "ByteDance", link: "/interview/actual/bytedance" },
    //   ],
    // },
  ];
}

/**
 * 算法相关文章列表
 * @returns nav[]
 */
function getAlgorithmSidebar() {
  return [
    {
      text: "Introduction",
      items: []
    },
    {
      text: "Knowledge Summary",
      items: [
        { text: "复杂度与简单排序", link: "/algorithm/summary/complexity" },
        { text: "N·log(N) 的排序", link: "/algorithm/summary/merge" },
        { text: "堆 & 栈", link: "/algorithm/summary/stack" },
      ],
    },
  ];
}