<template>
  <div>
    <!-- <router-view></router-view> -->
    <Collapse v-model="activeNames" :accordion="true" title="test" @click="handleClick">
      <CollapseItem
        v-for="(item, index) in arr"
        :title="item.title"
        :name="item.name"
        :key="index"
        >{{ item.content }}</CollapseItem
      >
    </Collapse>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'

const activeNames = ref(['test'])
const arr = ref([
  {
    title: 'test',
    name: 'hello',
    content: 'test'
  },
  { title: 'by', name: 'ddd', content: 'test' }
])
const handleClick = () => {}
defineOptions({
  name: 'IndexView'
})
</script>
<style lang=""></style>
