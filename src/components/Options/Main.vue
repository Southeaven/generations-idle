<template lang="html">
  <div>
    <div class="ui centered stackable grid">
      <div class="four wide column">
        <button class="ui fluid green button" v-on:click="saveGame">Save</button>
      </div>
      <div class="four wide column">
        <button class="ui fluid olive button" v-on:click="exportGame">Export</button>
      </div>
      <div class="four wide column">
        <button class="ui fluid yellow button" v-on:click="importGame">Import</button>
      </div>
      <div class="four wide column">
        <button class="ui fluid red button" v-on:click="resetGame">Reset</button>
      </div>
      <div class="sixteen wide column">
        <div class="ui fluid input">
          <input type="text" placeholder="Game data string..." v-model="gameDataString" />
        </div>
      </div>
    </div>
    <h3 class="ui center aligned header">Game autosaves at the beginning of every month.</h3>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      gameDataString: ''
    }
  },
  methods: {
    saveGame: function () {
      this.$store.dispatch('saveGame')
    },
    exportGame: function () {
      let gameData = {}
      gameData.saveInfo = {
        played: this.$store.state.played,
        version: this.$store.state.version,
        startingDate: this.$store.state.startingDate
      }
      gameData.time = {
        day: this.$store.state.time.day,
        month: this.$store.state.time.month,
        year: this.$store.state.time.year
      }
      gameData.player = this.$store.state.player
      this.gameDataString = window.btoa(JSON.stringify(gameData))
    },
    importGame: function () {
      if (this.gameDataString !== '') {
        this.$store.dispatch('importGame', this.gameDataString)
        this.gameDataString = ''
      }
    },
    resetGame: function () {
      this.$store.dispatch('resetGame')
    }
  }
}
</script>

<style lang="css">
</style>
