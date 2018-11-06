<template>
  <section>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/valoo.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Moteur d'indexation de produit</strong> @VALOO - 2018
            <br>
            Développement d'un système distribué scalable permettant de référencer et mettre à jour 15 millions de
            produits sur des sites marchands ( Fnac, Decathlon, Ikea etc) et du webservice associé permettant de chercher parmis ces produits.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="tag is-success">Python</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">DjangoRestFramework</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Scrapy</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Elastic</span>
            </a>
            <a class="level-item">
              <span class="tag is-warning">Docker</span>
            </a>
            <a class="level-item">
              <span class="tag is-warning">Kubernetes</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/valoo.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Outil Web de tagging produit</strong> @VALOO - 2018
            <br>
            Développement d'une page web permettant de chercher et tagger
            dynamiquement des produits selon leur catégorie ( smartphone, TV, vélo etc)
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="tag is-primary">Vue JS</span>
            </a>
            <a class="level-item">
              <span class="tag is-primary">Javascript</span>
            </a>
            <a class="level-item">
              <span class="tag is-primary">Boostrap</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Django</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/valoo.jpg">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Plateforme Web d'inventaire et services</strong> @VALOO - 2017
            <br>
            Développement du site web permettant d'inventoriser ses objets et
            de les gérer (assurer / vendre etc)
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="tag is-success">Python</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Django</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Postgresql</span>
            </a>
            <a class="level-item">
              <span class="tag is-warning">Heroku</span>
            </a>
            <a class="level-item">
              <span class="tag is-primary">Bootstrap</span>
            </a>
          </div>
        </nav>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/alexandria.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Moteur de comparaison de prix</strong> @ALEXANDRIA - 2016
            <br>
            Création d’un système de surveillance et mise à jour dynamique de
            prix de produits Amazon
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="tag is-success">Python</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Redis</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">AWS</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">SQL</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/alexandria.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Site Web interne</strong> @ALEXANDRIA - 2015
            <br>
            Développement d’outils web internes de gestion des stocks et relations clients
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="tag is-success">Python</span>
            </a>
            <a class="level-item">
              <span class="tag is-success">Django</span>
            </a>
            <a class="level-item">
              <span class="tag is-primary">JQuery</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/onera.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Ingénieur étude et developpement</strong> @ONERA - 2014
            <br>
            Définition de l'architecture d'un radar longue portée (30 serveurs -
            30 switchs - 1500 équipements électroniques), développement
            d'applications temps réel de traitements distribués de données et
            développement de scripts d'administration et d'analyse de performances.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="tag is-success">Python</span>
            </a>
            <a class="level-item">
              <span class="tag is-danger">C</span>
            </a>
            <a class="level-item">
              <span class="tag is-danger">Traitement du signal</span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Portofolio"
}
</script>

<style scoped>
section {
  justify-content: left;
  align-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  width: 70%;
  margin-top: 3%;
  margin-bottom: 3%;
  position: relative;
}

.card {
  margin-top: 20px;
  max-width: 250px;
}
</style>
