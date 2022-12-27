<template>
  <div class="timer-wrap">
    <div>
      距离
      <span class="festival">『{{ props.festival }}』</span>
      还剩：
    </div>

    <div class="txt flex-center">
      <template v-if="isOver">
        <div class="over-txt flex-center">
          耶？
          <span class="festival">『{{ props.festival }}』</span>
          好像已经过去了～
        </div>
      </template>

      <template v-else>
        <div class="item flex-center">{{ days }}</div>
        <div class="colon flex-center">天</div>
        <div class="item flex-center">{{ hours }}</div>
        <div class="colon flex-center">:</div>
        <div class="item flex-center">{{ minutes < 10 ? `0${minutes}` : minutes }}</div>
        <div class="colon flex-center">:</div>
        <div class="item flex-center">{{ seconds < 10 ? `0${seconds}` : seconds }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { computeTime } from './utils'

let timer = null

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const props = defineProps({
  festival: String,
  date: String
})

const isOver = computed(() => {
  return days.value === 0 && hours.value === 0 && minutes.value === 0 && seconds.value === 0
})

const updateTime = (festivalDate) => {
  const now = Date.now()
  if (festivalDate <= now) return

  const leftTime = computeTime(festivalDate - now)
  days.value = leftTime.days
  hours.value = leftTime.hours
  minutes.value = leftTime.minutes
  seconds.value = leftTime.seconds
}

const startTimer = () => {
  if (!props.date) {
    return;
  }
  const date = (new Date(props.date)).getTime()
  timer = setInterval(() => {
    updateTime(date)
  }, 1000)
}

const clearTimer = () => {
  clearInterval(timer)
  timer = null
}

onMounted(() => {
  startTimer();
})

onBeforeUnmount(() => {
  clearTimer()
})
</script>

<style>
.timer-wrap {
  border: 1px solid var(--vp-custom-block-warning-border);
  border-radius: 8px;
  padding: 16px 16px 8px;
  margin: 8px 0;
}

.festival {
  color: var(--vp-custom-block-warning-text);
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.txt {
  margin-top: 16px;
  font-size: 1.5rem;
}

.item,
.over-txt {
  border-radius: 8px;
  background-color: var(--vp-badge-info-bg);
}

.item {
  padding: 8px;
  width: 55px;
  height: 55px;
  color: var(--vp-custom-block-warning-text);
}

.over-txt {
  padding: 8px 16px;
}

.colon {
  padding: 0 8px;
}
</style>