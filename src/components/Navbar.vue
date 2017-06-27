<template lang="html">
  <div class="ui menu">
    <div class="ui container">
      <router-link :to="'/'" class="item header">Generations Idle</router-link>
      <span class="item">{{ month + ' ' + year }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    month: function () {
      let names = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      return names[this.$store.state.time.month - 1]
    },
    year: function () {
      return this.$store.state.time.year
    }
  }
}
</script>

<style lang="css">
</style>
