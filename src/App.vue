<template>
  <div id="app">
    <router-view></router-view>
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

<style>

</style>
