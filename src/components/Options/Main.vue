<template lang="html">
  <div>
    <div class="ui centered grid">
      <div class="five wide column">
        <button class="ui fluid teal button" v-on:click="saveGame">Save</button>
      </div>
      <div class="five wide column">
        <button class="ui fluid yellow button" v-on:click="loadGame">Load</button>
      </div>
      <div class="five wide column">
        <button class="ui fluid red button" v-on:click="resetGame">Reset</button>
      </div>
    </div>
    <h3 class="ui center aligned header">Game autosaves at the beginning of every month.</h3>
  </div>
</template>

<script>
export default {
  methods: {
    saveGame: function () {
      this.$store.dispatch('saveGame')
    },
    loadGame: function () {
      this.$store.dispatch('loadGame')
    },
    resetGame: function () {
      this.$store.dispatch('resetGame')
    }
  }
}
</script>

<style lang="css">
</style>
