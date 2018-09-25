<template>
  <section>
    <figure class="image is-128x128"><img class="is-rounded" src="../assets/me_head.jpg"></figure>
    <article class="content is-medium">
      <h3>Bonjour, je suis <em>Jocelyn Griselle</em>, développeur
        <em>web</em> fullstack <em>freelance</em>. </h3>
      <h4>"lalaallalalal lala lal lala l lala
        <em>Python</em> lalaallalalalalal lala lala lal lala l lala <em>Nantes</em>.
        lalala a lallalalal la <em>Javascript</em> lalaallalalal la l lala lala lal lala l lala"</h4>
    </article>
  </section>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
article {
  flex: 2.5;
  margin-left: 20px;
}
figure {
  flex: 1;
}
em {
  color: #23D160;
}
</style>
