import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue/" : "/"
  ),
  routes,
});

export default router;
