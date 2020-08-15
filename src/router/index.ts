import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import IndexPage from "../views/IndexPage/index.vue";
import BarLayout from "../views/layout/index.vue";

import Hello from "../components/hello/route/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: IndexPage,
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
