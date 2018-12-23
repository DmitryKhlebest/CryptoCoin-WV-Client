import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sendRequest: () => {},
    User: null,
    staticText: "Hello!",
    personalPage: {
      coins: []
    },
    // personalPageCoins: [],
    bool: true
  },
  mutations: {

  },
  actions: {

  }
});
