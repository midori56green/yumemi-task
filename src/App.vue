<template>
  <div id="app">
    <p>hoge:{{ hoge }}</p>
    <p>fuge:{{ fuge }}</p>
    <input type="text" v-model="fuge" />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { getApi } from "./common.js";

export default {
  data() {
    return {
      hoge: [],
      fuge: "aaa",
    };
  },
  name: "App",
  components: {
    HelloWorld,
  },
  async created() {
    this.hoge = await getApi();
    console.log(this.hoge.result);
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
