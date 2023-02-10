<template>
  <div>
    <canvas
      id="populationGraph"
      class="chart-graph"
      width="300"
      height="200"
    ></canvas>
    <!-- <line-chart v-if="datacollection" :chart-data="datacollection"></line-chart> -->
  </div>
</template>

<script>
// import LineChart from "./LineChart.js";
import Chart from "chart.js/auto";
export default {
  data() {
    return {
      // datacollection: null,
    };
  },
  components: {
    // LineChart,
  },
  name: "ChartGraph",
  props: ["labels", "datasets"],
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
      // this.fillData();
    });
  },
  methods: {
    // fillData() {
    //   this.datacollection = {
    //     labels: [this.getRandomInt(), this.getRandomInt()],
    //     datasets: [
    //       {
    //         label: "data one",
    //         backgroundColor: "#00ff00",
    //         data: [this.getRandomInt(), this.getRandomInt()],
    //       },
    //       {
    //         label: "data two",
    //         backgroundColor: "#ff00ff",
    //         data: [this.getRandomInt(), this.getRandomInt()],
    //       },
    //     ],
    //   };
    // },
    // getRandomInt() {
    //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    // },
  },
};
</script>
