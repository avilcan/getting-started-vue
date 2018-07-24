<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <UserListItem 
        v-for="user in getAllAllUsers"
        v-bind:firstName="user.name.first"
        v-bind:lastName="user.name.last"
        v-bind:key="user.id.value"></UserListItem>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'
import UserListItem from './components/UserList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    UserListItem,
  },
  created: function() {
    this.$store.dispatch('triggerFetchUsers');
  },
  computed: {
    ...mapGetters(['getAllAllUsers']),
  },
  // data: function() {
  //   return {
  //     users: []
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
