<template lang="html">
  <div>
    <h1 class="ui center aligned header">Your family</h1>
    <div class="ui three centered cards">
      <PlayerCard></PlayerCard>
    </div>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard'

export default {
  components: {
    PlayerCard
  }
}
</script>

<style lang="css">
</style>
