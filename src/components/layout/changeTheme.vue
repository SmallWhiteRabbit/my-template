<template>
  <el-color-picker v-model="defaultTheme" @change="changeTheme" />
</template>
<script setup lang="ts">
import { useElementPlusTheme } from "@/hooks/useElementPlusTheme";
const defaultTheme = ref("#405DFF");

const { changeTheme } = useElementPlusTheme(defaultTheme.value);
</script>
<style scoped></style>
