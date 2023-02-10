<template>
  <div id="app">
    <h1>都道府県別人口推移グラフ</h1>
    <prefecture-list />
    <div class="chart-box">
      <h2>人口推移</h2>
      <div v-if="datasets.length === 0">読み込み中</div>
      <chart-graph
        v-else
        class="chart-graph"
        :labels="labels"
        :datasets="datasets"
      />
    </div>
  </div>
</template>

<script>
import { getApi } from "./common";
import PrefectureList from "./components/PrefectureList.vue";
import ChartGraph from "./components/ChartGraph.vue";

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
h1 {
  margin: 30px 0;
}
h2 {
  margin-bottom: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 20px;
}
/* list-box */
.list-box {
  background: #dcdcdc;
  padding: 20px;
  border-radius: 8px;
}
.list-box ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}
.list-box li {
  flex: auto;
  width: 5em;
  list-style: none;
}
.list-box label {
  display: block;
  padding: 10px 0;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
}
label:hover {
  background: #999;
}
label:has(input:checked) {
  font-weight: bold;
  background: skyblue;
}
/* chart-box */
.chart-box {
  max-width: 800px;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  margin: 30px auto 0;
}
</style>
