<template>
  <section>
    <div class="tabs is-medium">
      <ul>
        <li v-on:click="activeFilter=filter.name" v-for="filter in filters" :class="[filter.class, activated(filter.name)]">
          <a>{{ filter.name }}</a>
        </li>
      </ul>
    </div>
      <transition-group tag="ul" leave-active-class="animated fadeOutRight" enter-active-class="animated fadeInLeft delay-2s">
        <li :key="skill.name" v-for="skill in storeFilter(activeFilter)">
          <p class="level-left">{{ skill.name }}</p>
          <progress v-bind:class="skill.filter.class" class="progress" :value="skill.value" max="100"></progress>
        </li>
      </transition-group>
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
  width: 90%;
  flex-direction: column;
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
