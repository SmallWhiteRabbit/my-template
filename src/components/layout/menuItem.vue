<template>
  <el-sub-menu :index="props.data.path" v-if="props.data.children">
    <template #title>
      {{ props.data.name }}
    </template>
    <template v-if="props.data.children">
      <menu-item
        v-for="item in props.data.children"
        :key="item.path"
        :data="item"
        @toNext="toNextFn(item)"
      >
      </menu-item>
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="props.data.path" @click="toNextFn(props.data)">
    {{ props.data.name }}
  </el-menu-item>
</template>
<script setup lang="ts">
const props = defineProps(["data"]);
const emits = defineEmits(["toNext"]);

const toNextFn = (item: { path: string }) => {
  emits("toNext", item.path);
};
</script>
<style scoped></style>
