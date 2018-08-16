<template>
  <footer class="navbar bottom">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Site web par Jocelyn Griselle. License
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  footer {
    background-color: #07575B;
    color: white;
    position: absolute;
    padding: 0;
    margin: 0;
    left: 0;
    bottom : 0px;
    right: 0;
    height: 50px;
  }
  a {
    color: #66A5AD;
  }
</style>
