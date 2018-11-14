<template>
  <section>
    <div class="content">
      <h2>Jocelyn, 30 ans, développeur</h2>
      <div class="card">
        <div class="card-content">
      <p>J'aime <em>Python</em>, j'aime le <em>web</em>, j'aime apprendre et partager.</p>
      <p>Après un <em>diplôme d'ingénieur en Informatique et
        télécommunications</em> à Rennes c'est par passion que je me
        suis lancé dans la programmation web en 2014. Après maintenant <em>4 années en tant
        que développeur web au sein de différentes start ups</em>, je me lance à mon compte
        pour varier mes missions et mes clients.</p>
      <p>Vous pourrez me rencontrer parfois à quelques <em>Meetups</em> sur Nantes (Python, Vuejs notamment).
        Je projette également d'ouvrir un <em>blog</em>,
        participer à de l'<em>open source</em> et devenir <em>Mentor
        OpenClassroom Python</em>.</p>
        <p>N'hésitez pas à me contacter pour toute demande!</p>
        <p>Jocelyn</p>
      </div>
    </div>
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
  flex-grow: 1;
  flex-basis: 50%;
  padding-right: 50px;
}
.content figure {
  margin-left: 0;
  margin-right: 0;
}
.recommandation {
  flex-grow: 1;
  flex-basis: 50%;
}
em {
  color: #23D160;
}
h4 {
  color: #23D160;
}
.subtitle {
  font-weight: bold;
  color: #23D160;
}
</style>
