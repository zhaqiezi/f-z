var empty={
  timer:0,
  num:0,
  arrs:document.getElementsByTagName('span'),
  arr:document.getElementsByTagName('button'),
}
var showHtml=function(){
  empty.num++;
  empty.arrs[0].innerHTML=Math.floor(empty.num/3600)+'小时'+Math.floor((empty.num-Math.floor(empty.num/3600)*3600)/60)+'分钟'+empty.num%60+'秒';
}
var starTime=function () {
  empty.timer=setInterval(showHtml,1000)
}
var endTime=function(){
  clearInterval(empty.timer);
}
window.onload=function(){
  empty.arr[0].onclick=function(){
    if(this.innerHTML=='开始'){
      starTime();
      this.innerHTML='暂停';
    }
    else {
      this.innerHTML='开始';
      endTime();
    }
  }
  empty.arr[1].onclick=function () {
    empty.arr[0].innerHTML='开始';
    endTime();
    empty.num=-1;
    showHtml();
  }
}
