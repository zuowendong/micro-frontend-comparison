import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      // history模式需要通配所有路由，详见vue-router文档
      path: "/vue/:pathMatch(.*)*",
      name: "vue",
      meta: {},
      component: () => import("../components/SubContainer.vue"),
    },
  ],
});

export default router;
