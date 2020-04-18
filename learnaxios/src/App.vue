<template>
  <div id="app">
    <button @click="getHttpBinGetData()">请求数据GET</button>
    <div>{{getRequestData}}</div>
  </div>
</template>

<script>
import { request } from "./network/request";
export default {
  name: "App",
  data() {
    return {
      getRequestData: ""
    };
  },
  components: {},
  methods: {
    getHttpBinGetData() {
      request({
        url: "/get"
      })
        .then(data => {
          this.getRequestData = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
