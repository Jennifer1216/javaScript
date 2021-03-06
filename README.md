# javaScript
### javaScript解析顺序
1.ES5中变量声明可以用var和function关键字,

2.变量声明会提升（声明只是声明变量，不包括赋值）,

3.先找声明，再执行，

4.遇到等号先看等号右边，声明，执行都遵行从上到下的解析顺序；
#### 情况一
```javascript
alert(a);//undefined
var a =1;
```
- 声明
    var a;
- 执行
   alert(a); //结果为undefined
   a=1;
#### 情况二
```javascript
fn();
function fn() {
  alert(1);//1
}
```
- 声明
fn() {} //方便起见，函数里面的内容就不写了
- 执行
fn() ——>alert(1);//结果为1
### 情况三：当声明有var 和function关键字且变量名一样时，function的优先级高于var
```javascript
alert(a);
function a() {
  alert("我是function");
}
var a =1;
alert(a);
```
- 声明
  a() {};var a;
- 执行
  alert(a);//若按照从下到下解析顺序结果应为undefined,但是由于var 和function关键字且变量名一样时，function的优先级高于var,所以结果为函数块function a() {alert("我是function");}
  a =1;
  alert(a);//结果为1
#### 情况四：函数声明一样，后面的会覆盖前面
```javascript
alert(a);//我是函数2
function a() {
  alert("我是函数1");
}
function a() {
  alert("我是函数2");
}
alert(a);//我是函数2
```
- 声明
  a() {};// 函数1
  a() {};// 函数2，因其变量名一样，将函数1覆盖
- 执行
  alert(a);//函数体（函数1）
  alert(a);//函数体（函数1）
#### 目录
###### [javaScript作用域](https://github.com/Jennifer1216/javaScript/blob/master/%E4%BD%9C%E7%94%A8%E5%9F%9F.md)
###### [原生js实现相册拖拽](https://github.com/Jennifer1216/javaScript/blob/master/dragPhoto/dragPhotos.html)
###### [盒模型](https://github.com/Jennifer1216/javaScript/blob/master/%E7%9B%92%E6%A8%A1%E5%9E%8B.md)
###### [清除浮动](https://github.com/Jennifer1216/javaScript/blob/master/%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8.md)
###### [优化js代码技巧](https://github.com/Jennifer1216/javaScript/blob/master/%E4%BC%98%E5%8C%96js%E4%BB%A3%E7%A0%81%E6%8A%80%E5%B7%A7.md)
###### [js中的"this"](https://github.com/Jennifer1216/javaScript/blob/master/this.md)
###### [object-fit和object-position](https://github.com/Jennifer1216/javaScript/blob/master/object-fit%E5%92%8Cobject-positon.md)
###### [margin百分比](https://github.com/Jennifer1216/javaScript/blob/master/margin%E7%99%BE%E5%88%86%E6%AF%94.md)
