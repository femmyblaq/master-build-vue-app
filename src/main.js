import Vue from "vue";
import App from "./App.vue";
import { routes } from "./router";
import store from "./store";
import VueRouter from "vue-router";
import Notifications from "vue-notification";
import instance from "./auth_store";
import showAlert from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(showAlert);

let token = localStorage.getItem("salt");
if (token) {
  instance.defaults.headers.common["Authorization"] = token;
}
// console.log("Routes >>>", router);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token === null) {
      next("/signin");
    } else {
      next();
    }
  }

  if (to.matched.some((record) => record.meta.redirectIfLoggedIn)) {
    if (token !== null) {
      next("/dashboard");
    } else {
      next();
    }
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    .forEach((tag) => document.head.appendChild(tag));
  next();
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
