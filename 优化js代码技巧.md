# 优化javaScript代码技巧
### 交换两项值
> 假设存在a,b两个数，a = 1,b=2,现要求通过javascript实现数值的交换，也就是让a = 2,b =1;

实现数值的交换大家可能都会想到采用第三方变量

> ```
> //javascript//采用第三方变量实现数值交换var a = 1;var b = 2;var c;c = a;a = b;b = c;console.log(a); //2console.log(b); //1
> ```

使用第三方变量虽然实现了效果，但代码却不是那么美观，因此我们可以通过数组的方式来实现上述效果

> ```
> var a = 1;var b = 2;a = [b,b=a][0];console.log("a的值为："+a);//2console.log("b的值为："+b);//1
> ```

在，a = [b,b=a][0]，把b放在了数组的第一项，此时第二项的值为2，也就是a = [2,b = 1][0],即达到了数值交换的效果，使用此方法避免了声明第三方变量，优化了代码

### 判断浏览器是否是IE8

判断浏览器，一直是蛋疼的事，在以往我只能通过判断浏览器信息，对象，参数来达到效果。而如今受到一位老师的指点变得尤其简单，只须通过简单的代码 !-[1,][即可实现 。大家可能对这段代码有点疑惑，不着急，接下来进行拆解分析

1. alert([1,].length);在chorme,safari,opera，Firfox中length为1，但在IE8及IE以下length会被解析为2,这是因为IE8及IE以下将“，”解析成为了一项值为空的数据,相当于[1, " "]
2. 当在[1,]的前面添加“-”时，因其因为忽略了逗号，浏览器会解析成[1],所以会进行隐式转换，转换成number,然而在IE8中，浏览器会认为有二项值，一项为1，一项为空，数值为空时不能做隐式转换，变成NaN
3. !-[1,]当采用！判断时，会转化为Boolean,在IE8中，!NaN成为true

> ```
> if(!-[1,]){ alert("我是IE8及IE8以下浏览器");}else { alert("我是其它浏览器");}
> ```

此方法主要利用了数组中逗号在IE8的不同的解析模式，从而达到了判断浏览器的效果，节省了资源，还提高代码的可读性

### 将json用数组方式呈现

> ```JavaScript
> var json = {a:1,b:2,c:3};var arr = [];for(arr[arr.length] in json){console.log(arr);}
> ```

![几个优化代码的javascript代码技巧](http://p3.pstatp.com/large/50a70002c934ccbbe1d8)
