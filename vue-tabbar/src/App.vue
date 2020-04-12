<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item v-for="(item,index) in tabItems" :key="index" :link="item.link" tabItemTextColor="red">
        <img slot="slot-img" :src="item.imgSrc" alt />
        <img slot="slot-imgActive" :src="item.imgActiveSrc" alt />
        <span slot="slot-content">{{item.name}}</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

// import homeImg from "./assets/img/tabbar/home.svg";
// import categoryImg from "./assets/img/tabbar/category.svg";
// import profileImg from "./assets/img/tabbar/profile.svg";
// import b_carImg from "./assets/img/tabbar/b_car.svg";
// import homeaImg from "./assets/img/tabbar/homea.svg";
// import categoryaImg from "./assets/img/tabbar/categorya.svg";
// import profileamg from "./assets/img/tabbar/profilea.svg";
// import b_caraImg from "./assets/img/tabbar/b_cara.svg";

import homeImg from "assets/img/tabbar/home.svg";
import categoryImg from "assets/img/tabbar/category.svg";
import profileImg from "assets/img/tabbar/profile.svg";
import b_carImg from "assets/img/tabbar/b_car.svg";
import homeaImg from "assets/img/tabbar/homea.svg";
import categoryaImg from "assets/img/tabbar/categorya.svg";
import profileamg from "assets/img/tabbar/profilea.svg";
import b_caraImg from "assets/img/tabbar/b_cara.svg";

export default {
  name: "App",
  data() {
    return {
      tabItems: [
        {
          name: "首页",
          imgSrc: homeImg,
          imgActiveSrc: homeaImg,
          link: "/home"
        },
        {
          name: "分类",
          imgSrc: categoryImg,
          imgActiveSrc: categoryaImg,
          link: "/category"
        },
        {
          name: "购物车",
          imgSrc: b_carImg,
          imgActiveSrc: b_caraImg,
          link: "/cars"
        },
        {
          name: "我的",
          imgSrc: profileImg,
          imgActiveSrc: profileamg,
          link: "/profile"
        }
      ]
    };
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
