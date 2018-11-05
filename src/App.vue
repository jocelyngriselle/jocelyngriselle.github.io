<template>
  <div id="app">
    <NavBar/>
    <transition enter-active-class="animated fadeInRight">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from "./components/NavBar";
import Side from "./components/Side";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faFile)
library.add(faLinkedin)
library.add(faTwitter)
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: 'App',
  components: {
    Side,
    NavBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Didact+Gothic');
@import url('bulma/css/bulma.css');
@import url('./../node_modules/animate.css/animate.min.css');
@import url('./../node_modules/@fortawesome/fontawesome/styles.css');

#app {
  font-family: 'Didact Gothic', sans-serif;
}
section {
  display: flex;
  top: 50px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: auto;
}
a {
  text-decoration: none;
}
navbar-item svg:hover {
  fill: #23D160;
}
a:hover {
  color: #23D160;
}
</style>
