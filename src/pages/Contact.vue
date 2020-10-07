<template>
  <section>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img class="is-rounded" src="../assets/me_head.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Jocelyn Griselle</p>
            <p class="subtitle is-6"><a href="mailto:jocelyn@griselle.io">
              <font-awesome-icon
                size="lg"
                icon="envelope"
                :style="{ color: 'black' }"
              /> jocelyn@griselle.io</a></p>
          </div>
        </div>
        <div class="content">
          N'hésitez pas à me contacter pour toutes vos demandes.
          <div class="navbar-item">
            <a target="blank" href="https://www.linkedin.com/in/jocelyngriselle/">
              <font-awesome-icon
                size="lg"
                :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                :style="{ color: 'black' }"
              /> https://linkedin.com/jocelyngriselle
            </a>
          </div>
          <div class="navbar-item">
            <a target="blank" href="https://twitter.com/jocelyngriselle">
              <font-awesome-icon
                size="lg"
                :icon="{ prefix: 'fab', iconName: 'twitter' }"
                :style="{ color: 'black' }"
              /> https://twitter.com/jocelyngriselle
            </a>
          </div>
          <div class="navbar-item">
            <a target="blank" href=" https://github.com/jocelyngriselle">
              <font-awesome-icon
                size="lg"
                :icon="{ prefix: 'fab', iconName: 'github'}"
                :style="{ color: 'black' }"
              /> https://github.com/jocelyngriselle
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contact",
    }
</script>

<style scoped>
section {
  align-items: center;
  justify-content: center;
  align-content: center;
}
a {
  color: #23D160;
}
</style>
