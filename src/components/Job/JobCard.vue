<template lang="html">
  <div class="card" v-if="visible">
    <div class="content">
      <div class="header">{{ this.jobData.name }}<span class="ui red top right attached label" v-if="this.active">Current job</span></div>
      <div class="meta">Attrubutes: {{ this.jobAttributes }}</div>
      <div class="meta">Estimated yearly salary: {{ this.yearlySalary }}$</div>
      <div class="description">{{ this.jobData.description }}</div>
    </div>
    <div class="ui bottom attached teal button" v-on:click="chooseJob">Apply for the job!</div>
  </div>
</template>

<script>
export default {
  props: ['jobData'],
  computed: {
    active: function () {
      return this.jobData.name === this.$store.state.job.name
    },
    currentYear: function () {
      return this.$store.state.time.year
    },
    visible: function () {
      return this.currentYear >= this.jobData.visibleSince && this.currentYear <= this.jobData.visibleUntil
    },
    jobAttributes: function () {
      let result = []
      for (let key of Object.keys(this.jobData.attributes)) {
        if (this.jobData.attributes[key] !== 0) {
          result.push(key[0].toUpperCase())
        }
      }
      return result.join(' ')
    },
    yearlySalary: function () {
      let result = this.jobData.base
      for (let key of Object.keys(this.jobData.attributes)) {
        result += (this.jobData.multiplier * this.jobData.attributes[key] * this.$store.state.player.statistics[key])
      }
      return result
    }
  },
  methods: {
    chooseJob: function () {
      this.$store.dispatch('setJob', this.jobData)
    }
  }
}
</script>

<style lang="css">
</style>
