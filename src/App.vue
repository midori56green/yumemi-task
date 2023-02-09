<template>
  <div id="app">
    <h1>Title</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <PopulationGraph msg="Welcome to Your Vue.js App" /> -->
    <ChartGraph sample="aaaaaa" />
    <PrefectureList />
  </div>
</template>

<script>
import { getApi } from "./common";
import PrefectureList from "./components/PrefectureList.vue";
import ChartGraph from "./components/ChartGraph.vue";
// import RandomChart from "./components/RandomChart.vue";

export default {
  data() {
    return {};
  },
  name: "App",
  components: {
    PrefectureList,
    ChartGraph,
    // RandomChart,
  },
  async created() {},
  methods: {
    // 人口データの取得
    async getPopulationJson() {
      this.selectPrefectures.forEach(async (prefDate) => {
        const populationData = await getApi(
          `v1/population/composition/perYear?cityCode=-&prefCode=${prefDate.prefCode}`
        );

        // 境界年の取得
        if (this.boundaryYear === 0) {
          this.boundaryYear = populationData.boundaryYear;
        }

        const popuationDataset = [];
        populationData.data[0].data.forEach((data) => {
          // 境界年以前のデータを取得
          if (data.year <= this.boundaryYear) popuationDataset.push(data.value);
        });
        this.datasets.push({
          data: popuationDataset,
          label: prefDate.prefName,
        });
      });
      // console.log(this.datasets);
    },
  },
  computed: {
    setSelectPrefecture() {
      return this.$store.getters.getSelectPrefecture;
    },
  },
  watch: {
    setSelectPrefecture(data) {
      console.log(data);
    },
  },
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
