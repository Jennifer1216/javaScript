# CSS自定义变量

有过编程基础的人对变量一词应该不陌生。CSS 变量，即由网页的作者或用户定义的实体，用来指定文档中的特定变量。更准确来说，应称之为 CSS 自定义属性 ，不过为更好理解称之为 CSS 变量。然而学过CSS的人都知道，CSS 中是没有变量而言的，要使用 CSS 变量，只能借助 SASS 或者 LESS 预编译器。但现在，我们可以直接在CSS中定义和使用变量，接下来我们来看一个例子：

> ```
> /*声明一个变量*/:root{--bgColor: #90ffc1;}
> ```

上面代码中，借助了结构性伪类中的 :root{ } 中，在全局 :root{ } 中定义了一个 CSS 变量，命名为 --bgColor，名字前面一定要注意符号（--），定义变量（通过**var(定义义变量名)**来调用。）后，接下来咱来设置一个颜色为#90ffc1的div

> ```
> //CSS:root{--bgColor: #90ffc1;}.box {background:var(--bgColor);}//HTML<div class="box"></div>
> ```

![CSS变量（CSS Variables）使用的方法和好处](http://p1.pstatp.com/large/470c000215924a7df27d)

CSS自定义变量效果如图

# CSS 变量的层叠与作用域

- CSS 变量是支持继承的，不过这里说成级联或者层叠更好
- 在 CSS 中，一个元素的实际属性是由其自身属性以及其祖先元素的属性层叠得到的，CSS 变量也支持层叠的特性，当一个属性没有在当前元素定义，则会转而使用其祖先元素的属性。若当前元素有定义的属性，将会覆盖祖先元素
- 和作用域有异曲同工之处，通俗一点就是局部变量会在作用范围内覆盖全局变量。同名属性

> ```
> :root{--bgColor: pink;}.box {margin:20px auto 0;width: 200px;height: 200px;--bgColor: blue;background-color:var(--bgColor);}
> ```

这时生效的是--bgColor:blue，而不是--bgColor:pink

![CSS变量（CSS Variables）使用的方法和好处](http://p3.pstatp.com/large/470c00022158740e44d6)

css变量的层叠与作用域示意图

# 注意： CSS 变量并不支持 !important

> ```
> :root{--bgColor: pink !important;（不支持!important）}.box {margin:20px auto 0;width: 200px;height: 200px;--bgColor: blue;background-color:var(--bgColor);}
> ```

# CSS 变量的组合

CSS 变量也可以进行组合使用,先看看下面例子：

> ```
> :root{--first-word:"this";--second-word:"is";--third-word:"CSS Variable";--word-color:skyblue;}.box:before{content:var(--first-word)' 'var(--second-word)' 'var(--third-word);display: block;color:var(--word-color);}
> ```

上面boxd 的内容将会显示为:this is CSS Variable

![CSS变量（CSS Variables）使用的方法和好处](http://p1.pstatp.com/large/471000023cd70c84aeeb)

css变量示意图

# CSS 变量&& calc( )

CSS 变量可以和calc( ) 一起使用，来看看下面这个例子：

> ```
> :root{--f-size: 14px;}.box {font-size: calc(var(--f-size) * 2);color:skyblue;text-align: center;}
> ```

CSS 变量结合 calc（），得到的最终结果是font-size:28px

![CSS变量（CSS Variables）使用的方法和好处](http://p9.pstatp.com/large/47100002439ee24f7e05)

CSS 变量&&calc（）示意图

# CSS 变量的好处

- 代码更加简单明了，不重复

  一个网页会使用到很多重复的样式（色彩，字体的大小，间距），如果采用了变量来声明，会减少浏览器的渲染机制，从而大大提高效率

> ```
> /*你需要的统一样式*/:root {--f-color:#ffbc9d;--t-indent:18px;--f-size:14px;}.p1 {color:var(--f-color);text-indent:var(--t-indent);font-size: var(--f-size);}.p2 {color:var(--f-color);text-indent:var(--t-indent);font-size: var(--f-size);}<div class="box"><p class="p1">我是p1</p><p class="p2">我是p2</p></div>}
> ```

小伙伴们肯定会觉得这是在搞事情，会认为直接给父级一个样式不就可以了吗，简单粗暴，但由于这里CSS 改变的样式属性较少，当数量达到一定程度，使用 CSS 变量会是更好的选择，有利于后期更改

# 精简代码，减少冗余，代码更直观，有利于响应式开发

> ```
> :root {--max-width:1200px;--min-fs:20px;--color:skyblue;}.box {width:var(--max-width);height:300px;font-size:var(--min-fs);color:var(--color);}@media screen and (min-width:600px) {:root {--min-fs:18px;--color: #d0ff99;}}
> ```

好啦，分享完毕了，就要大家自己去动手试试，有任何疑问可以在评论区留言，至于CSS变量的兼容性可查询 https://caniuse.com/#search=css%20var~~