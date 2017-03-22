/*
div class中含有fz-dir-down的div元素
test.tag 一个用来判断的标记
test.x  存储一个不会随着递归改变的值
*/

var test={
  "tag":0,
  "x":0,
  //为node节点添加滑动动画效果
  "slideall":function (node) {
    var element=node;
    while(element.attr('index')<node.next().attr('index')){
      node=node.next();
    }
    test.judge(element);
    if(test.tag==1){
      element.nextUntil(node.next()).hide();
      element.children(':last-child').text('>')
    }
    else if(test.tag==2){
      element.nextUntil(node.next()).show();
      element.children(':last-child').text('^')
    }
  },
  //判断elment节点的下一个节点是否满足条件
  "judge":function (element){
    if (element.attr('index')>=element.next().attr('index')||element.next().length==0) {
      test.tag=0;
    }
    else if (element.next().css('display')=='none') {
      test.tag=2;
    }
    else {
      test.tag=1;
    }
  },
  //用递归的方法添加折叠效果
  "slide":function(node){
    var y=node.next().attr('index');
    if(test.x>=y){
    return;
    }
    if(test.x<y-1){
     if(node.children(':last-child').text()=='^')
      {node.children(':last-child').text('>');}
      node.next().hide();
      test.slide(node.next());
   }
    else{
    node.next().toggle();
    test.slide(node.next());
   }
  },
};

$(function(){
  var $div='<div class="fz-dir-down"></div>';
  $('li.fz-dir-li').append($div);
  var div=$('div.fz-dir-down');
  div.each(function() {
    test.judge($(this).parent())
    if (test.tag!=0) {
      $(this).text('^')
        $(this).parent().mouseover(function(){
    $(this).children(':last-child').show();
  }).mouseout(function(){
    $(this).children(':last-child').hide();
  })
    }
  })

  div.click(function(){
    if($(this).text()=='^'){
      $(this).text('>');
    }
    else {
      $(this).text('^');
    }
    test.x=$(this).parent().attr('index');
    test.slide($(this).parent());
  });
})
