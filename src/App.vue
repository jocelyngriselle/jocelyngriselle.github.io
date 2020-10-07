<template>
  <div id="app">
    <NavBar/>
    <transition enter-active-class="animated zoomIn" mode="out-in">
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



body, html {
  height: 100%;
  font-family: 'system-ui', 'Didact Gothic', sans-serif;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
section {
  display: flex;
  flex: 1;
  align-content: center;
}
a {
  text-decoration: none;
}

a:hover {
  color: #23D160;
}
</style>
