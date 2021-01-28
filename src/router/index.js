import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/Todos.vue";
import About from "../views/About.vue";
import AddTodo from "../views/AddTodo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/about",
    name: "About",
    component: About,
 
  },
  {
    path: "/addtodo",
    name: "AddTodo",
    component: AddTodo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
