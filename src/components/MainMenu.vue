<template lang="html">
  <div class="ui item secondary pointing red menu" v-bind:class="newGame ? 'two' : 'four'">
    <router-link :to="'/newgame'" class="item" active-class="active" v-if="newGame">New game</router-link>
    <template v-else>
      <router-link :to="'/overview'" class="item" active-class="active">Overview</router-link>
      <router-link :to="'/training'" class="item" active-class="active">Training</router-link>
      <router-link :to="'/job'" class="item" active-class="active">Job</router-link>
    </template>
    <router-link :to="'/options'" class="item" active-class="active">Options</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    newGame: function () {
      if (this.$store.state.played === false) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="css">
</style>
