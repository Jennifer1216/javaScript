//获取内部样式
function getStyle(obj) {
    return obj.currentStyle|| getComputedStyle(obj);//兼容低版本IE浏览器
}
//时间版运动框架
function move2(obj,json,time,callback) {
  //requestAnimationFrame() && cancelAnimationFrame()
  window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
    return setTimeout(fn,1000/60);
  };
  window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
  //将各个属性存放入一个对象中
  var startVal = {},
      S = {};
  for(var key in json) {
    //各个属性的初始值为多少
    startVal[key] = parseFloat(getStyle(obj)[key]);
    //各个属性的变化值
    S[key] = json[key] - startVal[key];
    //过虑各个目标值 === 初始值
    if(!S[key]){
      delete S[key];
      delete json[key];
    }
  }
  //初始时间值
  var startTime = new Date();
  fn();
  function fn() {
    var prop = (new Date() - startTime) / time;
    prop >=1 ? prop =1:requestAnimationFrame(fn);
    for(var key in S) {
      //判断attr === opacity?
      if(obj.style[key] === "opacity") {
        var opaVal = S[key] * prop + startVal[key];
        obj.style[key] = opaVal;
        obj.style.filter = "alpha(opacity =="+ opaVal + "*10)";
      }else {
        obj.style[key] = S[key] * prop + startVal[key] + "px";
      }
    }
    if(prop === 1) callback && callback.call(obj);
  }
}
