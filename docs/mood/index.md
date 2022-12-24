---
title: Mood
---

<script>
import Tip from '../components/Tip.vue'
import Drops from '../components/Drops.vue'

export default {
  props: ['slot-key'],
  components: { Tip, Drops },
}
</script>

<Drops />

<Tip type="tip" title="🌈 Good-To-See-You">
  <p>你好，陌生人，我是 小K. ❤️‍🔥</p>
  <p>承蒙遇见，三生有幸~</p>
  <p>佛曰：前世五百次的回眸才换得今世的擦肩而过。前世的我做了什么，才能换得今生的你在此驻足停留？！</p>
</Tip>

<Tip type="warning" title="🫧 相遇-相知-相爱-相离">
  <p>茫茫人海中，人与人相遇、相知乃至相爱、相守是皆是十分不易的事情，</p>
  <p>希望大家能够珍惜缘分，生命的轮转就是轮回，一个人的生命只有一次!</p>
  <p>佛没说今世该如何做，但佛也算说了，因果就在轮回之中...</p>
</Tip>

<Tip type="danger" title="🏖 安好" content="仅愿你，能遇良人；在我看不到的地方 [安然无恙]。如此，便好..." />
