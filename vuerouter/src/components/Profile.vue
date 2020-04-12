<!--  -->
<template>
  <div>
    <h2>我是Profile组件</h2>
    <h3>身高{{$route.query.height}}</h3>
    <h3>姓名{{$route.query.name}}</h3>
    <h3>年龄{{$route.query.age}}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile Created");
  },
  destroyed() {
    console.log("Profile Destoryed");
  }
};
</script>

<style scoped>
</style>