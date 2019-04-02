<template>
  <div id="app">
    <about></about>
    <home></home>
    <router-view/>
  </div>
</template>

<script>
import about from './views/About.vue'
import home from './views/Home.vue'


export default {
  components:{
    about,home
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
