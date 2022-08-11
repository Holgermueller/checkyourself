import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index";
import About from "../components/About";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: index },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;
