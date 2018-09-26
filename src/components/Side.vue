<template>
  <aside>
    <a target="blank" href="mailto:jocelyn@griselle.io">
      <font-awesome-icon
        size="lg"
        icon="envelope"
        :style="{ color: 'black' }"
      />
    </a>
    <a target="blank" href="https://www.linkedin.com/in/jocelyngriselle/">
      <font-awesome-icon
        size="lg"
        :icon="{ prefix: 'fab', iconName: 'linkedin' }"
        :style="{ color: 'black' }"
      />
    </a>
    <a target="blank" href="https://twitter.com/jocelyngriselle">
      <font-awesome-icon
        size="lg"
        :icon="{ prefix: 'fab', iconName: 'twitter' }"
        :style="{ color: 'black' }"
      />
    </a>
    <a target="blank" href="https://github.com/jocelyngriselle">
      <font-awesome-icon
        size="lg"
        :icon="{ prefix: 'fab', iconName: 'github'}"
        :style="{ color: 'black' }"
      />
    </a>
  </aside>
</template>

<script>
    export default {
        name: "Side"
    }
</script>

<style scoped>
aside {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 5%;
  height: 20%;
  padding-bottom: 20px;
}
</style>
