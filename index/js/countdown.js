/*
倒计时效果
msg为倒计时限时的时间内容。
*/


var countdown={
  msg:24*60*60,
  countdownFn:function(){
    if(countdown.msg<0){
      $('.countdown').css('display','none')
      clearInterval(countdown.timer);
      return;
    }
      $('span.countdown').text(Math.floor(countdown.msg/3600)+'小时'+Math.floor((countdown.msg-Math.floor(countdown.msg/3600)*3600)/60)+'分钟'+countdown.msg%60+'秒');
      countdown.msg--;
      console.log(countdown.msg);
  },
};

$(function(){
  countdown.countdownFn();
  countdown.timer=setInterval('countdown.countdownFn()',1000);
})
