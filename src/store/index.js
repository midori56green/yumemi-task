import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prefectures: [],
    selectPrefectures: [],
  },
  getters: {
    getPrefecture(state) {
      return state.prefectures;
    },
    getSelectPrefecture(state) {
      return state.setPrefecture;
    },
  },
  mutations: {
    setPrefecture(state, json) {
      state.prefectures = json;
    },
    setSelectPrefecture(state, json) {
      state.selectPrefectures = json;
    },
  },
  actions: {},
  modules: {},
});
