
console.log('1')
console.log('2')

// CommonJS模块化规范
const { add } = require('./js/mathUtils');
console.log(add(10, 20))

// ES6模块化规范
import { name, age } from './js/info';
console.log(name,age)

//依赖css
require('./css/normal.css')