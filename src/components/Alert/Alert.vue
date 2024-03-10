<template>
  <Transition name="el-alert-fade">
    <div class="el-alert" :class="elAlertClass" v-show="visible">
      <div class="el-alert__content">
        <span v-if="showIcon">
          <el-icon :icon="showAlertIcon()" @click.stop="visible = false"></el-icon>
        </span>
        <div class="el-alert__message">
          <p class="el-alert__title">
            <slot name="title">{{ title }}</slot>
          </p>
        </div>
      </div>
      <template v-if="closable">
        <div v-if="closeText" @click="closeAlert" class="closeBtn">
          {{ closeText }}
        </div>
        <el-icon v-else icon="xmark" @click="closeAlert" class="closeBtn"></el-icon>
      </template>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { type AlertProps, alertEmits } from './types'
import ElIcon from '../Icon/Icon.vue'

// 定义组件名字
defineOptions({
  name: 'ElAlert'
})

const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  closable: true
})

const emit = defineEmits(alertEmits)

const elAlertClass = computed(() => {
  const { type, closable, center, showIcon, effect } = props
  return {
    [`el-alert--${type}`]: type,
    [`el-alert--${effect}`]: effect,
    'is-closable': closable,
    'is-center': center,
    'has-icon': showIcon
  }
})

const visible = ref(true)

const closeAlert = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}

const showAlertIcon = () => {
  switch (props.type) {
    case 'error':
      return 'circle-xmark'
    case 'info':
      return 'circle-info'
    case 'success':
      return 'circle-check'
    case 'warning':
      return 'circle-exclamation'
    default:
      return 'circle-xmark'
  }
}
</script>
