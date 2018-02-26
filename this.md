# 关于this一词，相信大家并不陌生，在编程语言中经常会看到，但同时也时最晕头转向的一 个关键字，今天就来认识一下this在javascript中的表现。

# What's the this?

要想理解任何东西，都不能脱离其自身具有的含义。this关键字的含义是明确且具体的，即指代当前对象。既然指代的是不前，就说明this要在某种状态下才能成立，由于运行时绑定的特性，让this变得更加丰富，它可以是全局对象、当前对象或任意对象，这取决于函数的调用方式。

# javascript中函数的调用方式

- 作为普通函数或全局函数调用

这是最常用的方法，我们称之为全局调用，因此，这里的this指代是的**全局对象**（全局对象，这是神马？），少说话，多撸码！！！

> ```
> function eg(){this.d = "Monday";console.log(this.d);// Mondayconsole.log(this);// window}eg();
> ```

这里就不演示控制台结果了，自己去控制台看看，你会发现调用eg()时，先输出Monday,后输出window;此时，说它是全局对象并有说服力……没事儿，喘口气儿，继续装逼

> ```
> var d = "Monday";function eg() {console.log(this.d); //Monday}eg();
> ```

咋回事，怎么又是你（Monday）,不用你提醒我，本姑娘今天又要开始听老师絮絮叨叨了。没事儿，我有的是办法对付你

> ```
> var d = "Monday";function eg() {this.d = "freedom";}eg();console.log(this); //window
> ```

**从上述例子我们可心发现，调用普通函数（函数名加括号），浏览器其this指向的是window**

- 作为对象方法调用

> ```
> var name = "杨熹文";var author = {name:"胡赛尼",showName:function () {console.log(this.name);}};author.showName(); //胡赛尼var otherName = author.showName;otherName(); //杨熹文
> ```

当执行author.showName()时，输出**胡赛尼**，说明这个时候的this是指向author这个对象的；当把author,showName用一个变量来接收时，先想一想一个变量名加个括号othername()有什么寓意，显然，输出它函数的执行环境所指向对象的name,而此时的othername变量等同于window对象下的一个属性，好比window.otherName();这下ohterName()执行的时候，指向的是window,所以会输出**杨熹文**

**作为对象的方法调用时，方法中的this指向该对象名，若是不作为对象方法调用时，指向的时window******

- 作为构造函数调用

javascript中的构造函数也很特殊，就是通过一个函数生成另一个新对象

> ```
> function eg() {this.d = "Monday";}var newObj = new eg();console.log(newObj.d);
> ```

上面为eg这个函数new(构造)了一个新的对象newObj,那么this就会指向newObj这个新对象，所以输出Monday

**作为构造函数调用时，this指向构造的这个新对象，若不构造，即不使用new调用，则和普通函数一样，**

- 用apply,call调用

它们是函数对象的一个API,用另一个对象替换默认（当前）对象

> ```
> var d = "Monday";function eg() {console.log(this.d);}var obj = {};obj.d = "hello";obj.b = eg;obj.b.apply();//Monday
> ```

上面这段代码，当apply()的参数为空时（不传任何参数），即没有任何对象去替换默认（当前）对象，所以默认调用全局对象，所以输出Monday。那接下来我们就为apply传递一个参数

> ```
> var d = "Monday";function eg() {console.log(this.d);}var obj = {};obj.d = "hello";obj.b = eg;obj.b.apply(obj);//hello
> ```

此时我屏住呼吸，输出了hello,说明对象彻底被小三替换，this指向了o这个对象

**当使用apply（）时，传递一个新对象，this就指向这个新对象，不传递，指向默认，另外，若传递的是null或window指向的都是window哟~~**