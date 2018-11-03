<template>
  <section class="container">
    <div class="article">
      <div class="card-content">
        <p class="subtitle">Comment vous êtes vous lancé dans l'informatique ?</p>
        <p class="content">C'est venu petit à petit, j'aimais bien les maths donc je suis
            allé en fac de mathématiques ou j'ai découvert l'informatique et
            la programmation. Je n'ai jamais cessé vouloir progresser et
            apprendre des nouvelles choses depuis.</p>
        <p class="subtitle">Pourquoi devenir freelance ?</p>
        <p class="content">Après 6 années en tant que salarié dont quatre en tant que développeur
          web dans des start ups j'ai eu envie de faire plus. De pouvoir choisir
          mon lieu de travail, mes clients et varier mes taches au quotidien.</p>
        <p class="subtitle">Pourquoi vous choisir vous plutôt qu un autre ?</p>
        <p class="content">Je dirai que mes points fort sont l’écoute et l'ouverture d'esprit pour
          envisager plusieurs approches pour trouver
          la solution optimale pour répondre au mieux au besoin du client.</p>
        <p class="subtitle">Et votre temps libre ?</p>
        <p class="content">J'aime la mer et la bretagne. Surtout le finistere nord pour son
          calme, ses grandes plages sauvages et la possibilité de surfer
          occasionnellement.</p>
      </div>
    </div>
    <div class="recommandation">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/marc.jpeg" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Jeremy Marc</p>
              <p class="subtitle is-6">CTO @VALOO</p>
            </div>
          </div>

          <div class="content">
            "Jocelyn est venu renforcer notre équipe back-office Python/Django
            et a su rapidement prendre en main notre serveur de produits.
            Son goût pour la découverte de nouvelles technologies (Scrapy,
            Docker, ELK, VueJS) fait de lui un explorateur avisé. Ses talents
            de développeur et sa bonne humeur lui présagent un bel avenir dans
            le freelance !"
          </div>
        </div>
      </div>
    </br>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../assets/baccelli.jpeg" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Nicolas Baccelli</p>
              <p class="subtitle is-6">CTO @ALEXANDRIA</p>
            </div>
          </div>
          <div class="content">
            "Jocelyn a été notre premier recrutement et nous a permis de
            construire la première génération du code qui a rendu Alexandria
            rentable dès ses premières heures. Sa connaissance du langage Python,
            son professionnalisme et sa bonne humeur ont toujours été appréciée
            par l'ensemble de l'équipe."
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

section {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

.article {
  flex-grow: 2;
  flex-basis: 60%;
}

.recommandation {
  flex-grow: 1;
  flex-basis: 40%;
}

.subtitle {
  font-weight: bold;
}
</style>
