var submit=document.getElementsByName('submit')[0];
var userName=document.getElementsByName('username')[0];
var password=document.getElementsByName('password')[0];
var rePassword=document.getElementsByName('repassword')[0];
submit.onclick=validate;
function validate(){
  if(userName.value==''){
    alert('账号不能为空');
  }
  else if (password.value.length<6||password.value.length>18) {
    alert('密码长度最小为6位，最长为18位');
  }
  else if (rePassword.value!=password.value) {
    alert('两次输入的密码不相同');
  }
}
