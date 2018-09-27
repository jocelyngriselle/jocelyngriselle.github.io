<template>
  <div id="app">
    <NavBar/>
    <transition enter-active-class="animated fadeInLeft">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from "./components/NavBar";
import Side from "./components/Side";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faUser)
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
html, body, #app {
}

#app {
  font-family: 'Didact Gothic', sans-serif;
}

section {
  display: flex;
  margin-top: 30px;
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
