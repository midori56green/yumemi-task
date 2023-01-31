<template>
  <div id="app">
    <h1>Title</h1>
    <!-- <p>hoge:{{ hoge.result }}</p> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <PrefectureList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import PrefectureList from "./components/PrefectureList.vue";
// import HelloWorld from "./components/PrefectureList.vue";
// import { getApi } from "./common.js";

export default {
  data() {
    return {
      // hoge: [],
    };
  },
  name: "App",
  components: {
    // HelloWorld,
    PrefectureList,
  },
  async created() {
    // this.hoge = await getApi();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
