
console.log('1')
console.log('2')

// CommonJS模块化规范
const { add } = require('./mathUtils');
console.log(add(10, 20))

// ES6模块化规范
import { name, age } from './info';
console.log(name,age)