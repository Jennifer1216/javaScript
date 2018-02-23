
     //情况一
      alert(a);
      var a =1;
      //情况二
      fn();
      function fn() {
        alert(1);
      }
      //情况三
      alert(a);
      function a() {
        alert("我是function");
      }
      var a =1;
      alert(a);
      //情况四
      alert(a);
      function a() {
        alert("我是函数");
      }
      function a() {
        alert("我是函数2");
      }
      alert(a);
