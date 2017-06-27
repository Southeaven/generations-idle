<template lang="html">
  <router-link  class="ui link card" :to="'./player'" append>
    <div class="ui image">
      <img src="http://via.placeholder.com/500" alt="">
    </div>
    <div class="content">
      <div class="header">{{ firstName + ' ' + lastName }}</div>
      <div class="meta">Current character</div>
    </div>
  </router-link>
</template>

<script>
export default {
  computed: {
    firstName: function () {
      let string = this.$store.state.player.firstName
      if (string !== '') {
        return string
      } else {
        return 'John'
      }
    },
    lastName: function () {
      let string = this.$store.state.player.lastName
      if (string !== '') {
        return string
      } else {
        return 'Smith'
      }
    }
  }
}
</script>

<style lang="css">
</style>
