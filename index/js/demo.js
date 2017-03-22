var demo={
  tag:0,
  imgNum:$('.slide-box img').length,
  slide:function(){
    if(demo.tag==demo.imgNum-1){
      demo.tag++
      $('.slide').append($('.slide-box').clone());
      $('.slide-box:last').css('left','100%');
      $('.slide-box:first').animate({'left':'-'+demo.tag*100+'%'},1000);
      $('.slide-box:last').animate({'left':'0'},1000);
      var timeOut=setTimeout(function(){
        $('.slide .slide-box:first').remove();
      },1000);
      demo.tag=0;

    }
    else {
      demo.tag++;
      $('.slide-box').animate({'left':'-'+demo.tag*100+'%'},1000);
    }
  }
}

$(function(){
    $('.slide-box').width(demo.imgNum*100+'%');
    var timer=setInterval(demo.slide,4000);
})
