import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prefectures: [],
    selectPrefectures: [],
  },
  getters: {
    // 都道府県リストの取得
    getPrefecture(state) {
      return state.prefectures;
    },
    // 選択された都道府県リストの取得
    getSelectPrefecture(state) {
      return state.selectPrefectures;
    },
  },
  mutations: {
    // 都道府県リストの値変更
    setPrefecture(state, json) {
      state.prefectures = json;
    },
    // 選択された都道府県リストの値変更
    setSelectPrefecture(state, json) {
      state.selectPrefectures = json;
    },
  },
  actions: {},
  modules: {},
});
