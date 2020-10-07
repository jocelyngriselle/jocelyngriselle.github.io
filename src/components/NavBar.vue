<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <div class="navbar-item" title="Envoyer un mail">
        <a target="blank" href="mailto:jocelyn@griselle.io">
          <font-awesome-icon
            size="lg"
            icon="envelope"
          />
        </a>
      </div>
        <div class="navbar-item" title="Aller sur le profil LinkedIn">
        <a target="blank" href="https://www.linkedin.com/in/jocelyngriselle/">
          <font-awesome-icon
            size="lg"
            :icon="{ prefix: 'fab', iconName: 'linkedin' }"
          />
        </a>
      </div>
        <div class="navbar-item" title="Aller sur le profil Twitter">
        <a target="blank" href="https://twitter.com/jocelyngriselle">
          <font-awesome-icon
            size="lg"
            :icon="{ prefix: 'fab', iconName: 'twitter' }"
          />
        </a>
      </div>
      <div class="navbar-item" title="Aller sur le profil GitHub">
        <a target="blank" href="https://github.com/jocelyngriselle">
          <font-awesome-icon
            size="lg"
            :icon="{ prefix: 'fab', iconName: 'github'}"
          />
        </a>
      </div>
      <div class="navbar-item" title="Télécharger le CV">
        <a download href="/static/cv.pdf">
          <font-awesome-icon
            size="lg"
            icon="file"
          />
        </a>
      </div>
      <div class="navbar-burger burger"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/home">Home</router-link>
        <router-link class="navbar-item" to="/skills">Compétences</router-link>
        <!--<router-link class="navbar-item" to="/portofolio">Réalisations</router-link>-->
        <router-link class="navbar-item" to="/about">A propos</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
      return {
       showNav: false,
     }
   }
}
</script>

<style scoped>
nav {
  width: 100%;
   font-size: large;
   background-color: white;
   z-index: 1;
}
.navbar-menu {
  margin-right: 30px;
}

navbar-item svg:hover {
  fill: #23D160;
}

a.navbar-item.is-active, .navbar-link.is-active {
  color: #23D160;
}
a.navbar-item:hover {
    color: #23D160;
}
a:hover {
  color: #23D160;
}

svg {
  color: black;
}

svg:hover {
  fill: #23D160;
  color: #23D160;
}

strong {
  font-size: x-large;
}
</style>
