<template>
  <div class="box">
    <h2>都道府県一覧</h2>
  </div>
</template>

<script>
import { getApi } from "../common.js";
export default {
  name: "PrefectureList",
  data() {
    return {
      prefectures: [],
    };
  },
  async created() {
    this.prefectures = await getApi("v1/prefectures");
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
