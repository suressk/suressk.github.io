<script setup>
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue'
import { computeTime } from './utils'

const props = defineProps({
  festival: String,
  date: String
})

let timer = null

const time = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  leftTime: 0
})

const isOver = computed(() => (time.days + time.hours + time.minutes + time.seconds) === 0)

const clearTimer = () => {
  clearInterval(timer)
  time.days = 0
  time.hours = 0
  time.minutes = 0
  time.seconds = 0
  timer = null
}

const updateTime = (festivalDateTime) => {
  const leftTime = festivalDateTime - Date.now()
  time.leftTime = leftTime
  if (leftTime <= 0) {
    clearTimer()
    return
  }

  const { days, hours, minutes, seconds } = computeTime(leftTime)
  time.days = days
  time.hours = hours
  time.minutes = minutes
  time.seconds = seconds
}

const startTimer = () => {
  if (!props.date) {
    return
  }
  /**
   * In iOS, new Date() with divider of `-` will to be `NaN`
   */
  const date = (new Date(props.date.replace(/-/g, '/'))).getTime()
  timer = setInterval(() => {
    updateTime(date)
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  clearTimer()
})
</script>

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
        <div class="item flex-center">
          {{ time.days }}
        </div>
        <div class="colon flex-center">
          天
        </div>
        <div class="item flex-center">
          {{ time.hours }}
        </div>
        <div class="colon flex-center">
          :
        </div>
        <div class="item flex-center">
          {{ time.minutes < 10 ? `0${time.minutes}` : time.minutes }}
        </div>
        <div class="colon flex-center">
          :
        </div>
        <div class="item flex-center">
          {{ time.seconds < 10 ? `0${time.seconds}` : time.seconds }}
        </div>
      </template>
    </div>
  </div>
</template>

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
  font-size: 1.2rem;
}

.colon {
  padding: 0 8px;
}
</style>
