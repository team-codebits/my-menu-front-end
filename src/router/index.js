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
      path: "/Login",
      name: "Login",
      componet: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      componet: () => import("../views/SignUpView.vue"),
    },
  ],
});

export default router;
