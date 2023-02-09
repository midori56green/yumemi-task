<template>
  <canvas id="populationGraph" width="300" height="200"></canvas>
</template>

<script>
import { getApi } from "@/common";
import Chart from "chart.js/auto";
export default {
  name: "ChartGraph",
  props: ["sample"],
  data() {
    return {
      selectPrefectures: [
        {
          prefName: "北海道",
          prefCode: 1,
          backgroundColor: "#00ff00",
        },
        {
          prefName: "青森",
          prefCode: 2,
        },
        {
          prefName: "岩手",
          prefCode: 3,
        },
      ],
      labels: [],
      datasets: [],
      boundaryYear: 0,
    };
  },
  async created() {
    console.log(this.sample);
    // グラフデータの取得
    this.getPopulationJson();

    // ラベルデータの取得
    const populationJson = await getApi(
      "v1/population/composition/perYear?cityCode=-&prefCode=1"
    );
    populationJson.data[0].data.forEach((data) => {
      // 境界年以前の年代を取得
      if (data.year <= this.boundaryYear) this.labels.push(data.year);
    });
  },
  async mounted() {
    // グラフ作成
    new Chart("populationGraph", {
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
};
</script>
