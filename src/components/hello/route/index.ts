/** define */
import { NAME } from "../define";

export default {
  path: NAME,
  name: NAME,
  component: () => import(/* webpackChunkName: "helloworld" */ "../index.vue"),
  meta: { name: NAME },
  redirect: `/main/${NAME}/home`,
  children: [
    {
      path: "home",
      meta: { name: NAME },
      component: () =>
        import(/* webpackChunkName: "helloworld" */ "../home.vue"),
    },
    {
      path: "add",
      meta: { name: NAME },
      component: () =>
        import(/* webpackChunkName: "helloworld" */ "../views/add/add.vue"),
    },
  ],
};
