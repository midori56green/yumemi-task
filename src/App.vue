<template>
  <div id="app">
    <h1>Title</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <chart-graph
      v-if="datasets.length > 0"
      class="chart-graph"
      :labels="labels"
      :datasets="datasets"
    />
    <prefecture-list />
  </div>
</template>

<script>
import { getApi } from "./common";
import PrefectureList from "./components/PrefectureList.vue";
import ChartGraph from "./components/ChartGraph.vue";
// import RandomChart from "./components/RandomChart.vue";

export default {
  data() {
    return {
      labels: [
        1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
        2020,
      ],
      datasets: [],
      boundaryYear: 0,
    };
  },
  name: "App",
  components: {
    PrefectureList,
    ChartGraph,
    // RandomChart,
  },
  async created() {
    // ラベルデータの取得
    const populationJson = await getApi(
      "v1/population/composition/perYear?cityCode=-&prefCode=1"
    );
    populationJson.data[0].data.forEach((data) => {
      // 境界年以前の年代を取得
      if (data.year <= this.boundaryYear) this.labels.push(data.year);
    });

    // グラフデータの初期化
    const dataList = new Array(this.labels.length).fill(0);
    this.datasets = [
      {
        data: dataList,
        label: "都道府県",
      },
    ];
  },
  methods: {
    // 人口データの取得
    async getPopulationJson(prefList) {
      this.datasets = [];
      prefList.forEach(async (prefDate) => {
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

        const dataset = {
          data: popuationDataset,
          label: prefDate.prefName,
        };
        this.datasets.push(dataset);
      });
    },
  },
  computed: {
    setSelectPrefecture() {
      return this.$store.getters.getSelectPrefecture;
    },
  },
  watch: {
    setSelectPrefecture(data) {
      this.getPopulationJson(data);
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
.chart-graph {
  max-width: 500px;
  max-height: 500px;
}
</style>
