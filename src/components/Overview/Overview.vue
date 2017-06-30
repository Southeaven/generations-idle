<template lang="html">
  <div>
    <h1 class="ui center aligned header">Your family</h1>
    <div class="ui three centered cards">
      <PlayerCard></PlayerCard>
      <SpouseCard></SpouseCard>
    </div>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard'
import SpouseCard from './SpouseCard'

export default {
  components: {
    PlayerCard,
    SpouseCard
  }
}
</script>

<style lang="css">
</style>
