import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { tokenLocalData } from "@/utils/storage";
import { ElMessage } from "element-plus";
import { toNext } from "@/router";
export const prefix = "/api";

class HttpRequest {
  private readonly timeout: number;
  private readonly headers: AxiosRequestHeaders;
  constructor() {
    this.timeout = 50000;
    this.headers = {
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    } as unknown as AxiosRequestHeaders;
  }
  getInitConfig(): AxiosRequestConfig {
    return {
      timeout: this.timeout,
      headers: this.headers,
      baseURL: "/api",
    };
  }
  interceptors(instance: AxiosInstance): void {
    //   相应拦截
    instance.interceptors.response.use(
      (response) => {
        //登录失效
        if (response.data.code === "401") {
          // 清空token
          tokenLocalData("");
          const time = setTimeout(() => {
            clearTimeout(time);
            toNext("/Login");
          }, 500);
        } else if (response.data.code === "200") {
          // console.log(response.data)
          return Promise.resolve(response.data);
        }
        // 错误信息
        ElMessage({
          showClose: true,
          message: response.data.msg,
          type: "error",
        });
        return Promise.reject(response.data);
      },
      (error) => {
        ElMessage({
          showClose: true,
          message: JSON.stringify(error) + "/n" + error.message,
          type: "error",
        });
        if (error.response.status == 401) {
          tokenLocalData("");
          const time = setTimeout(() => {
            clearTimeout(time);
            toNext("/Login");
          }, 500);
        }
        return Promise.reject(error);
      }
    );
    //   请求拦截
    instance.interceptors.request.use(
      function (config) {
        if (config.headers) {
          config.headers.token = tokenLocalData() as string;
        }
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }
  request(): AxiosInstance {
    const instance = axios.create(this.getInitConfig());

    this.interceptors(instance);
    return instance;
  }
}

const http = new HttpRequest();

export default http.request();
