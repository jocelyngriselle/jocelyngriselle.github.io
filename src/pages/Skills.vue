<template>
  <section >
    <div class="columns">
      <div class="column is-three-fifths">
        <div class="tabs is-medium">
          <ul>
            <li v-on:click="activeFilter=filter.name" v-for="filter in filters" :class="[filter.class, activated(filter.name)]">
              <a>{{ filter.name }}</a>
            </li>
          </ul>
        </div>
        <transition-group
          tag="div"
          class="skills"
          leave-active-class="animated fadeOut"
          enter-active-class="animated fadeIn"
          move-class="animated slideInUp">
          <div :key="skill.name" v-for="skill in storeFilter(activeFilter)">
            <figure class="image"><img :src="skill.src" :alt="skill.name"></figure>
          </div>
        </transition-group>
      </div>
      <div class="column has-text-centered is-vcentered is-two-fifths">
        <div class="content">
          <h1>Ce que je peux faire pour vous:</h1>
          <li>Créer un site Web sur mesure</li>
          <li>Maintenir une API pour appication Web/Mobile</li>
          <li>Creer une Datavizualisation sur le Web</li>
          <li>Extraire des données de milliers de sites Web</li>
          <li>Donner une formation Web / Python</li>
          <li>Auditer votre site Web</li>
        </div>
        <div class="content">
          <h1>Sans oublier l'humain:</h1>
          <li>Agilité</li>
          <li>Trasparence</li>
          <li>Communication</li>
          <li>Bonne humeur</li>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data () {
    return {
      activeFilter: 'Tous',
      filters: [
        {
          name: 'Tous',
          class: ''
        }, {
          name: 'Backend',
          class: 'is-success'
        }, {
          name: 'Frontend',
          class: 'is-primary'
        },
        {
          name: 'Frontend',
          class: 'is-info'
        },
        {
          name: 'Frontend',
          class: 'is-info'
        }
      ],
      skills : []
    }
  },
  created() {
    var images = require.context('../assets/', false, /\.png$/)
    function getImgUrl(skill) {
      return images('./' + skill + ".png")
    }
    this.skills = [
      {name: "Python", value: 80, filter: this.filters[1], src:getImgUrl("python")},
      {name: "Django", value: 80, filter: this.filters[1], src:getImgUrl("django")},
      {name: "Flask", value: 80, filter: this.filters[1], src:getImgUrl("flask")},
      {name: "Git", value: 80, filter: this.filters[5], src:getImgUrl("github")},
      {name: "Postgresql", value: 80, filter: this.filters[1], src:getImgUrl("postgresql")},
      {name: "Scrapy", value: 70, filter: this.filters[1], src:getImgUrl("scrapy")},
      {name: "Mongodb", value: 10, filter: this.filters[1], src:getImgUrl("mongodb")},
      {name: "Amazon Web Services", value: 10, filter: this.filters[1], src:getImgUrl("amazon")},
      {name: "Docker", value: 60, filter: this.filters[3], src:getImgUrl("docker")},
      {name: "Vuejs", value: 60, filter: this.filters[2], src:getImgUrl("vue")},
      {name: "Heroku", value: 70, filter: this.filters[2], src:getImgUrl("heroku")},
      {name: "React", value: 10, filter: this.filters[4], src:getImgUrl("react")},
      {name: "Elastic Stack", value: 60, filter: this.filters[3], src:getImgUrl("elk")},
      {name: "Css", value: 30, filter: this.filters[2], src:getImgUrl("css")},
      {name: "React native", value: 10, filter: this.filters[4], src:getImgUrl("reactnative")},
      {name: "Html", value: 70, filter: this.filters[2], src:getImgUrl("html")},
      {name: "Kubernetes", value: 70, filter: this.filters[2], src:getImgUrl("kubernetes")},


    ]
  },
  methods: {
    activated(filter) {
      if(filter==this.activeFilter)
      return "is-active"
    },
    storeFilter(filter) {
      const res = this.skills
      if (filter && filter!='Tous') {
        return this.skills.filter(skill => skill.filter.name === filter);
      }
      return res
    }
  }
}
</script>

<style scoped>
section {
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  margin-top: 5%;
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
}

figure {
  margin-right: 20px;
  height: 76px;
  width: 128px;
}

figure:hover {
  -webkit-animation: bounce 1s;
  animation: bounce 1s;
}
.flip-list-move {
  transition: transform 1s;
}

.tabs li a {color: black;}
.tabs li.is-active a {border-bottom-color: black;}

.tabs li.is-success:hover a {border-bottom-color: #23D160;}
.tabs li.is-active.is-success a {color: #23D160;border-bottom-color: #23D160;}

.tabs li.is-info:hover a {border-bottom-color: #209CEE;}
.tabs li.is-active.is-info a {color: #209CEE;border-bottom-color: #209CEE;}

.tabs li.is-primary:hover a {border-bottom-color: #00D1B2;}
.tabs li.is-active.is-primary a {color: #00D1B2;border-bottom-color: #00D1B2;}

.tabs li.is-link:hover a {border-bottom-color: #3273DC;}
.tabs li.is-active.is-link a {color: #3273DC;border-bottom-color: #3273DC;}

.tabs li.is-warning:hover a {border-bottom-color: #FFDD57;}
.tabs li.is-active.is-warning a {color: #FFDD57;border-bottom-color: #FFDD57;}
</style>
