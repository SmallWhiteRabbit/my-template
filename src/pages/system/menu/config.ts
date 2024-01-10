const formList = [
  {
    is: "el-input",
    prop: "menuName",
    label: "menu.name",
  },
  {
    is: "el-select",
    prop: "delStatus",
    label: "menu.status",
  },
];
const filterList = [
  {
    is: "el-input",
    prop: "menuName",
    label: "menu.name",
  },
  {
    is: "el-select",
    prop: "delStatus",
    label: "menu.status",
    options: [{ label: "ii", value: 0 }],
  },
  {
    is: "el-date-picker",
    prop: "createTime",
    label: "createDate",
    type: "daterange",
  },
];

export const formRules = {
  menuName: { required: true },
};
const tableList = [
  { prop: "id", label: "menu.id" },
  { prop: "menuName", label: "menu.name" },
  { slotName: "delStatus", label: "menu.status" },
  { prop: "menuUrl", label: "menu.url" },
  { prop: "menuIcon", label: "menu.icon" },
  { prop: "sortNum", label: "menu.sort" },
  { prop: "createTime", label: "createDate", width: 200 },
  { slotName: "options", label: "options", fixed: "right", width: 200 },
];
export { formList, tableList, filterList };
