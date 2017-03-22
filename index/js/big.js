/*
	samplebox 当前图片区域
	hover 鼠标移入区域
	l 当前图片左距离
	t 当前图片上距离
	x 鼠标距离X轴
	y 鼠标距离Y轴
  time 计时器返回值
	w 鼠标移入图片块宽度
	h 鼠标移入图片块高度
	showbox 展示大图区域
*/

function Zoom(sampleimg,hover,showimg,w,h,l,t,x,y,scaleH,scaleW) {
  var moveX=x-l-w/2;
  var moveY=y-t-h/2;
  if(moveX<0){moveX=0;}
  if(moveY<0){moveY=0;}
    //确保hover不会超出samplebox的范围
  if(moveX>sampleimg.width()-w){moveX=sampleimg.width()-w}
  if(moveY>sampleimg.height()-h){moveY=sampleimg.height()-h}
  showimg.css({left:-moveX*scaleW,top:-moveY*scaleH});
  hover.css({left:moveX,top:moveY});
}

function Zoomhover(sampleimg,hover,showimg) {
  //确定两张图片的比例
  var scaleH=showimg.width()/sampleimg.width();
  var scaleW=showimg.height()/sampleimg.height();
  var w=sampleimg.width()/scaleW;
  var h=sampleimg.height()/scaleH;
  var l=sampleimg.offset().left;
  var t=sampleimg.offset().top;
  var time;
  hover.width(w);
  hover.height(h);
  $('.samplebox,.hover').mousemove(function(e){
    var x=e.pageX;
    var y=e.pageY;
    $('.showbox,.hover').show();
    time=setTimeout(Zoom(sampleimg,hover,showimg,w,h,l,t,x,y,scaleH,scaleW),1)
  }).mouseout(function () {
    $('.hover,.showbox').hide();
  })
}
$(function(){
  Zoomhover($('.samplebox img'),$('.hover'),$('.showbox img'));
})

// var test=document.getElementsByClassName('samplebox')[0];
// test.onclick=function(){
//   alert('Js能运行');
// }
