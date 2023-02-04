// import { Bar } from "vue-chartjs";
import { getApi } from "@/common";
export default {
  // extends: Bar,
  name: "PopulationGraph",
  data() {
    return {
      prefectures: [],
    };
  },
  async created() {
    this.prefectures = await getApi("v1/prefectures");
  },
  mounted() {
    // this.renderCart(this.prefectures, option);
  },
};
