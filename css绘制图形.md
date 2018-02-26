# 心形图

- 原理:利用伪类绘制不同角度圆柱形
- 接下来绘制第一个圆柱形,圆柱的顶部以弧形呈现，尾部以直线呈现

> ```
> .heart {position: relative;margin:20px auto 0;width: 100px;height: 80px;background:blue;}.heart:before {position: absolute;content: "";top: 0;left:0;width: 50px;height: 100%;background: pink;border-radius: 50px 50px 0 0;}
> ```

![纯CSS绘制有趣图形之二](http://p3.pstatp.com/large/47010004b700f194092f)

css绘制第一个圆柱形

- 将其旋转45deg,改变旋转中心，以圆柱尾部右顶点为旋转中心,transform-origin:100% 100%，旋转中心默认为0 0

![纯CSS绘制有趣图形之二](http://p1.pstatp.com/large/470500045c64f4523c29)

css绘制第一个圆柱形

- 同理，绘制第二个圆柱，将其逆时针旋转45deg(-45deg),改变旋转中心（以圆柱尾部左顶点为旋转中心），transform-origin:0 100%;

> ```
> .heart {position: relative;margin:20px auto 0;width: 100px;height: 80px;background:blue;}.heart:before,.heart:after {position: absolute;content: "";top: 0;left:0;width: 50px;height: 100%;background: pink;border-radius: 50px 50px 0 0;-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);transform-origin:100% 100%;}.heart:after {/*left:50%;*/-webkit-transform: rotate(-45deg);-moz-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);transform-origin: 0 100%;}
> ```

![纯CSS绘制有趣图形之二](http://p3.pstatp.com/large/47010004cf203b2670b7)

css绘制第二个圆柱形

- 此时，发现绘制的第二个圆柱形脱离了蓝色盒子，我们可以改下定位距离，让定位为距离蓝色盒子的一半left:50%;这样便能让尾部重合

![纯CSS绘制有趣图形之二](http://p9.pstatp.com/large/47000004dbb60f85767a)

css绘制心形图

# 月亮

- 原理：利用box-shadow

> ```
> .moon {margin:20px auto 0;width: 90px;height: 90px;border-radius: 50%;box-shadow: 15px 15px 0 0 #fff670;}
> ```

![纯CSS绘制有趣图形之二](http://p3.pstatp.com/large/470900024ee113824104)

css绘制月亮

# 阴阳图

- 主要利用渐变，伪类，border设置
- 首先先绘制一个圆形图，圆形呈两色，每种颜色各占50%,绘制的方向，这里以从右到左，左为白，右为黑

> ```
> .yin-yang {position: relative;margin:20px auto 0;width: 100px;height: 100px;-webkit-background-image:linear-gradient(to left,#000 50%,#fff 50%);-moz-background-image:linear-gradient(to left,#000 50%,#fff 50%);-o-background-image:linear-gradient(to left,#000 50%,#fff 50%);-ms-background-image:linear-gradient(to left,#000 50%,#fff 50%);background-image:linear-gradient(to left,#000 50%,#fff 50%);border-radius: 50%;}
> ```

![纯CSS绘制有趣图形之二](http://p1.pstatp.com/large/470000057728eb280d1d)

- 接下下绘制第一个小圆，小圆的直径为整个圆的50%，将其定位在圆的顶部中心位置(top:0;left:50%)，因为还要考虑到小圆还有可见圆心，直接通过宽高来设置相对比较麻烦，所以在这里可采取width,height,border同时使用来实现其效果，圆心用width,height实现，同时设为10px,此时定宽高各剩余40px,我们的小圆的border就只能设为20px

> ```
> .yin-yang:before {content: "";position: absolute;top: 0;left: 50%;margin-left:-25px;width:10px;height:10px;background:#fff;border:20px solid #000;border-radius:50%;}
> ```

![纯CSS绘制有趣图形之二](http://p9.pstatp.com/large/470100057cefd8889acd)

css绘制第一个小圆

- 我们需要的第一个小圆已经出来了，那第二个就很easy了，改变定位位置(bottom:0)，将其背景颜色改变，就可以啦~~

> ```
> .yin-yang:after{content: "";position: absolute;bottom: 0;left: 50%;margin-left:-25px;width:10px;height:10px;background:#000;border:20px solid #fff;border-radius:50%;}
> ```

![纯CSS绘制有趣图形之二](http://p1.pstatp.com/large/47040005415a9feff568)