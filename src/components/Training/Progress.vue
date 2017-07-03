<template lang="html">
  <div>
    <template>
      <h3 class="ui center aligned header">{{ courseName }}</h3>
      <div class="ui indicating progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    courseName: function () {
      return this.$store.state.training.name
    },
    value: function () {
      return this.$store.state.training.progress
    },
    total: function () {
      return this.$store.state.training.goal
    }
  },
  mounted: function () {
    $('.ui.progress').progress({
      value: this.value,
      total: this.total
    })
  },
  watch: {
    value: function () {
      $('.ui.progress').progress('set progress', this.value)
    },
    total: function () {
      $('.ui.progress').progress('set total', this.total)
    }
  }
}
</script>

<style lang="css" scoped="">
  i.arrow.right.icon {
    margin-right: 0
  }
</style>
