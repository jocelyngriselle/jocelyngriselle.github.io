// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portofolio from './pages/Portofolio.vue'
import Contact from './pages/Contact.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './../node_modules/animate.css/animate.min.css';
import './../node_modules/@fortawesome/fontawesome/styles.css'

Vue.use(VueParticles);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/portofolio', component: Portofolio },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
});
