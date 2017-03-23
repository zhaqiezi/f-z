<?php 
	session_start();
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>
 </head>
 <body>
 <?php 
	try {
		$url="file:///F:/repository/index/html/home.html";
		$dsn="mysql:host=localhost;dbname=mydb";
		$username="root";
		$password="";
		$conn=new PDO($dsn,$username,$password);
		$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$sql="SELECT password FROM user WHERE username=:username OR phonenumber=:phonenumber";
		$stmt=$conn->prepare($sql);
		$stmt->bindParam(":username",$username);
		$stmt->bindParam(":phonenumber",$phonenumber);
		$username=$_POST['username'];
		$phonenumber=$_POST['username'];
		$password=$_POST['password'];
		$res=$stmt->execute();
		$row=$stmt->fetch();
		if($row['password']==""){
			echo "用户不存在";
		}
		elseif($row['password']!==$password){
			echo "密码错误";		
		}else{
			$_SESSION['username'] = $username;
			echo "登录成功！";
		}
		$conn=null;
				
	} catch (PDOException $e) {
		echo "$e->getMessage()";
	}
 ?>
 </body>
 </html>


