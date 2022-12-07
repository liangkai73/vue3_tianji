import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../pages/home/index.vue") },
  { path: "/home", component: () => import("../pages/home/index.vue") },
  { path: "/404", component: () => import("../pages/404.vue") },
];
console.log(routes);

export const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
