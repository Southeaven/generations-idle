<template lang="html">
  <div>
    <template v-if="phase === 1">
      <h3 class="ui center aligned header">Basic info</h3>
      <form class="ui form">
        <p>
          We need basic information about your character. Answers won't have any influence over your character's statistics.
        </p>
        <div class="two fields">
          <div class="field">
            <label>First name:</label>
            <input placeholder="Enter first name..." type="text" v-model="firstName" />
          </div>
          <div class="field">
            <label>Last name:</label>
            <input placeholder="Enter last name..." type="text" v-model="lastName" />
          </div>
        </div>
        <div class="grouped fields">
          <label>Gender:</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input name="gender" type="radio" v-model="gender" value="Male" />
              <label>Male</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input name="gender" type="radio" v-model="gender" value="Female" />
              <label>Female</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input name="gender" type="radio" v-model="gender" value="Other" />
              <label>Other</label>
            </div>
          </div>
        </div>
      </form>
      <div class="ui center aligned container">
        <button class="ui button" v-on:click="submitInfo">Submit</button>
      </div>
    </template>
    <template v-if="phase === 2">
      <h3 class="ui center aligned header">Details</h3>
      <p>
        We would like to know what personality should your character have, that's why you need to fill a short survey.
      </p>
      <form class="ui form">
        <p>
          1. Muscles... Strength... The more you workout, the more powerful you become. But bigger muscles can make you slower. And slowness means that may not be able to escape dangerous situations. So... What do you prefer?
        </p>
        <div class="grouped fields">
          <div class="field">
            <div class="ui radio checkbox">
              <input name="first-question" type="radio" v-model="firstQuestion" v-bind:value="1" />
              <label>Power</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input name="first-question" type="radio" v-model="firstQuestion" v-bind:value="2" />
              <label>Speed</label>
            </div>
          </div>
        </div>
        <p>
          2. Imagine that you are in school. You can of course learn a lot here, but you can also make friends there. More knowledge = better job, whereas friends can make getting certain things easier. What is your choice?
        </p>
        <div class="grouped fields">
          <div class="field">
            <div class="ui radio checkbox">
              <input name="second-question" type="radio" v-model="secondQuestion" v-bind:value="1" />
              <label>Knowledge</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input name="second-question" type="radio" v-model="secondQuestion" v-bind:value="2" />
              <label>Friends</label>
            </div>
          </div>
        </div>
        <p>
          3. Being healthy can make you live longer, so that you can achieve more. Wisdom can bring you bright future, you can get higher and higher, but you may at some point forget about your health and die. The question is... What is more important to you?
        </p>
        <div class="grouped fields">
          <div class="field">
            <div class="ui radio checkbox">
              <input name="third-question" type="radio" v-model="thirdQuestion" v-bind:value="1" />
              <label>Health</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input name="third-question" type="radio" v-model="thirdQuestion" v-bind:value="2" />
              <label>Wisdom</label>
            </div>
          </div>
        </div>
      </form>
      <div class="ui center aligned container">
        <button class="ui button" v-on:click="submitInfo">Submit</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      phase: 1,
      firstName: '',
      lastName: '',
      gender: '',
      firstQuestion: 0,
      secondQuestion: 0,
      thirdQuestion: 0
    }
  },
  computed: {
    player: function () {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        age: 20,
        gender: this.gender,
        avatar: 0,
        money: 20000, // temporary
        statistics: {
          power: this.firstQuestion === 1 ? 2 : 1,
          speed: this.firstQuestion === 2 ? 2 : 1,
          health: this.thirdQuestion === 1 ? 2 : 1,
          education: this.secondQuestion === 1 ? 2 : 1,
          wisdom: this.thirdQuestion === 2 ? 2 : 1,
          charisma: this.secondQuestion === 2 ? 2 : 1
        }
      }
    }
  },
  methods: {
    randomizeAvatar: function () {
      if (this.player.gender === 'Male') {
        this.player.avatar = Math.floor(Math.random() * (50 - 1 + 1)) + 1
      } else if (this.player.gender === 'Female') {
        this.player.avatar = Math.floor(Math.random() * (31 - 1 + 1)) + 1
      } else {
        let choice = Math.random() < 0.5
        if (choice) {
          this.player.avatar = Math.floor(Math.random() * (50 - 1 + 1)) + 1
        } else {
          this.player.avatar = -1 * (Math.floor(Math.random() * (31 - 1 + 1)) + 1)
        }
      }
    },
    submitInfo: function () {
      if (this.phase === 1) {
        this.phase = 2
      } else {
        this.randomizeAvatar()
        this.$store.dispatch('setPlayerInfo', this.player)
        let saveInfo = {
          played: true,
          version: '0.1.0',
          startingDate: new Date()
        }
        this.$store.dispatch('setSaveInfo', saveInfo)
        this.$store.dispatch('saveGame')
        this.$router.push('/overview')
        this.$store.dispatch('toggleEngine')
      }
    }
  }
}
</script>

<style lang="css">
</style>
