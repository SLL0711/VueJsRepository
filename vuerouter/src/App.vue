<template>
  <div id="app">
<router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link tag="button" v-bind:to="'/user/'+userId">用户信息</router-link>
    <router-link tag="button" v-bind:to="{path:'/profile',query:{name:'sll1',age:18,height:180}}">档案</router-link>
    <!-- <button @click="clickhome">首页</button>
    <button @click="clickabout">关于</button>-->
    <button @click="clickProfile">跳转档案</button>
    
    <keep-alive exclude="Profile">
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "111"
    };
  },
  methods: {
    clickhome() {
      this.$router.push("/home");
    },
    clickabout() {
      this.$router.push("/about");
    },
    clickProfile(){
      this.$router.push("/profile?name=asan&age=38&height=159");
    }
  }
};
</script>

<style>
.router-link-active {
  color: rebeccapurple;
}
</style>
