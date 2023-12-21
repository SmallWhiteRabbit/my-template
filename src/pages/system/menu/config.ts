const formList = [
  {
    is: "el-input",
    prop: "menuName",
    label: "菜单名称",
  },
  {
    is: "el-select",
    prop: "delStatus",
    label: "状态",
  },
];
const filterList = [
  {
    is: "el-input",
    prop: "menuName",
    label: "菜单名称",
  },
  {
    is: "el-select",
    prop: "delStatus",
    label: "状态",
  },
];

export const formRules = {
  menuName: { required: true },
};
const tableList = [
  { prop: "id", label: "序号" },
  { prop: "menuName", label: "菜单名称" },
  { slotName: "delStatus", label: "状态" },
  { prop: "menuUrl", label: "路由地址" },
  { prop: "menuIcon", label: "图标" },
  { prop: "sortNum", label: "排序" },
  { prop: "createTime", label: "创建日期", width: 200 },
  { slotName: "options", label: "操作", fixed: "right", width: 200 },
];
export { formList, tableList, filterList };
