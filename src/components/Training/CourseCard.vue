<template lang="html">
  <div class="card">
    <div class="content">
      <div class="center aligned header">{{ courseData.name }}</div>
      <div class="description">
        <table class="ui very basic two column table">
          <thead>
            <tr>
              <th>Ability</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in courseData.change" v-if="value !== 0">
              <td>{{ key[0].toUpperCase() + key.slice(1) }}</td>
              <td>{{ (value > 0 ? '+' : '-') + value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="ui bottom attached teal button" v-on:click="chooseCourse">Join the course!</div>
  </div>
</template>

<script>
export default {
  props: ['courseData'],
  methods: {
    chooseCourse: function () {
      this.courseData.progress = 0
      this.$store.dispatch('setTraining', this.courseData)
    }
  }
}
</script>

<style lang="css">
</style>
