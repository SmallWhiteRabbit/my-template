<template>
  <my-filter
    v-model="State.filterData"
    :formList="filterList"
    :btnList="btnList"
  />
  <my-table :tableList="tableList" :data="tableData">
    <template #delStatus="scope">
      {{ scope.row.delStatus == 1 ? "删除" : "有效" }}
    </template>
    <template #options="scope">
      <el-button>编辑</el-button>
      <el-button> {{ scope.row.delStatus == 1 ? "启用" : "停用" }}</el-button>
      <el-button>删除</el-button>
    </template>
  </my-table>
  <my-pagination
    :total="pageInfo.total"
    v-model:page="pageInfo.pageNum"
    v-model:limit="pageInfo.pageSize"
    @pagination="getList"
  ></my-pagination>

  <my-dialog-form
    :title="'标题'"
    v-model:formData="State.formData"
    :formList="formList"
    :formRules="formRules"
    ref="dialogRef"
    @success="submitForm"
  ></my-dialog-form>
</template>
<script setup lang="ts">
import { filterList, tableList, formList, formRules } from "./config.ts";
import usePageTable from "@/hooks/usePageTable";
import { getDataList } from "@/api/menu";
const State = reactive({
  filterData: {
    menuName: "",
    delStatus: "",
  },
  formData: {},
});
const dialogRef = ref();
const { pageInfo, getList, tableData } = usePageTable(
  State.filterData,
  getDataList
);
const btnList = [
  {
    label: "查询",
    icon: "",
  },
  {
    label: "新增",
    icon: "",
    onClick() {
      dialogRef.value.visible = true;
    },
  },
];

getList();

const submitForm = () => {};
</script>
<style scoped></style>
