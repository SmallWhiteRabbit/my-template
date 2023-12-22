import type {
  RouteLocationNormalized,
  RouteLocationRaw,
  RouteRecordRaw,
} from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/layout/index.vue"),
    children: [
      {
        path: "/system/menu",
        name: "system-menu",
        component: () => import("@/pages/system/menu/index.vue"),
      },
      {
        path: "/system/user",
        name: "system-user",
        component: () => import("@/pages/system/user/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 路由跳转
 *
 * @param {RouteLocationRaw} to 下一个路由参数
 */
export function toNext(to: RouteLocationRaw): void {
  router.push(to);
}
/**
 *返回
 */
export function back(): void {
  router.back();
}
/**
 * 获取当前路由
 *
 * @returns {RouteRecordRaw} 当前路由
 */
export function getRoute() {
  return router.currentRoute.value;
}
/**
 * 获取路由query参数类型s参数
 *
 * @param {string} type query参数类型
 * @returns { RouteRecordRaw } 路由query参数类型s参数
 */
export function getQuery(type: string) {
  const $route = getRoute();

  return $route.query[type];
}
/**
 * 获取路由params参数
 *
 * @param {string} type params参数类型
 * @returns { RouteRecordRaw } 路由params参数
 */
export function getParams(type: string) {
  const $route = getRoute();

  return $route.params[type];
}
/**
 * 监听跳转后
 *
 * @param {void} fn 回调函数
 */
export function afterEach(
  fn: (to?: RouteLocationNormalized, from?: RouteLocationNormalized) => void
) {
  router.afterEach((to, from) => {
    fn(to, from);
  });
}
/**
 *onBeforeRouteUpdate路由守卫
 *
 * @param {void} fn 回调函数
 */
export function beforeRouteUpdate(
  fn: (to?: RouteLocationNormalized, from?: RouteLocationNormalized) => void
) {
  onBeforeRouteUpdate((to, from) => {
    fn(to, from);
  });
}

export default router;
