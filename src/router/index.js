import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WriteGoal from "../views/WriteGoal.vue";
import KakaoCallback from "../views/KakaoCallback";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/write_goal",
    name: "WriteGoal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WriteGoal,
  },
  {
    path: "/callback/kakao",
    name: "KakaoCallback",
    component: KakaoCallback,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
