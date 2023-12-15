<template>
  <el-config-provider :locale="getElementPlusLang()">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { useLocaleStore } from '@/store/locale'
const { getElementPlusLang } = useLocaleStore()
</script>
<style></style>
