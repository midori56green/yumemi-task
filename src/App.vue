<template>
  <div id="app">
    <h1>Title</h1>
    <ul>
      <li v-if="sampleJson.length === 0">読み込み中</li>
      <li v-for="(json, index) in sampleJson.data[0].data" :key="index">
        {{ json.year }}年 {{ json.value }}人
      </li>
    </ul>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <PopulationGraph msg="Welcome to Your Vue.js App" /> -->
    <PrefectureList />
    <ChartGraph :chart-data="sampleJson" />
  </div>
</template>

<script>
import PrefectureList from "./components/PrefectureList.vue";
import ChartGraph from "./components/ChartGraph.vue";
import { getApi } from "./common";
// import { Store } from "vuex";

export default {
  data() {
    return {
      sampleJson: [],
    };
  },
  name: "App",
  components: {
    PrefectureList,
    ChartGraph,
  },
  async created() {
    this.sampleJson = await getApi(
      "v1/population/composition/perYear?cityCode=-&prefCode=11"
    );
    console.log(this.sampleJson);
    // const prefectures = await getApi("v1/prefectures");
    // Store.dispatch("setPrefectures", prefectures);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
