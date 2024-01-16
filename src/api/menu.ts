import request from "@/utils/request";

export const getDataList = (params?: Object) => {
  return request({
    url: "/system/menu/getAllList",
    method: "post",
    data: params,
  });
};

export const getMenuList = (params?: Object) => {
  return request({
    url: "/system/menu",
    method: "post",
    data: params,
  });
};
