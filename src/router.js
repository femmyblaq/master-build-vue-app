import Vue from "vue";
import VueRouter from "vue-router";
import AboutPage from "./views/about.vue";
import ContactPage from "./views/contact.vue";
import StartProjectPage from "./views/startProject.vue";
import SigninPage from "./views/signin.vue";
import SignupPage from "./views/signup.vue";
import Homepage from "./views/home.vue";
import DashboardPage from "./views/Dashbash/dashboard.vue";

Vue.use(VueRouter);

export const routes = [
  { path: "/", component: Homepage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/start", component: StartProjectPage },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: SigninPage,
    meta: {
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
    meta: {
      redirectIfLoggedIn: true,
    },
  },
];
