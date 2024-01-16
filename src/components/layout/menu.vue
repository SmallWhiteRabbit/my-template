<template>
  <el-menu>
    <template v-for="item in props.list" :key="item.id">
      <menuItemModule :data="item" @toNext="toNextFn"></menuItemModule>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import menuItemModule from "./menuItem.vue";
const props = defineProps(["list"]);
const emits = defineEmits(["toNext"]);
const toNextFn = (path: string) => {
  emits("toNext", path);
};
</script>
<style scoped></style>
