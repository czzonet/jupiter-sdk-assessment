import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import BarLayout from "../views/layout/index.vue";

import Hello from "../components/hello/route/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: BarLayout,
    redirect: "/main/hello",
    children: [Hello],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
