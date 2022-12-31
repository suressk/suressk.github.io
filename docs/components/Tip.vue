<template>
  <div class="custom-block" :class="[cls]">
    <p v-if="props.title" class="custom-block-title">{{ props.title }}</p>
    <p v-if="props.content">{{ props.content }}</p>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const typeMap = {
  tip: 'tip',
  danger: 'danger',
  info: 'info',
  warning: 'warning'
}
const props = defineProps({
  type: String,
  title: String,
  content: String
})

const cls = computed(() => typeMap[props.type] || 'info')
</script>