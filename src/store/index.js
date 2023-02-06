import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prefectures: [],
  },
  getters: {},
  mutations: {
    setPrefectures(state, json) {
      state.getPrefectures = json;
    },
  },
  actions: {
    setPrefectures(json) {
      // console.log("action");
      json.commit("setPrefectures");
    },
  },
  modules: {},
});
