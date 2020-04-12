<!-- TabBar独立组件 -->
<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="slot-img"></slot>
    </div>
    <div v-else>
      <slot name="slot-imgActive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="slot-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true
    },
    tabItemTextColor: {
      type: String,
      required: false,
      default: "red"
    }
  },
  methods: {
    itemClick() {
      console.log("itemClick");
      this.$router.replace(this.link);
    }
  },
  computed: {
    isActive() {
      // debugger
      const f = this.$route.path.indexOf(this.link) > -1;
      return f;
    },
    activeStyle() {
      const styleObj = this.isActive ? { color: this.tabItemTextColor } : "";
      return styleObj;
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  margin: 0px auto;
  height: 24px;
  width: 24px;
  margin-top: 3px;
}
.tabbar-item .active {
  color: red;
}
</style>