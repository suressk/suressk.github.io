import { generateNav, generateSidebar } from "./router";

export default {
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
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/suressk/suressk.github.io" },
    ],
    footer: {
      message: "MIT",
      copyright: `Copyright © ${new Date().getFullYear()} suressk (K.)`,
    },
    nav: generateNav(),
    sidebar: generateSidebar(),
  },
};
