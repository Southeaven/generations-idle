<template lang="html">
  <div>
    <div class="ui three cards">
      <JobCard v-for="job in jobList" :key="job.name" v-bind:job-data="job"></JobCard>
    </div>
    <h1 class="ui center aligned header">Work in progress!</h1>
  </div>
</template>

<script>
let jsonData = require('./JobList.json')
import JobCard from './JobCard'

export default {
  computed: {
    jobList: function () {
      return jsonData
    },
    currentYear: function () {
      return this.$store.state.time.year
    }
  },
  components: {
    JobCard
  }
}
</script>

<style lang="css">
</style>
