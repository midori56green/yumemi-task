<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>hoge: {{ prefectures }}</p>
  </div>
</template>

<script>
import { getApi } from "../common.js";
export default {
  name: "PrefectureList",
  props: {
    msg: String,
  },
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
