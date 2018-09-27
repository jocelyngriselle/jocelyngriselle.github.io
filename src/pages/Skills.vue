<template>
  <section>
    <div class="columns is-vcentered">
      <div class="column">
        <div class="tabs is-medium">
          <ul>
            <li v-on:click="activeFilter=filter.name" v-for="filter in filters" :class="[filter.class, activated(filter.name)]">
              <a>{{ filter.name }}</a>
            </li>
          </ul>
        </div>
          <transition-group
            tag="ul"
            leave-active-class="animated slideOutLeft"
            enter-active-class="animated slideInLeft"
            move-class="animated slideInUp">
            <li :key="skill.name" v-for="skill in storeFilter(activeFilter)">
              <p class="level-left">{{ skill.name }}</p>
              <progress v-bind:class="skill.filter.class" class="progress" :value="skill.value" max="100"></progress>
            </li>
          </transition-group>
      </div>
      <div class="column has-text-centered content">
        <h1>Ce que je peux faire pour vous:</h1>
        <p>Creer un site Web sur mesure</p>
        <p>Maintenir une API pour mobile</p>
        <p>Creer une Datavizualisation sur le Web</p>
        <p>Extraire des données de milliers de sites web</p>
        <p>Auditer un site web</p>
        <p></p>
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
        }, {
          name: 'Ops',
          class: 'is-link'
        }, {
          name: 'Mobile',
          class: 'is-warning'
        }, {
          name: 'Outils',
          class: 'is-info'
        }
      ],
      skills : []
    }
  },
  created() {
    this.skills = [
      {name: "Python", value: 80, filter: this.filters[1]},
      {name: "Django", value: 80, filter: this.filters[1]},
      {name: "Git", value: 80, filter: this.filters[5]},
      {name: "Postgresql", value: 80, filter: this.filters[1]},
      {name: "Scrapy", value: 70, filter: this.filters[1]},
      {name: "Méthode Agile", value: 70, filter: this.filters[5]},
      {name: "Html", value: 70, filter: this.filters[2]},
      {name: "Docker", value: 60, filter: this.filters[3]},
      {name: "Vuejs", value: 60, filter: this.filters[2]},
      {name: "Javascript", value: 60, filter: this.filters[2]},
      {name: "Css", value: 30, filter: this.filters[2]},
      {name: "Mongodb", value: 10, filter: this.filters[1]},
      {name: "React native", value: 10, filter: this.filters[4]}
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
