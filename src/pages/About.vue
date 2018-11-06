<template>
  <section>
    <div class="content">
      <h2>Entretien avec moi-même</h2>
      <h4>Comment vous êtes vous lancé dans l'informatique ?</h4>
      <p>C'est venu petit à petit, j'aimais bien les maths donc je suis
          allé en fac de mathématiques ou j'ai découvert l'informatique et
          la programmation. Je n'ai jamais cessé vouloir progresser et
          apprendre des nouvelles choses depuis.</p>
      <h4>Pourquoi devenir freelance ?</h4>
      <p>Après 6 années en tant que salarié dont quatre en tant que développeur
        web dans des start-ups j'ai eu envie de faire plus. De pouvoir choisir
        mon lieu de travail, mes clients et varier mes taches au quotidien.</p>
      <h4>Pourquoi vous choisir vous plutôt qu'un autre ?</h4>
      <p>Je dirai que mes points fort sont l’écoute et l'ouverture d'esprit pour
        envisager plusieurs approches afin de trouver
        la solution optimale pour répondre au mieux au besoin du client.</p>
      <h4>Et votre temps libre ?</h4>
      <p>J'aime la mer et la bretagne. Surtout le finistere nord pour son
        calme, ses grandes plages sauvages et la possibilité de surfer
        occasionnellement.</p>
    </div>
    <div class="content recommandation">
      <h2>Ce qu'ils en disent</h2>
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

          <p>
            "Jocelyn est venu renforcer notre équipe back-office Python/Django
            et a su rapidement prendre en main notre serveur de produits.
            Son goût pour la découverte de nouvelles technologies (Scrapy,
            Docker, ELK, VueJS) fait de lui un explorateur avisé. Ses talents
            de développeur et sa bonne humeur lui présagent un bel avenir dans
            le freelance !"
          </p>
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
          <p>
            "Jocelyn a été notre premier recrutement et nous a permis de
            construire la première génération du code qui a rendu Alexandria
            rentable dès ses premières heures. Sa connaissance du langage Python,
            son professionnalisme et sa bonne humeur ont toujours été appréciée
            par l'ensemble de l'équipe."
          </p>
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
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 3%;
  margin-bottom: 3%;
  position: relative;
}
.content {
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
