import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/entry",
    name: "entry",
    redirect: "/entry/question",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/entry.vue"),
    children: [
      {
        path: 'question',
        component: () =>
          import("../components/question")
      },
      {
        path: 'article',
        component: () =>
          import("../components/article")
      }
    ]
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
