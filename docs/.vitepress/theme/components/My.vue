<template>
  <VPTeamMembers class="my-intro" size="small" :members="members" />
</template>

<script setup>
import { VPTeamMembers } from "vitepress/theme";
const members = [
  {
    avatar: "https://www.github.com/suressk.png",
    name: "小 K. 同学",
    title: "Author",
    links: [
      { icon: "github", link: "https://github.com/suressk" },
      {
        icon: {
          svg: '<svg t="1774277574684" class="icon" viewBox="0 0 1272 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5820" width="200" height="200"><path d="M751.863172 91.206621L636.186483 0l-120.832 95.302621-6.285242 5.049379 127.117242 101.34069 127.540965-101.34069-11.864276-9.145379z m438.377931 353.739034l-554.372413 437.142069-554.019311-436.894896L0 510.94069l635.86869 501.371586 636.221793-501.654069-81.84938-65.712552z m-554.372413 35.451586L334.177103 242.582069 252.363034 308.25931l383.470345 302.397793 383.858759-302.680275-81.814069-65.712552-302.009379 238.132965z" fill="#cdcdcd" p-id="5821"></path></svg>',
        },
        link: "https://juejin.cn/user/3940246036945822/posts",
      },
    ],
  },
];
</script>

<style>
.my-intro .item {
  padding: 0;
  width: auto;
  height: auto;
  color: var(--vp-c-text-1);
}
</style>
