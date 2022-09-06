import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: 'fazemos' }

  },
  {
    path: "/fazemos",
    name: "fazemos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fazemos.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: "/contato",
    name: "contato",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contato.vue"),
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
