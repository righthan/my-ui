<template>
  <button
    class="el-button"
    ref="_ref"
    :class="computedClass"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <el-icon icon="spinner" v-if="loading" spin />
    <el-icon :icon="icon" v-if="icon" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ButtonProps } from './types'
import { computed, ref } from 'vue'
import ElIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'ElButton'
})

const props = defineProps(ButtonProps)

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})

const computedClass = computed(() => {
  const { type, size, round, loading, circle, disabled, plain } = props

  return [
    type ? 'el-button--' + type : '',
    size ? 'el-button--' + size : '',
    {
      'is-round': round,
      'is-loading': loading,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-plain': plain
    }
  ]
})
</script>

<style scoped></style>
