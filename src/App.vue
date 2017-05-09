<template>
  <div id="app">
    <main-nav></main-nav>
  </div>
</template>

<script>
import MainNav from './components/MainNav'

export default {
  name: 'app',
  components: {
    'main-nav': MainNav
  }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './assets/app.css'
</style>
