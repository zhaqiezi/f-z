var slidebox=document.getElementsByClassName('slidebox')[0];//获取bannner图的父元素
var list=document.getElementById('slideList');
var slideLi=new Array();
var slideimg=new Array();//定义一个数组变量slideimg来装banner的图
var tag=1;//一个标记
var back=document.getElementById('back');
var next=document.getElementById('next');
slidebox.setAttribute('onmouseover','btnVisible("block")');
slidebox.setAttribute('onmouseout','btnVisible("none")');
back.setAttribute('onclick','changeImg(-1)');
next.setAttribute('onclick','changeImg(100)');
//为数组slideimg赋值
setArrayOfStr(slidebox,slideimg,'IMG');
setArrayOfStr(list,slideLi,'LI');
listShow(slideLi);
starMove(0);
//定义一个定时器变量，来控制banner特效
var roll=setInterval('starMove(tag)',2000);
//定义函数starMove，使得banner图片具有滑动效果。
function starMove(i) {
  if(i>3){
    i=0;
  }
  else if (i<0) {
    i=3;
  }
  tag=i;
  for(var x=0;x<slideimg.length;x++){
    if(x==i){
      slideLi[x].style.backgroundColor='orange';
      slideimg[x].style.display='block';
      slideimg[x].style.marginLeft='1080px';
    }
    else {
        slideimg[x].style.display='none';
        slideLi[x].style.backgroundColor='rgba(200, 200, 200, 0.5)';
    }
  }
  var timer=setInterval(function(){
    if(parseInt(slideimg[i].style.marginLeft)==0){
      clearInterval(timer);
    }
    else {
      slideimg[i].style.marginLeft=parseInt(slideimg[i].style.marginLeft)-10+'px';
    }
  },10);
  console.log(tag);
  tag++;
}
//改变banner特效的顺序
function changeImg(i) {
  if(i<0) {
    tag=tag-2;
  }
  else if(i<4) {
    tag=i;
    clearInterval(roll);
    starMove(tag);
    return;
  }
  clearInterval(roll);
  starMove(tag);
  roll=setInterval('starMove(tag)',2000);
}
//为数组初始化，值为一个元素内的str元素
function setArrayOfStr(node,arr,str) {
  var num=0;
  for(var i=0;i<node.childNodes.length;i++){
    if(node.childNodes[i].nodeName==str){
      arr[num]=node.childNodes[i];
      num++;
    }
  }
}
//改变banner左右选项的类型
function btnVisible(str){
  back.style.display=str;
  next.style.display=str;
}
//为banner中的list设置鼠标事件
function listShow(arr){
  // for(var i=0;i<arr.length;i++){
  //   arr[i].setAttribute('onmouseover','changeImg(this.index)');
  // }
  arr[0].setAttribute('onmouseover','changeImg(0)');
  arr[1].setAttribute('onmouseover','changeImg(1)');
  arr[2].setAttribute('onmouseover','changeImg(2)');
  arr[3].setAttribute('onmouseover','changeImg(3)');
  for(var i=0;i<slideLi.length;i++){
    arr[i].setAttribute('onmouseout','openMove()');
  }

}
function openMove() {
    roll=setInterval('starMove(tag)',2000);
}
