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
+   箭头函数
```
         //1. 无参箭头函数
        const c = () => { }
        // 2.带参数的箭头函数
        const sum = (a, b) => { return a + b }
        // 带一个参数可以省略()
        const power = num => { return num * num }
        //只有一行代码的函数体
        const mul = (num1, num2) => num1 + num2;

           // 箭头函数的this，逐级向上层作用域中找到的第一个有定义的this
        const obj = {
            aaa() {
                setTimeout(function () {
                    console.log(this)//打印window
                }, 1000);
            },
            bbb() {
                setTimeout(() => {
                    console.log(this)//打印obj对象
                }, 1000);
            }
        }
```
##  VScode创建Vue自定义代码片段
+   文件-->首选项-->用户代码片段-->点击新建代码片段--取名vue.json 确定
##  npm配置命令
+   package.json文件中配置Scripts标签
    -   "bundle":"webpack"  npm run bundle
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
    -   如果同时存在el template,则template会覆盖el挂载的divDemo，而不是往divDemo中插入template
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
```
        <script type="x-template" id="cpt"> 需要定义在 Vue 所属的 DOM 元素外。
        <template id="cpt">标签
```
    -   组件内部不能访问Vue实例的数据
    -   组件内的typeof(data) == function,每个组件实例指向一份独立的数据
    -   父子组件通信：
        -   父组件通过prop传递数据给子组件
        -   子组件通过‘自定义事件’传递数据给父组件 $emit
    -   子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
    -   节制地使用 $parent 和 $children - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信
    -   ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
    -   slot插槽用来为Components提供可扩展性
        -   具名slot 
```
<slot name="slotname">  <template slot="slotname" slot-scope="slotProps">
```
        -   slotname用来标识template应用于哪个具体的slot插槽
        -   slot-scope 用来接收slot传递的props对象
        -   <template v-slot:slotname="slotProps"> v-slot是(slot="" slot-scope)的组合用法
        
+   Vue中的驼峰写法:CptNavigate编译成：cpt-navigate
+   GIT中的git status 查看中文乱码解决方法
    -   git config --global core.quotepath false
##  webpack ？?如何确认A.HTML 依赖 a.js B.HTML 依赖 b.js??
+   gulp强调通过task定义一系列任务压缩、合并
+   webpack强调模块化开发
+   dist部署文件夹，src开发文件夹。命令：webpack ./src/main.js ./dist/bundle.js
+   webpack.config.js 配置webpack
+   npm run bundle,bundle 在package.json 文件的scripts标签的key，value配置的是对应的命令
+   package开发时依赖webpack，生产环境不会依赖webpack
    -   devDependencies
    -   dependencies
+   css-loader 只负责加载 style-loader渲染css
+   Loader执行顺序从右往左,从下往上
    -   css-loader：解析css文件
    -   style-loader：将css样式渲染到DOM
    -   url-loader:文件url，配置小于8Kb时直接返回base64url，大于8Kb时会通过file-loader重新生成图片到dist下
    -   file-loader
    -   npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
    -   npm install vue
        -   问题：模块化加载vue时，webpack会把runtime版本vue打包进去，此时会报错。通过配置webpack解决
        
    -   webpack 加载 .vue文件
```
  resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
          }
      }
```
##  webpack相关plugin
+   npm install --save-dev vue-loader vue-template-compiler 
    -   vue-loader高版本下需要配置额外Plugin，可以手动设置为13.0.0版本
+   webpack横幅插件使用如下
    -   plugins:[
        new webpack.BannerPlugin('最终版权归SHENLILIN所有')
    ]
+   打包html文件到dist部署文件夹  
    -   plugins:[
      new HtmlWebpackPlugin({
            template:'index.html'  模板中定义：div#divDemo..
        })
    ]
+   JS压缩Plugin
    -   npm install --save-dev uglifyjs-webpack-plugin@1.1.1 
    -   plugins:[
       new UglifyJsPlugin({
            test: /\.js($|\?)/i
        })
+   安装webpack-dev-server npm install webpack-dev-server@2.9.3 --save-dev
    -   代码更改浏览器实时刷新，不用重新打包
    -    devServer: {
        contentBase: '../dist',
        inline:true,
        port:8080,
      }
##  webpack配置文件分离
+   npm install webpack-merge --save-dev
+   提取base.config.js prod.config.js dev.config.js并合并配置
```
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: '../dist',
        inline: true,
        port: 8080,
    }
})
```
##  VueCli 脚手架
+   全局安装新版CLI
    -   npm install -g @vue/cli
+   全局安装CLI2.0
    -   npm install -g @vue/cli-init
    -   ESLint js代码规范
    -   e2e test: end to end test端到端测试
+   CLI2创建的项目结构
    -   static文件夹中的文件会原封不动copy到dist
    -   src中的assets中的文件，会根据文件大小决定以base64展示 or 通过服务器文件路径查看
    -   static 中的gitkeep文件，保证git 提交时把空文件夹提交到git repository
    -   babelrc属于babel的配置文件
    -   editorconfig：编辑器设置，例如：代码缩进2空格...
    -   package.json:记录包的大版本信息，npm init 会生成该文件
    -   package-lock.json :记录本地安装的详细包信息，npm install 会生成该文件
+   runtimecompiler && runtimeonly对比
    -   template -> ats -> render -> vdom ->UI
    -   runtimeonly不负责解析template,不能在组件中使用template属性。runtimecompiler则会解析template
    -   vue-template-compiler 会将template自动解析，所以dist代码中不存在template。
+   CLI3创建项目结构 0配置
    -   vue create '项目名'
    -   public 文件夹中的文件会原封不动copy到dist
    -   配置文件查看
        -   1.vue ui
        -   2.node_modules/@vue/cli-services
    -   通过创建文件vue.config.js 可以自定义配置
##  VueRoute路由
+   发展史：后端渲染->前后端分离（前端渲染）->SPA应用
+   后端渲染：类似asp.net MVC可以在不使用JS的情况下，服务器组装好html发送到浏览器上
+   前端渲染：后台api只提供数据，前端接收到数据后通过JS渲染页面
+   后端路由
    -   后端处理URL对应哪个页面返回给浏览器
+   前端路由
    -   静态资源服务器根据不同URL返回不同页面给浏览器，此过程还不涉及后端api服务器