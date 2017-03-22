var login=document.getElementsByName('button')[0];
var useName=document.getElementsByClassName('logininput')[0];
var passWord=document.getElementsByClassName('logininput')[1];
login.onclick=check;
function check(){
  if(useName.value==''){
    alert('账号不能为空！');
  }
  else if (passWord.value.length<6) {
    alert('密码长度不足！');
  }
}
