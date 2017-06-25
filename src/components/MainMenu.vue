<template lang="html">
  <div class="ui four item secondary pointing red menu">
    <router-link :to="'/'" class="item" active-class="active" exact>Overview</router-link>
    <router-link :to="'/training'" class="item" active-class="active">Training</router-link>
    <router-link :to="'/job'" class="item" active-class="active">Job</router-link>
    <router-link :to="'/options'" class="item" active-class="active">Options</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
