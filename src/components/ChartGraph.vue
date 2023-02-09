<template>
  <canvas id="populationGraph" width="300" height="200"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "ChartGraph",
  props: ["labels", "datasets"],
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
    };
  },
  async created() {},
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
};
</script>
