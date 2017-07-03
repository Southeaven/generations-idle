<template lang="html">
  <div>
    <h1 class="ui center aligned header">Your character</h1>
    <h3>Basic info</h3>
    <div class="ui list">
      <div class="item">First name: {{ this.firstName }}</div>
      <div class="item">Last name: {{ this.lastName }}</div>
      <div class="item">Age: {{ this.age }}</div>
      <div class="item">Gender: {{ this.gender }}</div>
      <div class="item">Money: {{ this.money }}$</div>
    </div>
    <div class="ui grid">
      <div class="eight wide column">
        <h3 class="ui center aligned header">Physical attributes</h3>
        <table class="ui very basic selectable table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in this.physicalAttributes">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="eight wide column">
        <h3 class="ui center aligned header">Mental attributes</h3>
        <table class="ui very basic selectable table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in this.mentalAttributes">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
      return this.$store.state.player.lastName
    },
    age: function () {
      return this.$store.state.player.age
    },
    gender: function () {
      return this.$store.state.player.gender
    },
    // temporary
    money: function () {
      return this.$store.state.player.money
    },
    physicalAttributes: function () {
      let attributes = {
        Power: this.$store.state.player.statistics.power,
        Speed: this.$store.state.player.statistics.speed,
        Health: this.$store.state.player.statistics.health
      }
      return attributes
    },
    mentalAttributes: function () {
      let attributes = {
        Education: this.$store.state.player.statistics.education,
        Wisdom: this.$store.state.player.statistics.wisdom,
        Charisma: this.$store.state.player.statistics.charisma
      }
      return attributes
    }
  }
}
</script>

<style lang="css">
</style>
