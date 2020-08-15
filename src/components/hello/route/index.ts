/** define */
import { NAME } from "../define";

export default {
  path: NAME,
  name: NAME,
  component: () => import(/* webpackChunkName: "hello" */ "../index.vue"),
  meta: { name: NAME },
  redirect: `/main/${NAME}/add`,
  children: [
    {
      path: "home",
      meta: { name: NAME },
      component: () => import(/* webpackChunkName: "hello" */ "../home.vue"),
    },
    {
      path: "add",
      meta: { name: NAME },
      component: () =>
        import(/* webpackChunkName: "hello" */ "../views/add/add.vue"),
    },
    {
      path: "total",
      meta: { name: NAME },
      component: () =>
        import(/* webpackChunkName: "hello" */ "../views/total/index.vue"),
    },
    {
      path: "change/:id",
      meta: { name: NAME },
      component: () =>
        import(/* webpackChunkName: "hello" */ "../views/change/index.vue"),
    },
  ],
};
