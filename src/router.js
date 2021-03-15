import Vue from "vue"
import VueRouter from "vue-router"
import vueRouter from "vue-router"
import AboutPage from "./views/about.vue"
import ContactPage from "./views/contact.vue"
import StartProjectPage from "./views/startProject.vue"
import SigninPage from "./views/signin.vue"
import SignupPage from "./views/signup.vue"
import Homepage from "./views/home.vue"

Vue.use(vueRouter);

const routes = [
    {path: '/', component: Homepage},
    {path: '/about', component: AboutPage},
    {path: '/contact', component: ContactPage},
    {path: '/start', component: StartProjectPage},
    {path: '/signin', name:"signin", component: SigninPage},
    {path: '/signup', name:"signup", component: SignupPage}
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,})