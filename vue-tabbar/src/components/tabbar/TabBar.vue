<!-- TabBar独立组件 -->
<template>
  <div id="app">
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tabbar {
  display: flex;
  justify-content: space-between;
  background:#80808029;
  /* color: white; */
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: -1px -1px 20px 1px rgba(158, 158, 158, 0.2);
}

</style>