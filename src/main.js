// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Skills from './pages/Skills.vue'
import Portofolio from './pages/Portofolio.vue'
import Contact from './pages/Contact.vue'
import './../node_modules/bulma/css/bulma.css';
import './../node_modules/animate.css/animate.min.css';
import './../node_modules/@fortawesome/fontawesome/styles.css'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/portofolio', component: Portofolio },
  { path: '/contact', component: Contact }
]
const router = new VueRouter({
  routes,
  linkExactActiveClass: 'is-active',
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
});
