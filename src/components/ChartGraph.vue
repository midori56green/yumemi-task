<template>
  <canvas
    id="locationGraph"
    width="300"
    height="200"
    class="ma-3 pa-3 grey lighten-5"
  ></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "ChartGraph",
  mounted() {
    // グラフ作成
    new Chart("locationGraph", {
      type: "doughnut",
      data: {
        labels: ["ユーザ―A", "ユーザ―B", "ユーザ―C", "ユーザ―D"],
        datasets: [
          {
            data: [485, 414, 71, 105],
            backgroundColor: ["#F50057", "#FF4081", "#FF80AB", "#FFCC80"],
          },
        ],
        min: 0,
        max: 100,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
    });
    // console.log(graph);
  },
};
</script>
