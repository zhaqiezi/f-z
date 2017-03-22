// 商品数量选择
var redusebtn=document.getElementById('reduseNum');
var addbtn=document.getElementById('addNum');
var goodsNum=document.getElementById('num');
var stock=document.getElementById('stock');
var stockNum=parseInt(stock.innerText);
addbtn.onclick=addNum;
redusebtn.onclick=reduseNum;
goodsNum.onchange=changeValue;
function changeValue(){
    var text=goodsNum.value
    if(isNaN(text)){
      alert('请在其中输入数字！');
      goodsNum.value=1;
    }
    else {
      dataException();
    }
}
function addNum(){
  goodsNum.value++;
  dataException();
}
function reduseNum(){
  goodsNum.value--;
  dataException();
}
function dataException() {
  if(goodsNum.value<1)
  {
    goodsNum.value=1;
    alert('商品数量最小值为1！');
  }
  else if (goodsNum.value>stockNum) {
    goodsNum.value=stockNum;
    alert('最大购买量为库存量：'+goodsNum.value);
  }
}
//商品颜色选择
var blue=document.getElementById('color-blue');
var black=document.getElementById('color-black');
var white=document.getElementById('color-white');
var dm=document.getElementById('detail-img');
blue.style.borderColor='#00f';
blue.onclick=borderBlue;
black.onclick=borderBlack;
white.onclick=borderWhite;
function borderWhite(){
  white.style.borderColor='#fff';
  blue.style.borderColor='#777';
  black.style.borderColor='#777';
  dm.style.borderColor="#fff";
}
function borderBlue(){
  blue.style.borderColor='#00f';
  black.style.borderColor='#777';
  white.style.borderColor='#777';
  dm.style.borderColor="#00f";
}
function borderBlack(){
  blue.style.borderColor='#777';
  white.style.borderColor='#777';
  black.style.borderColor='#000';
  dm.style.borderColor="#000";
}
//在价格背后加一个折扣价,并且倒计时
var price=document.getElementsByClassName('price')[0];
var priceHtml=price.innerHTML;
var newprice=document.createElement('span');
var ns=document.createElement('span');
var time=10;
newprice.className= 'price';
newprice.innerText='折扣价格：￥135.00 折扣倒计时：';
var time=10;
price.innerHTML='<del>&yen;168.00</del>';
ns.innerHTML=time;
ns.style.fontSize='20px';
newprice.appendChild(ns);
price.parentNode.parentNode.insertBefore(newprice,price.parentNode.nextSibling);
var times=setInterval(countdown, 1000);
function countdown(){
    ns.innerHTML=time;
    time--;
    if(ns.innerHTML<0){
      removetime();
      clearInterval(times);
    }
}
function removetime(){
    price.innerHTML=priceHtml;
    price.parentNode.parentNode.removeChild(price.parentNode.nextSibling);
}
