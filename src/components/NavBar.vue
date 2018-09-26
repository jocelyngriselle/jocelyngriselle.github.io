<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <div class="navbar-item">
        <a target="blank" href="mailto:jocelyn@griselle.io">
          <font-awesome-icon
            size="lg"
            icon="envelope"
            :style="{ color: 'black' }"
          />
        </a>
      </div>

        <div class="navbar-item">
        <a target="blank" href="https://www.linkedin.com/in/jocelyngriselle/">
          <font-awesome-icon
            size="lg"
            :icon="{ prefix: 'fab', iconName: 'linkedin' }"
            :style="{ color: 'black' }"
          />
        </a>
      </div>

        <div class="navbar-item">
        <a target="blank" href="https://twitter.com/jocelyngriselle">
          <font-awesome-icon
            size="lg"
            :icon="{ prefix: 'fab', iconName: 'twitter' }"
            :style="{ color: 'black' }"
          />
        </a>
      </div>

        <div class="navbar-item">
        <a target="blank" href="https://github.com/jocelyngriselle">
          <font-awesome-icon
            size="lg"
            :icon="{ prefix: 'fab', iconName: 'github'}"
            :style="{ color: 'black' }"
          />
        </a>

      </div>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/home">Home</router-link>
        <router-link class="navbar-item" to="/about">A propos</router-link>
        <router-link class="navbar-item" to="/skills">Compétences</router-link>
        <router-link class="navbar-item" to="/portofolio">Portofolio</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
nav {
   font-size: large;
   background-color: inherit;
}
.navbar-menu {
  margin-right: 30px;
}
a.navbar-item.is-active, .navbar-link.is-active {
  color: #23D160;
}
a:hover {
  color: #23D160;
}
strong {
  font-size: x-large;
}
</style>
