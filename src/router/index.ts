import type { RouteRecordRaw } from "vue-router";
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

export default router;
