<template>
  <div id="app">
    <h1 style="font-size : 50px">HACKTIVERFLOW</h1>
    <div id="nav">
      | <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapStore} from 'vuex'
export default {
  created(){
    this.$store.dispatch('getQuestionOne', this.$route.params.Qid)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
