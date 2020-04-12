<!--  -->
<template>
  <div>
    我是首页
    <div>
      <router-link to="/home/homenews">新闻</router-link>
      <router-link to="/home/homemsg">消息</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      name:"name"
    }
  },
  created() {
    console.log(this.name)
    console.log("HomeVue Created");
    this.name = "sll"
  },
  destroyed() {
    console.log("HomeVue Destoryed");
  }
};
</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>