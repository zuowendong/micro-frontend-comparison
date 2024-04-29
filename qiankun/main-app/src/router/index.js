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
      path: "/vue/:pathMatch(.*)*",
      name: "vue",
      meta: {},
      component: () => import("../components/SubContainer.vue"),
    },
    {
      path: "/react/:pathMatch(.*)*",
      name: "react",
      meta: {},
      component: () => import("../components/SubContainer.vue"),
    },
  ],
});

export default router;
