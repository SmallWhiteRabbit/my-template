import request from "@/utils/request";

export const getDataList = (params?: Object) => {
  return request({
    url: "/system/menu/getAllList",
    method: "post",
    data: params,
  });
};
