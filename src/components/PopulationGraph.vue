<template>
  <div class="graph">
    <h2>グラフ</h2>
    <vue-highcharts />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue2-highcharts@1.2.5/dist/vue-highcharts.min.js"></script>
<script>
const VueHighcharts = window["VueHighcharts"];
const sampleJson = {
  name: "Tokyo",
  marker: {
    symbol: "square",
  },
  data: [
    7.0,
    6.9,
    9.5,
    14.5,
    18.2,
    21.5,
    25.2,
    {
      y: 26.5,
      marker: {
        symbol: "url(http://www.highcharts.com/demo/gfx/sun.png)",
      },
    },
    23.3,
    18.3,
    13.9,
    9.6,
  ],
};

export default {
  name: "PopulationGraph",
  data() {
    return {
      VueHighcharts: window["VueHighcharts"].default,
      options: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Monthly Average Temperature",
        },
        subtitle: {
          text: "Source: WorldClimate.com",
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yAxis: {
          title: {
            text: "Temperature",
          },
          labels: {
            formatter: function () {
              return this.value + "°";
            },
          },
        },
        tooltip: {
          crosshairs: true,
          shared: true,
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: "#666666",
              lineWidth: 1,
            },
          },
        },
        series: [],
      },
    };
  },
  components: {
    "vue-highcharts": VueHighcharts,
  },
  created() {
    console.log(sampleJson);
  },
  methods: {
    load: function () {
      let lineCharts = this.$refs.lineCharts;
      lineCharts.delegateMethod("showLoading", "Loading...");
      setTimeout(() => {
        lineCharts.addSeries(sampleJson);
        lineCharts.hideLoading();
      }, 2000);
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
