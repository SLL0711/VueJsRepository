<template>
  <div id="app">
    <h1>{{message}}</h1>
    <h2>vuexstore{{$store.state.counter}}</h2>
    <h3>
      <hello-vuex></hello-vuex>
    </h3>
    <div>
      <button @click="add()">++</button>
      <button @click="addAsync()">++Async</button>
      <button @click="del()">--</button>
      <button @click="addCount(5)">+5</button>
      <button @click="createAgeProperty()">创建属性Age</button>
      <button @click="UpdateModuleName()">更新ModuleName</button>
    </div>
    <h3>Gstu: {{ $store.getters.GStu}}</h3>
    <h3>Lstu:{{$store.getters.LStu}}</h3>
    <h3>mInfo:{{$store.state.mInfo}}</h3>
    <h3>moduleName:{{$store.state.moduleA.ModuleName}}</h3>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVue";
export default {
  name: "App",
  data() {
    return {
      message: "App组件"
    };
  },
  components: {
    HelloVuex
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    del() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("incrementCount", {
        count
      });
    },
    createAgeProperty() {
      this.$store.commit("definePropertiesmInfo");
    },
    addAsync() {
      this.$store.dispatch("incrementAsync").then(() => {
        console.log("then代码执行结束...");
        this.$store.commit("increment");
      });
    },
    UpdateModuleName(){
      this.$store.commit('moduleA/UpdateModuleName')
    }
  }
};
</script>

<style>
</style>
