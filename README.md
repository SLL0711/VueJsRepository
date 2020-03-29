# VueJsRepository
My First Vue Project
##  JS高级函数
+   arr.reduce
```
this.books.reduce(function (total, book) {
                return total + book.price * book.count;
            }, 0);
```
+   arr.map
+   arr.filter
##  命令式编程>>申明式编程
+   ES6中的let相较于var具有<font color="#dddd00">块级作用域</font>
    -   ES5中的'函数'具有作用域，可以使用闭包来解决一些作用域引发的问题
``` 
 for (var i = 0; i < btns.length; i++) {
            (function (i) {
                btns[i].addEventListener('click', function () {
                    console.log('第' + i + '个按钮被点击');
                })
            })(i)
        }
```
+   ES6中的let可以使变量在代码块中具有作用域，变量不受外界赋值影响
+   ES5中模板化的实现：定义变量接收闭包函数的调用结果，闭包函数返回Object
+   理解：存在作用域的情况下，函数参数为'值参数'.在不存在作用域的情况下，函数参数为'引用参数'
+   ES6增强写法
    -   {name,age}
    -   {eat(){}}
    -   `` 类似于 "" 但是可以直接包裹换行的代码
+   ES6 export import 
    -   export {flag} 对应 import {flag} from '/js'
    -   export default {} 对应 import 自定义名称 from '/js'
    -   导入所有:import * as obj from '/js'  对应 obj.flag,obj.name
+   命令式编程优势
    -   html JS数据绑定 分离
    -   MVVM模式：View ViewModel Model
    -   ViewModel:dataBinding数据双绑
    -   Mustache语法在解释{}时，key:默认为字符串 value会在data中查询，若表示字符串需要加上''
+   Vue属性
    -   el：承载的元素
    -   data：变量
    -   methods:方法列表
    -   computed:计算属性,getter setter，类似属性访问器，性能优于method.计算属性是基于它们的响应式依赖进行缓存的
+   Vue指令
    -   v-for="item in list"
    -   v-on:click 语法糖：@click，.stop组织冒泡 .prevent组织默认行为,可以串联使用
    -   v-once:只渲染元素和组件一次
    -   v-html:将string渲染为InnerHtml
    -   v-text:<span v-text="msg"> == </span> <span>{{msg}}</span>
    -   v-pre:跳过渲染，原始展示
    -   v-cloak:在渲染执行之后，删除v-cloak指令
    -   v-bind:绑定属性.:class={active:isActive},动态绑定class，设置isActive true|false,控制元素是否存在active
    -   v-if v-elseif v-else,Vue采用虚拟DOM渲染。当渲染前后存在相同DOM例如input时，会把input的value值复用到新的DOM,可以添加Key标识符解决该问题
    ```
     <span v-if="isUserName">
            <label for="UserName">用户名</label>
            <input name="UserName" id="UserName" key="UserName">
        </span>
        <span v-else>
            <label for="UserEmail">邮箱</label>
            <input name="UserEmail" id="UserEmail" key="UserEmail">
        </span>
    ```
    -   v-show 类似display:none v-if:删除DOM
    -   v-for遍历对象/数组,可以通过添加v-bind:key 提升性能，具体见文档。key值必须与item一一对应
    -   Vue.set(this.arr, 0, 'AAA');设置对象并渲染
    -   v-model:表单数据双绑定:.lazy .number .trim
+   Vue组件化开发
    -   组件必须在Vue挂在的element元素下使用
    -   组件式可复用的Vue实例
    -   全局组件、局部组件、子组件
    -   使用组件会优先查看局部组件，其次查看全局组件
        -   父组件A 子组件B，Vue实例中只引用A的话无法在挂载Dom对象中直接使用B。
        必须在Vue实例中引入B
    -   组件模板抽离
        -   <script type="x-template" id="cpt"> 需要定义在 Vue 所属的 DOM 元素外。
        -   <template id="cpt">标签
    -   组件内部不能访问Vue实例的数据
    -   组件内的typeof(data) == function,每个组件实例指向一份独立的数据
    -   父子组件通信：
        -   父组件通过prop传递数据给子组件
        -   子组件通过‘自定义事件’传递数据给父组件 $emit
    -   子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
    -   节制地使用 $parent 和 $children - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信
    -   ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
    -   slot插槽用来为Components提供可扩展性
        -   具名slot <slot name="slotname">  <template slot="slotname" slot-scope="slotProps">
        -   slotname用来标识template应用于哪个具体的slot插槽
        -   slot-scope 用来接收slot传递的props对象
        -   <template v-slot:slotname="slotProps"> v-slot是(slot="" slot-scope)的组合用法
        
+   Vue中的驼峰写法:CptNavigate编译成：cpt-navigate
+   GIT中的git status 查看中文乱码解决方法
    -   git config --global core.quotepath false
##  webpack
+   gulp强调通过task定义一系列任务压缩、合并
+   webpack强调模块化开发
+   dist部署文件夹，src开发文件夹。命令：webpack ./src/main.js ./dist/bundle.js
+   webpack.config.js 配置webpack
+   npm run bundle,bundle 在package.json 文件的scripts标签的key，value配置的是对应的命令
+   package开发时依赖webpack，生产环境不会依赖webpack
    -   devDependencies
    -   dependencies
