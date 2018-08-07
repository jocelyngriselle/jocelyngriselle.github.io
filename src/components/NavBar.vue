<template>
  <b-navbar :sticky="true" toggleable="md">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#"><router-link class="navbar-item" to="/home">Acceuil</router-link></b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item href="#" disabled></b-nav-item>
      <b-nav-item href="#" disabled><router-link class="navbar-item" to="/about">A propos</router-link></b-nav-item>
      <b-nav-item href="#" disabled><router-link class="navbar-item" to="/portofolio">Portofolio</router-link></b-nav-item>
      <b-nav-item href="#" disabled><router-link class="navbar-item" to="/contact">Contact</router-link></b-nav-item>
    </b-navbar-nav>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .navbar {
    background-color: #003b46;
    color: white;
    padding:10px;
  }
  .navbar-item {
    color: white;
  }

</style>
