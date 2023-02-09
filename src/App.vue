<template>
  <div id="app">
    <h1>Title</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <PopulationGraph msg="Welcome to Your Vue.js App" /> -->
    <ChartGraph />
    <PrefectureList />
  </div>
</template>

<script>
import PrefectureList from "./components/PrefectureList.vue";
import ChartGraph from "./components/ChartGraph.vue";

export default {
  data() {
    return {};
  },
  name: "App",
  components: {
    PrefectureList,
    ChartGraph,
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
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  flex: auto;
  width: calc(100% / 3);
}
label {
  display: block;
  background: #ccc;
  cursor: pointer;
}
label:hover {
  background: #999;
}
label:has(input:checked) {
  background: skyblue;
}
</style>
