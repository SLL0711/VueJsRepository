
console.log('11')
console.log('2')

// CommonJS模块化规范
const { add } = require('./js/mathUtils');
console.log(add(10, 20))

// ES6模块化规范
import { name, age } from './js/info';
console.log(name, age)

//依赖css
require('./css/normal.css')

// 使用Vue进行开发
import Vue from 'vue'

// const cpt = require('./vue/cpt')
import cpt from './vue/Cpt.vue'

new Vue({
    el: '#divDemo',
    template: `<cpt/>`,
    components: {
        cpt
    }
})