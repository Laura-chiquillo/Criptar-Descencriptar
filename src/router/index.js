import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import login from "../views/login.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: login,
  },
  {
    path: "/SingUp",
    name: "SingUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
