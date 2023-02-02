<template>
  <div id="app">
    <h1>Title</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <PopulationGraph msg="Welcome to Your Vue.js App" /> -->
    <PrefectureList />
    <PopulationGraph />
  </div>
</template>

<script>
import PrefectureList from "./components/PrefectureList.vue";
import PopulationGraph from "./components/PopulationGraph.vue";

export default {
  data() {
    return {};
  },
  name: "App",
  components: {
    PrefectureList,
    PopulationGraph,
  },
  async created() {},
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
