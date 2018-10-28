<template>
  <section class="container">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Valoo</p>
            <p class="subtitle is-6">
              <a href="https://www.valoo.com" target="blank">valoo.com</a>
            </p>
          </div>
        </div>

        <div class="content">
          Développement du site internet et de ses fonctionnalitées.<br/>
          <a href="#">#Django</a> <a href="#">#Python</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Valoo Indexation</p>
            <p class="subtitle is-6">
              <a href="https://www.valoo.com" target="blank">valoo.com</a>
            </p>
          </div>
        </div>
        <div class="content">
          Mise en place d'un microservice d'indexation des informations produits et d'une
          API pour que les autres microservices puissent acceder à ces informations.<br/>
          <a href="#">#Django</a>
          <a href="#">#Docker</a>
          <a href="#">#Scrapy</a>
          <a href="#">#Elastic</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Valoo Tagging</p>
            <p class="subtitle is-6"><a href="https://www.valoo.com" target="blank">valoo.com</a></p>
          </div>
        </div>

        <div class="content">
          Mise en place d'une interface web outil de tagging de produit pour
          améliorer la pertinence du moteur de recherche et constituer une
          base d'apprentissage pour du Machine Leaning.<br/>
          <a href="#">#Vuejs</a>
          <a href="#">#Javascript</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Alexandria</p>
            <p class="subtitle is-6"></p>
          </div>
        </div>
        <div class="content">
          Mise en place d'une plateforme d'indexation de prix sur Amazon.<br/>
          <a href="#">#Amazon Web Services</a>
          <a href="#">#Python</a>
          <a href="#">#Sql</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Alexandria</p>
            <p class="subtitle is-6"></p>
          </div>
        </div>
        <div class="content">
          Mise en place d'une plateforme de reception de commandes et gestion de stocks.<br/>
          <a href="#">#Python</a> <a href="#">#Django</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portofolio"
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 3%;
}

.card {
  margin-top: 20px;
  max-width: 250px;
}
</style>
