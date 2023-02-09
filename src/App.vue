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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #333;
}
li {
  list-style: none;
}
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
  justify-content: flex-start;
}
li {
  flex: auto;
  width: calc(100% / 3);
}
label {
  display: block;
  padding: 10px 0;
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
