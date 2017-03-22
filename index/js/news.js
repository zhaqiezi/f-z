
function newMas(){
  var content=document.getElementsByClassName('content')[0];
  var contentNews=document.getElementsByClassName('content-news')[0];
  var warn=document.createElement('div');
  warn.style.width='600px';
  warn.style.height='30px';
  warn.style.backgroundColor='#8deeee';
  warn.style.borderRadius='30px';
  warn.style.textAlign='center';
  warn.style.lineHeight='30px'
  warn.innerText='您有一条消息未读取！';
  content.insertBefore(warn,contentNews);
}

window.setTimeout(newMas, 3000);
