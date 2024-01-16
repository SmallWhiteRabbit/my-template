import Mock from "mockjs";
import { prefix } from "@/utils/request";
import { menuList } from "./data";
Mock.mock(prefix + "/user/list", {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  list: [
    {
      "id|+1": 1, // id 从 1 开始自增。
      name: "@cname", // 随机中文名
      "age|15-25": 1, // 15～25 的随机数
      city: "@county(true)", // 随机的城市
    },
  ],
});

Mock.mock(prefix + "/system/menu", {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  rows: menuList,
  code: "200",
  total: 20,
  page: 1,
});
