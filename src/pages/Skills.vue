<template>
  <section>
    <div class="tabs is-medium is-centered">
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
        <a :href="skill.url" target="_blank"><figure class="image"><img :src="skill.src" :alt="skill.name"></figure></a>
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
      {name: "Python", filter: this.filters[1], src:getImgUrl("python"), url:"https://www.python.org"},
      {name: "Django", filter: this.filters[1], src:getImgUrl("django"), url:"https://www.djangoproject.com/"},
      {name: "Vuejs", filter: this.filters[3], src:getImgUrl("vue"), url:"https://vuejs.org/"},
      {name: "Bulma", filter: this.filters[3], src:getImgUrl("bulma"), url:"https://bulma.io/"},
      {name: "Flask", filter: this.filters[1], src:getImgUrl("flask"), url:"http://flask.pocoo.org/"},
      {name: "Rest", filter: this.filters[1], src:getImgUrl("rest"), url:"https://www.django-rest-framework.org/"},
      {name: "Redis", filter: this.filters[1], src:getImgUrl("redis"), url:"https://redis.io/"},
      {name: "GitHub", filter: this.filters[4], src:getImgUrl("github"), url:"https://github.com/"},
      {name: "GitLab", filter: this.filters[4], src:getImgUrl("gitlab"), url:"https://about.gitlab.com/"},
      {name: "Postgresql", filter: this.filters[1], src:getImgUrl("postgresql"), url:"https://www.postgresql.org/"},
      {name: "Scrapy", filter: this.filters[1], src:getImgUrl("scrapy"), url:"https://scrapy.org/"},
      {name: "Mongodb", filter: this.filters[1], src:getImgUrl("mongodb"), url:"https://www.mongodb.com/fr"},
      {name: "Amazon Web Services", filter: this.filters[2], src:getImgUrl("amazon"), url:"https://aws.amazon.com/fr/"},
      {name: "Docker", filter: this.filters[2], src:getImgUrl("docker"), url:"https://www.docker.com/"},
      {name: "Netlify", filter: this.filters[2], src:getImgUrl("netlify"), url:"https://www.netlify.com/"},
      {name: "Heroku", filter: this.filters[2], src:getImgUrl("heroku"), url:"https://www.heroku.com/"},
      {name: "CircleCI", filter: this.filters[2], src:getImgUrl("circleci"), url:"https://circleci.com/"},
      {name: "Sentry", filter: this.filters[2], src:getImgUrl("sentry"), url:"https://sentry.io/welcome/"},
      {name: "React", filter: this.filters[3], src:getImgUrl("react"), url:"https://reactjs.org/"},
      {name: "Elastic Stack", filter: this.filters[1], src:getImgUrl("elk"), url:"https://www.elastic.co/fr/"},
      {name: "Boostrap", filter: this.filters[3], src:getImgUrl("bootstrap"), url:"https://getbootstrap.com/"},
      {name: "Css", filter: this.filters[3], src:getImgUrl("css"), url:"https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"},
      {name: "Html", filter: this.filters[3], src:getImgUrl("html"), url:"https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"},
      {name: "Trello", filter: this.filters[4], src:getImgUrl("trello"), url:"https://trello.com/"},
      {name: "Kubernetes", filter: this.filters[2], src:getImgUrl("kubernetes"), url:"https://kubernetes.io/"}
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
  justify-content: center;
  align-content: space-between;
  width: 70%;
  margin-top: 3%;
  position: relative;
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}

.skill-move {
  transition: all 600ms ease-in-out 50ms;
}
.skill-enter-active {
  transition: all 400ms ease-out;
}
.skill-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}
.skill-enter,
.skill-leave-to {
  opacity: 0;
}

figure {
  margin-right: 20px;
  margin-left: 20px;
  height: 76px;
  width: 128px;
  display: flex;
}
img {
  margin: auto;
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
