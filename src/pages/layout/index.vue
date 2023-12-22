<template>
  <header>
    <navCom />
  </header>
  <div class="main"><router-view></router-view></div>
</template>
<script setup lang="ts">
import navCom from "@/components/layout/nav.vue";
</script>
<style scoped lang="less">
header {
  height: 40px;
}
.main {
  height: calc(100% - 40px);
}
</style>
