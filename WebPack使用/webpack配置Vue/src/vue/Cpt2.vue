<!-- 组件嵌套子组件 -->
<template>
<div>
    <h2>嘿嘿嘿我是子组件哦</h2>
    <h3>我是名字叫'{{name}}'</h3>
</div>
</template>

<script>

export default {
    data(){
        return {
            name:'son'
        }
    }
}

</script>

<style scoped>
div{
    background: rebeccapurple;
}
</style>