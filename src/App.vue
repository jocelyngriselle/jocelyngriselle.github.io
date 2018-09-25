<template>
  <div id="app">
    <NavBar/>
    <transition enter-active-class="animated fadeInLeft">
      <router-view/>
    </transition>
    <Side/>
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
html {
  /*background-image: url("assets/background.jpg");*/
  background-attachment:fixed;
  height:100%;
}

#app {
  font-family: 'Didact Gothic', sans-serif;
}
section  {
  /*background-color: lightblue;*/
  margin-top: 10%;
  margin-left: 10%;
  display: flex;
  max-width: 70%;
  max-height: 80%;
  flex-direction: row;
  margin-bottom: 20px;

}
a {
  text-decoration: none;
}
a:hover {
  color: green;
}
</style>
