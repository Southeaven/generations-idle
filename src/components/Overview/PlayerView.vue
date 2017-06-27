<template lang="html">
  <div>
    <h1 class="ui center aligned header">Your character</h1>
    <h3>Basic info</h3>
    <div class="ui list">
      <div class="item">First name: {{ this.firstName }}</div>
      <div class="item">Last name: {{ this.lastName }}</div>
      <div class="item">Gender: {{ this.gender }}</div>
      <div class="item">Age: {{ this.age }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    firstName: function () {
      return this.$store.state.player.firstName
    },
    lastName: function () {
      return this.$store.state.player.firstName
    },
    age: function () {
      return this.$store.state.player.age
    },
    gender: function () {
      return this.$store.state.player.gender
    }
  }
}
</script>

<style lang="css">
</style>
