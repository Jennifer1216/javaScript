# margin百分比

在最初学习CSS的时候，和大家一样或许对这个问题觉得很简单，没啥可说的，但前不久，my teacher针对这个问题做了下详细的讲解，今天就在这里卖弄一下，这样以后碰到类似的问题，就不用担忧了。话不多说，先来个例子：假设一个块级包含容器，宽500px，高300px，块级子元素其 margin:10% 5%; 大家说说 margin 的 top, right, bottom, left 计算最终值为多少？当时课堂上不少人回答margin:50px 15px，接下来我们来还原代码：

> ```
> //css.wrap{width: 500px;height: 300px;}.wrap box{margin: 10% 5%;color:#fff;text-align: center;font-size:20px;background:skyblue;}//html<div class="wrap"> <div class="box">我是内层盒子</div></div>
> ```

![被忽略的CSS属性margin之百分比](http://p3.pstatp.com/large/471e0001e5e9078992af)

html

![被忽略的CSS属性margin之百分比](http://p3.pstatp.com/large/471b00055ed81cdd5a49)

盒子模型示意图

- 为什么会这样？事实告诉我们结果是 margin:50px 25px，不用怀疑浏览器出了问题，因为这是正确的实现。因为在CSS规范中注明 margin 的百分比值参照其包含块的宽度进行计算。注意：这只发生在默认的 writing-mode: horizontal-tb; 和 direction: ltr; 当书写模式变成纵向的时候，其参照物将会变成包含块的高度。我们改变一下上面例子中的CSS书写模式：

> ```
> .wrap{width: 500px;height: 300px;background:pink;-webkit-writing-mode: vertical-rl;-ms-writing-mode: tb-rl;writing-mode: tb-rl;}.wrap p{margin: 10% 5%;color:#fff;text-align: center;font-size:20px;background:skyblue;}
> ```

![被忽略的CSS属性margin之百分比](http://p3.pstatp.com/large/472000018e88cace027f)

html

![被忽略的CSS属性margin之百分比](http://p1.pstatp.com/large/471d0001ef3a87d2deb4)

writing-mode

- 这时返回的结果是margin:30px 15px ，因为其参照对象变成了包含块的高度。你是否觉得这不符合常规的认知？会感觉应该横向参照是包含块宽度，纵向参照物是包含块高度。其实这是为了要横向和纵向2个方向都创建相同的margin，如果它们的参照物不一致，那就无法得到两个方向相同的留白
- 你可能会问那为什么选择宽度做参考物而不是高度呢？这其实更多的要遵从CSS设计意图，因为CSS的基础需求是排版，其水平宽度一定，而高度一般不设置，由内容撑开。如果以高度为参考物，当高度由内容发生改变时，边距也会同时发生改变，这会造成结构混乱，降低用户体验
- 就像margin: auto; 无法垂直居中？其实原因也是上面所说的，因为纵向是可以无限延展的，所以没有一个一定的值可以被参照被用来计算