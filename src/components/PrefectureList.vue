<template>
  <div class="list-box">
    <h2>都道府県一覧</h2>
    <ul>
      <li v-if="prefectures.length === 0">読み込み中</li>
      <li v-for="(prefecture, index) in prefectures" :key="index">
        <label :for="`prefecture-${prefecture.prefCode}`">
          <input
            type="checkbox"
            :id="`prefecture-${prefecture.prefCode}`"
            v-model="selectPrefectures"
            :value="prefecture"
          />
          {{ prefecture.prefName }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { getApi } from "../common.js";
export default {
  name: "PrefectureList",
  data() {
    return {
      prefectures: [],
      selectPrefectures: [],
    };
  },
  async created() {
    this.prefectures = await getApi("v1/prefectures");
  },
  watch: {
    selectPrefectures() {
      this.$store.commit("setSelectPrefecture", this.selectPrefectures);
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
