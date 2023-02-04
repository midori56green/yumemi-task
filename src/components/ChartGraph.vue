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
      type: "line",
      data: {
        labels: ["ユーザ―A", "ユーザ―B", "ユーザ―C", "ユーザ―D"],
        datasets: [
          {
            data: [485, 414, 71, 105],
            label: "apple",
            backgroundColor: ["#F50057"],
          },
          {
            data: [20, 50, 200, 400],
            label: "banana",
            backgroundColor: ["#0f0"],
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
            labelString: "apple",
          },
        },
      },
    });
  },
};
</script>
