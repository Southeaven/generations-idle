<template>
  <div>
    <Navbar></Navbar>
    <div class="ui container">
      <MainMenu></MainMenu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import MainMenu from './components/MainMenu'

export default {
  name: 'app',
  components: {
    Navbar,
    MainMenu
  },
  mounted: function () {
    this.$store.dispatch('toggleEngine')
  }
}
</script>

<style>
</style>
