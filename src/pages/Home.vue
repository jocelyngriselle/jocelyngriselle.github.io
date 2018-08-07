<template>
<section class="section is-medium">
  <div class="container">
    <div class="title">
      <h1>Jocelyn Griselle, Développeur Fullstack Freelance</h1>
      <h2>Réalise vos projets <strong>Web</strong> dans vos locaux sur <strong>Nantes</strong> ou en télétravail.</h2>
    </div>
    <div class="container">
      <div class="card-deck">
        <div class="card">
          <h5 class="card-header">Automatisation de tâches</h5>
          <div class="card-body">
            <p class="card-text">Automatisation, traitement de fichiers, tâches d'administrations etc, <a href="https://www.python.org/" target="blanck">Python</a> peut tout faire!</p>
          </div>
          <figure class="card-img-top" :style="{'background-image': `url(${require('../assets/python.png')})`}"></figure>
        </div>
        <div class="card">
          <h5 class="card-header">Sites Web sur mesure</h5>
          <div class="card-body">
            <p class="card-text">Vous avez besoin d'un site sécurisé et avec une logique bien particulière ? <a href="https://www.djangoproject.com/" target="blanck">Django</a> est la pour vous!</p>
          </div>
                    <figure class="card-img-top" :style="{'background-image': `url(${require('../assets/django.png')})`}"></figure>

        </div>
        <div class="card">
          <h5 class="card-header">Pages Web dynamiques</h5>
          <div class="card-body">
            <p class="card-text"><a href="https://vuejs.org/" target="blanck">Vue js</a> permet de créer de jolies pages dynamiques pour vos application web.</p>
          </div>
                    <figure class="card-img-top" :style="{'background-image': `url(${require('../assets/vue.png')})`}"></figure>

        </div>
        <div class="card">
          <h5 class="card-header">Extraction de données</h5>
          <div class="card-body">
            <p class="card-text">Besoin d'extraire les données du Web ? Rien de plus facile avec <a href="https://scrapy.org/" target="blanck">Scrapy</a> !</p>
          </div>
                    <figure class="card-img-top" :style="{'background-image': `url(${require('../assets/scrapy.png')})`}"></figure>

        </div>
        <div class="card">
          <h5 class="card-header">Stockage de données</h5>
          <div class="card-body">
            <p class="card-text">Besoin de stocker des données relationnelles ? <a href="https://www.postgresql.org/" target="blanck">Postgresql</a> est la pour vous!</p>
          </div>
                    <figure class="card-img-top" :style="{'background-image': `url(${require('../assets/postgresql.png')})`}"></figure>

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
figure {
  background-repeat : no-repeat;
  background-size: contain;
  background-position: center; 
  border: 10px solid white;
  margin-bottom: 10px;
}
.card-header {
  background-color: #c4dfe6;
  margin-bottom: 10px;
}
.card-body {
  padding-top: 3px;
  padding-bottom: 0px;
}
.card-img-top {
  height: 50px;
}

</style>
