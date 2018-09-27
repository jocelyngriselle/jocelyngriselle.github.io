<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
                <h1 class="title is-2">
                  Jocelyn Griselle
                </h1>
                <h2 class="subtitle is-4">
                  Développeur <em>Python</em> &
                  <em>Web</em> fullstack <br/>freelance
                   sur <em>Nantes</em>.
                </h2>
                <br>
                <p><router-link to="/contact"><a class="button is-medium is-success is-outlined">Rencontrons-nous</a></router-link></p>
            </div>
            <div class="column">
                <figure class="image is-4by3">
                    <img src="../assets/me.jpg" alt="Description">
                </figure>
            </div>

          </div>
      </div>
    </div>
</section>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

img {
  padding: 5px;
  border: 1px solid #ccc;
}
em {
  color: #23D160;
}
</style>
