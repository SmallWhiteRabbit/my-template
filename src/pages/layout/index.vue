<template>
  <navCom />
  <router-view></router-view>
</template>
<script setup lang="ts">
import navCom from "@/components/layout/nav.vue";
import { ref } from "vue";
const value1 = ref("");
</script>
<style scoped></style>
