# VueJsRepository
My First Vue Project
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
+   理解：存在作用域的情况下，函数参数为'值参数'.在不存在作用域的情况下，函数参数为'引用参数'
+   ES6增强写法
    -   {name,age}
    -   {eat(){}}
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
    -    Vue.set(this.arr, 0, 'AAA');设置对象并渲染
