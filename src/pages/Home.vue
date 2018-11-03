<template>
  <section class="hero">
    <div class="hero-body has-text-centered">
      <figure class="image">
        <img class="image is-rounded" src="../assets/me_head.jpg" alt="Description">
      </figure>
        <h1 class="title is-2">
          Jocelyn Griselle
        </h1>
        <h2 class="subtitle is-4">
          Développeur <em>Python</em> &
          <em>Web</em> fullstack <br/>freelance
           sur <em>Nantes</em>.
        </h2>
        <br>
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

.hero-body {
  text-align: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  display:flex;
  flex-direction: column;
}
img {
  padding: 5px;
  border: 1px solid #ccc;
}
em {
  color: #23D160;
}
</style>
