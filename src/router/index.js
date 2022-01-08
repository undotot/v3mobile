import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    title: "首页",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
