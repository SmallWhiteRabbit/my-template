<template>
  <navCom />
  <div class="main"><router-view></router-view></div>
</template>
<script setup lang="ts">
import navCom from "@/components/layout/nav.vue";
</script>
<style scoped lang="scss">
.main {
  height: calc(100% - 64px);
  padding: 20px;
}
</style>
