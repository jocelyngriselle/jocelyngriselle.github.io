<template>
  <section class="section is-medium">
    <h1 id="title" class="title">Contact</h1>
    <div class="container card">
      <div class="card-body">
        <h5 class="card-title"><font-awesome-icon icon="user"/> Jocelyn Griselle</h5>
        <p class="card-text">N'hésitez pas à me contacter pour toutes vos demandes !</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><font-awesome-icon icon="envelope"/> jocelyn@griselle.io</li>
        <li class="list-group-item"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/><a target="blank" href="https://twitter.com/jocelyngriselle">  https://twitter.com/jocelyngriselle</a></li>
        <li class="list-group-item"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/><a target="blank" href="https://github.com/jocelyngriselle"> https//github.com/jocelyngriselle</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contact",
    }
</script>

<style scoped>
.card {
  max-width: 50%;
}
</style>
