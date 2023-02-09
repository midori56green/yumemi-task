<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins; // 追加

export default {
  extends: Line,
  mixins: [reactiveProp], // 追加
  props: {
    chartData: Object,
    options: Object,
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
