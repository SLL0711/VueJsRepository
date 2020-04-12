<!--  -->
<template>
<div>
    <h2>用户信息</h2>
    <p>我是{{curUser}}，嘿嘿嘿</p>
</div>
</template>

<script>

export default {
    name:'User',
    data(){
        return {
            curUser:this.$route.params.userId
        }
    }
}

</script>

<style scoped>

</style>