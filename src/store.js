import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * Store initial state
   */
  state: {
    users: [],
    error: false,
  },
  /**
   * Mutations are applied by commits from Actions
   */
  mutations: {
    addUser(state, newUser) {
      /**
       * Do not mutate the state directly if your state has Array or Object keys
       * You'll always have to create a copy, modify the copy and completely overwrite the key with the
       * updated copy
       */
      const usersCopy = [...this.state.users];
      usersCopy.push(newUser)
      state.users  = usersCopy
    },
    initialLoadUsers(state, usersArr) {
      state.users = usersArr;
    },
    hasError(state) {
      state.error = false;
    }
  },
  /**
   * Actions are triggered from Vue components
   */
  actions: {
    triggerAdduser(context, newUser) {
      context.commit('addUser', newUser);
    },

    triggerFetchUsers(context) {
      fetch('https://randomuser.me/api?results=10').then((serverResponse) => {
        serverResponse.json().then((resp) => {
          context.commit('initialLoadUsers', resp.results);
        }).catch(() => {
          context.commit('hasError');
        })
      }).catch(() => {
        context.commit('hasError');
      })
    }
  },

  getters: {
    getAllAllUsers: (state) => {
      return state.users;
    }
  }
})
