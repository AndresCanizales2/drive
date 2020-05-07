import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import iniciosesion from "../views/paginainicial.vue"
import Registro from "../views/registrarse.vue"
import codigo from "../views/codigo.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/iniciosesion",
    name: "iniciosesion",
    component: iniciosesion
  },

  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro

  },
  {
    path: "/codigo",
    name: "codigo",
    component: codigo
  },
];

const router = new VueRouter({
  routes
});

export default router;
