<template lang="html">
  <div class="blurring dimmable card" v-bind:class="{ 'dimmed': spouseNotFound }">
    <div class="ui inverted dimmer" v-bind:class="{ 'active': spouseNotFound }">
      <div class="content">
        <div class="center">
          <h3 class="ui header">Your character hasn't found a spouse yet! Work in progress!</h3>
        </div>
      </div>
    </div>
    <template v-if="spouseNotFound">
      <div class="ui image">
        <img src="../../../static/avatars/female/10.png" alt="">
      </div>
      <div class="content">
        <div class="header">Jane Doe</div>
        <div class="meta">Your spouse</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      spouseNotFound: true
    }
  }
}
</script>

<style lang="css">
</style>
