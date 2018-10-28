<template>
  <section>
        <div class="tabs is-medium">
          <ul>
            <li v-on:click="activeFilter=filter.name"
                v-for="filter in filters"
                :class="[filter.class, activated(filter.name)]">
              <a>{{ filter.name }}</a>
            </li>
          </ul>
        </div>
        <transition-group
          name="skill"
          tag="div"
          class="skills">
          <div :key="skill.name" v-for="skill in filteredSkills">
            <figure class="image"><img :src="skill.src" :alt="skill.name"></figure>
          </div>
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
        {name: 'Tous', class: ''},
        {name: 'Backend', class: 'is-success'},
        {name: 'Ops', class: 'is-warning'},
        {name: 'Frontend', class: 'is-primary'},
        {name: 'Outils', class: 'is-link'}
      ],
      skills : [],
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
      {name: "Rest", value: 80, filter: this.filters[1], src:getImgUrl("rest")},
      {name: "GitHub", value: 80, filter: this.filters[4], src:getImgUrl("github")},
      {name: "GitLab", value: 80, filter: this.filters[4], src:getImgUrl("gitlab")},
      {name: "Postgresql", value: 80, filter: this.filters[1], src:getImgUrl("postgresql")},
      {name: "Scrapy", value: 70, filter: this.filters[1], src:getImgUrl("scrapy")},
      {name: "Mongodb", value: 10, filter: this.filters[1], src:getImgUrl("mongodb")},
      {name: "Amazon Web Services", value: 10, filter: this.filters[2], src:getImgUrl("amazon")},
      {name: "Docker", value: 60, filter: this.filters[2], src:getImgUrl("docker")},
      {name: "Vuejs", value: 60, filter: this.filters[3], src:getImgUrl("vue")},
      {name: "Netlify", value: 60, filter: this.filters[2], src:getImgUrl("netlify")},
      {name: "Heroku", value: 70, filter: this.filters[2], src:getImgUrl("heroku")},
      {name: "React", value: 10, filter: this.filters[3], src:getImgUrl("react")},
      {name: "Elastic Stack", value: 60, filter: this.filters[1], src:getImgUrl("elk")},
      {name: "Css", value: 30, filter: this.filters[3], src:getImgUrl("css")},
      {name: "Html", value: 70, filter: this.filters[3], src:getImgUrl("html")},
      {name: "Trello", value: 70, filter: this.filters[4], src:getImgUrl("trello")},
      {name: "Kubernetes", value: 70, filter: this.filters[2], src:getImgUrl("kubernetes")}
    ];
  },
  methods: {
    activated(filter) {
      if(filter==this.activeFilter)
      return "is-active"
    }
  },
  computed: {
    filteredSkills: function() {
			var vm = this;
			var filter = vm.activeFilter;

			if(filter === "Tous") {
				return vm.skills;
			} else {
				return vm.skills.filter(function(skill) {
					return skill.filter.name === filter;
				});
			}
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
  align-content: flex-start;
  justify-content: center;
}

/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.skill-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.skill-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.skill-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.skill-enter,
.skill-leave-to {
  opacity: 0;
}

figure {
  margin-right: 40px;
  height: 76px;
  width: 128px;
}

figure:hover {
  -webkit-animation: bounce 1s;
  animation: bounce 1s;
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
