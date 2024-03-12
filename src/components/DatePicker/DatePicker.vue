<template>
  <div class="calendar">
    <div class="calendar-operate">
      <div class="button-group">
        <button class="button" @click="changeMonth('prev')">
          <icon icon="arrow-left" size="sm" />
        </button>
        <button class="button" @click="changeMonth('next')">
          <icon icon="arrow-right" size="sm" />
        </button>
      </div>
      <div class="calendar-operate__title">{{ dateText }}</div>
      <button class="button" :disabled="isToday" @click="currentDate">今天</button>
    </div>
    <div class="calendar-header">
      <span
        v-for="(item, index) in weekMapZh"
        :key="index"
        class="calendar-header__item"
        :class="{ gray: index === 0 || index === 6 }"
        >{{ item }}</span
      >
    </div>
    <div class="calendar-content" :data-month="date.getMonth() + 1">
      <div
        v-for="(item, index) in calendarTable"
        :key="index"
        class="calendar-content__item"
        :class="[{ light: !item.isCurrentMonth }, { active: isActive(item) }]"
        @click="handleClickDay"
      >
        {{ item.day }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from '../Icon/Icon.vue'
import { weekMapZh, generateCalendar } from './datePicker'
import { isAllTrue } from './datePicker'
import type { CalendarItem } from './datePicker'

defineOptions({
  name: 'DatePicker'
})

const date = ref<Date>(new Date())
const calendarTable = computed(() => {
  return generateCalendar(date.value)
})
const dateText = computed(() => `${date.value.getFullYear()}/${date.value.getMonth() + 1}`)

const isToday = computed(() => {
  const current = new Date()
  const validArr = [
    date.value.getFullYear() === current.getFullYear(),
    date.value.getMonth() === current.getMonth(),
    date.value.getDay() === current.getDay()
  ]
  return isAllTrue(validArr)
})

/**
 * 当天日期高亮显示, 兼容切换日期：
 * 年月日都要对上才能高亮
 * ps: 日历可能会显示下月/上月的同样日期， 仅当月日期高亮
 */
const isActive = (item: CalendarItem) => {
  return isAllTrue([
    item.day === date.value.getDate(),
    item.isCurrentMonth,
    item.month === new Date().getMonth(),
    item.year === new Date().getFullYear()
  ])
}

// 切换到今天
const currentDate = () => {
  date.value = new Date()
}

const changeMonth = (type: 'prev' | 'next'): void => {
  let month = 0
  let year = 1970
  if (type === 'prev') {
    month = date.value.getMonth() === 0 ? 11 : date.value.getMonth() - 1
    year = month === 11 ? date.value.getFullYear() - 1 : date.value.getFullYear()
  } else {
    month = date.value.getMonth() === 11 ? 0 : date.value.getMonth() + 1
    year = month === 0 ? date.value.getFullYear() + 1 : date.value.getFullYear()
  }

  if (month === new Date().getMonth()) {
    currentDate()
    return
  }

  date.value.setDate(1)
  date.value.setMonth(month)
  date.value.setFullYear(year)

  date.value = new Date(date.value)
}

const handleClickDay = (e: Event): void => {
  const target = e.target as HTMLElement
  date.value.setDate(parseInt(target.innerHTML))
  date.value = new Date(date.value)
}
</script>
