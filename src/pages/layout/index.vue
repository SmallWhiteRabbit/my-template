<template>
  {{ $t('home') }} <navCom />
  <el-date-picker v-model="value1" type="monthrange" />
</template>
<script setup lang="ts">
import navCom from '@/components/layout/nav.vue'
import { ref } from 'vue'
const value1 = ref('')
</script>
<style scoped></style>
