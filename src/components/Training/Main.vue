<template lang="html">
  <div>
    <h1 class="ui center aligned header">Current training</h1>
    <TrainingProgress v-if="anyCourseActive"></TrainingProgress>
    <h3 class="ui center aligned header" v-else>There is no active course!</h3>
    <h1 class="ui center aligned header">Available courses:</h1>
    <div class="ui three cards">
      <CourseCard v-for="course in courseList" :key="course.name" v-bind:course-data="course"></CourseCard>
    </div>
  </div>
</template>

<script>
let jsonData = require('./CourseList.json')
import TrainingProgress from './Progress'
import CourseCard from './CourseCard'

export default {
  computed: {
    anyCourseActive: function () {
      return this.$store.state.training.name !== ''
    },
    courseList: function () {
      return jsonData
    }
  },
  components: {
    TrainingProgress,
    CourseCard
  }
}
</script>

<style lang="css">
</style>
