# VueJsRepository
My First Vue Project
##  命令式编程>>申明式编程
+   ES6中的let相较于var具有==块级作用域==
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
    -   v-on:click 语法糖：@click
    -   v-once:只渲染元素和组件一次
    -   v-html:将string渲染为InnerHtml
    -   v-text:<span v-text="msg"> == </span> <span>{{msg}}</span>
    -   v-pre:跳过渲染，原始展示
    -   v-cloak:在渲染执行之后，删除v-cloak指令
    -   v-bind:绑定属性.:class={active:isActive},动态绑定class，设置isActive true|false,控制元素是否存在active
