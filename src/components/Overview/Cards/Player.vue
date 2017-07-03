<template lang="html">
  <router-link class="card" :to="'./player'" append>
    <div class="ui image">
      <img v-bind:src="avatar()" alt="">
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
  },
  methods: {
    avatar: function () {
      let string = '../../../../static/avatars/'
      if (this.$store.state.player.gender === 'Male' || this.$store.state.player.gender === 'Female') {
        string = string + this.$store.state.player.gender.toLowerCase() + '/' +
        this.$store.state.player.avatar + '.png'
      } else {
        let temporaryGender = this.$store.state.player.avatar > 0 ? 'Male' : 'Female'
        if (temporaryGender === 'Male') {
          string = string + temporaryGender.toLowerCase() + '/' +
          this.$store.state.player.avatar + '.png'
        } else {
          string = string + temporaryGender.toLowerCase() + '/' +
          -1 * this.$store.state.player.avatar + '.png'
        }
      }
      return string
    }
  }
}
</script>

<style lang="css">
</style>
