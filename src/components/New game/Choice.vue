<template lang="html">
  <div>
    <p>
      Before you can play this game you need to create a character. You can enter infomations by yourself or let us randomize everything. What do you want to do?
    </p>
    <div class="ui center aligned container">
      <button class="ui button" v-on:click="randomize">Randomize</button>
      <button class="ui button" v-on:click="customize">Customize</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    randomize: function () {
    },
    customize: function () {
      this.$router.push({ name: 'New game - customize' })
    }
  }
}
</script>

<style lang="css">
</style>
