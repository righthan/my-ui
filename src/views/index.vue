<template>
  <div>
    <!-- <router-view></router-view> -->
    <Alert title="test" show-icon type="error" description="test" close-text="test"></Alert>
  </div>
</template>
<script lang="ts" setup>
import Alert from '@/components/Alert/Alert.vue'
defineOptions({
  name: 'IndexView'
})
</script>
<style lang=""></style>
