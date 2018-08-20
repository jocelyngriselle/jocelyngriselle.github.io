<template>
  <div id="app">
    <NavBar/>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInLeft">
      <router-view/>
    </transition>
    <vue-particles
      color="#003b46"
      :particleOpacity="1"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="2"
      linesColor="#003b46"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="1"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="true"
      clickMode="push"
    />
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the specific imported icons
library.add(faEnvelope)
library.add(faUser)
library.add(faLinkedin)
library.add(faTwitter)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: 'App',
  components: {
    Footer,
    NavBar,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Didact+Gothic');
  
  html,
  body {
    margin:0;
    padding:0;
    height:100%;
  }

  #app {
    font-family: 'Didact Gothic', sans-serif;
    min-height:110%;
    position:relative;
  }

  section {
    padding:10px;
    padding-bottom:60px;   /* Height of the footer */
  }

  .card, .card-deck {
    margin-bottom : 30px; 
  }

  canvas {
  }

  #particles-js {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .title {
    text-align: center;
    color: #003b46;
    margin: auto;
    padding: 30px;
    }
</style>
