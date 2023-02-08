<template>
  <canvas
    id="locationGraph"
    width="300"
    height="200"
    class="ma-3 pa-3 grey lighten-5"
  ></canvas>
</template>

<script>
import { getApi } from "@/common";
import Chart from "chart.js/auto";
export default {
  name: "ChartGraph",
  data() {
    return {
      selectPrefectures: [1, 3, 5],
      labels: [],
      datasets: [],
    };
  },
  async created() {
    // グラフデータの取得
    this.getPopulationJson();

    // ラベルデータの取得
    const populationJson = await getApi(
      "v1/population/composition/perYear?cityCode=-&prefCode=1"
    );
    populationJson.data[0].data.forEach((data) => {
      this.labels.push(data.year);
    });
  },
  mounted() {
    // グラフ作成
    new Chart("locationGraph", {
      type: "line",
      data: {
        labels: this.labels,
        // datasets: [
        //   {
        //     data: [485, 414, 71, 105],
        //     label: "apple",
        //     backgroundColor: ["#F50057"],
        //   },
        //   {
        //     data: [20, 50, 200, 400],
        //     label: "banana",
        //     backgroundColor: ["#0f0"],
        //   },
        // ],
        datasets: this.datasets,
        min: 0,
        max: 100,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labelString: "apple",
          },
        },
      },
    });
  },
  methods: {
    // 人口データの取得
    async getPopulationJson() {
      this.selectPrefectures.forEach(async (prefecture) => {
        const populationData = await getApi(
          `v1/population/composition/perYear?cityCode=-&prefCode=${prefecture}`
        );
        const popuationDataset = [];
        populationData.data[0].data.forEach((data) => {
          popuationDataset.push(data.value);
        });
        // console.log(popuationDataset);
        this.datasets.push({ data: popuationDataset, label: "test" });
      });
      console.log(this.datasets);
    },
  },
};
</script>
