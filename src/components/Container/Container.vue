<template lang="">
  <section :class="containerClass">
    <slot></slot>
  </section>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { Component, VNode } from 'vue'
import type { ContainerProps } from './types'

defineOptions({
  name: 'ElContainer'
})

const props = defineProps<ContainerProps>()
const slots = useSlots()

const containerClass = computed(() => {
  return {
    'el-container': true,
    'el-container-horizontal': !isVertical.value,
    'el-container-vertical': isVertical.value
  }
})

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  // 如果未传入direction则使用slot判断， 有ElHeader或ElFooter则使用垂直布局
  if (slots && slots.default) {
    // 获取默认插槽的所有vNode节点
    const vNodes: VNode[] = slots.default()

    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name
      return tag === 'ElHeader' || tag == 'ElFooter'
    })
  } else {
    // 插槽不存在或是没有插槽内容， 返回false
    return false
  }
})
</script>
