<template>
  <div class="hello; col-sm-3 offset-6">
    <h1>{{ msg }}</h1>
    <router-link to="/login">login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
