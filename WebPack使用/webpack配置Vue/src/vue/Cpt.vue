<!-- cpt组件抽离 -->
<template>
     <div class="m">            
       <h2>{{message}}</h2>            
       <button @click="btnClick">点击我</button>
       <Cpt2/>        
    </div>
</template>
<script>
import Cpt2 from "./Cpt2.vue";
export default {
    data() {
        return {
            'message': "Hello World"
        }
    },
    methods:{
        btnClick(){
            console.log('1')
        }
    },
    components:{
        Cpt2
    }
}

</script>

<style scoped>
.m{
    background: green;
}
</style>