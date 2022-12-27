---
title: 又一年
---

<script>
import Bubble from '../components/Bubble.vue'
import Timer from '../components/Timer.vue'

export default {
  props: ['slot-key'],
  components: { Bubble, Timer },
}
</script>

<img src="/images/lastYear.png" alt="2022">

## 2022 也快结束了

<Bubble />

<Timer festival="元旦" date="2023-01-01 00:00:00" />

<Timer festival="新年" date="2023-01-22 00:00:00" />
