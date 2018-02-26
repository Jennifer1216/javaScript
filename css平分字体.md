# 平分字体

一个字，被平分成两个半，各占据50%，被平分的两办呈现出不同的样式。下面我将以"快乐"二字为例做进一步演示

# 首先，把快乐二字，拆分开，每个字单独放在一个标签，设置一下简单样式

> ```
> <!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <title>Title</title> <style type="text/css">div {margin:20px auto 0;width:400px;}div span {font-size:100px;}</style></head><body><div> <span>快</span> <span>乐</span></div></body></html>
> ```

![“双十一”已过｜浅谈CSS美化字体（平分字体）](http://p9.pstatp.com/large/46d5000211cc39d472ef)

html + csstj

# 利用伪类

- 利用伪类中content：attr(),这个属性，括号里面传递的参数为标签自定义属性
- 在<span></span>标签添加自定义属性，<span data-text="快"></span><span data-text="乐"></span>
- 在content:attr()括号里，添加自己设置的属性名，content:attr(data-text);

> <!DOCTYPE html>
>
> <html lang="en">
>
> <head>
>
> <meta charset="UTF-8">
>
> <title>Title</title>
>
> <style type="text/css">
>
> div {
>
> margin:20px auto 0;
>
> width:400px;
>
> }
>
> div span {
>
> font-size:100px;
>
> }
>
> span:before {
>
> content:attr(data-text);
>
> color: #cfff8a;
>
> }
>
> </style>
>
> </head>
>
> <body>
>
> <div>
>
> <span data-text="快">快</span>
>
> <span data-text="乐">乐</span>
>
> </div>
>
> </body>
>
> </html>

![“双十一”已过｜浅谈CSS美化字体（平分字体）](http://p1.pstatp.com/large/46d200049b9e940beb47)

content:attr(data-text)展示

# 这时会发现每个文字的前面多了一个相同的字，但是我们需要的只是字的一半

- 采取定位方式，span设为相对定位，
- 伪类设为绝对定位，将宽度设为定位父级的50%，超出部分隐藏

> ```
> <!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <title>Title</title> <style type="text/css">div {margin:20px auto 0;width:400px;}div span {position: relative;width:80px;height:80px;font-size:80px;}span:before {position: absolute;width:50%;height:100%;content:attr(data-text);color: #cfff8a;overflow: hidden;}</style></head><body><div> <span data-text="快">快</span> <span data-text="乐">乐</span></div></body></html>
> ```

![“双十一”已过｜浅谈CSS美化字体（平分字体）](http://p1.pstatp.com/large/46cf000502068025ad5f)

# 左边的效果已经呈现出来，右边就迎刃而解了：）

- 将span:after里的绝对定位的left值设为50%，这样以来起点就从中点开始
- 将文字方向设为从右到中directon:rtl;

> ```
> <!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <title>Title</title> <style type="text/css">div {margin:20px auto 0;width:400px;}div span {position: relative;width:80px;height:80px;font-size:80px;}span:before {position: absolute;width:50%;height:100%;content:attr(data-text);color: #cfff8a;overflow: hidden;}span:after {position: absolute;top:0;left:50%;width:50%;height:100%;content:attr(data-text);color: #6effe0;overflow: hidden;direction: rtl;}</style></head><body><div> <span data-text="快">快</span> <span data-text="乐">乐</span></div></body></html>
> ```

![“双十一”已过｜浅谈CSS美化字体（平分字体）](http://p1.pstatp.com/large/46d00004edef13984798)