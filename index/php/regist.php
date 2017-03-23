<?php 
	try {
		$dsn="mysql:host=localhost;dbname=mydb";
		$username="root";
		$password="";
		$conn=new PDO($dsn,$username,$password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$sql="CREATE TABLE IF NOT EXISTS user(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,username VARCHAR(20) NOT NULL UNIQUE,password VARCHAR(20) NOT NULL,phonenumber VARCHAR(11) NOT NULL UNIQUE)";
		$conn->exec($sql);
		$sql="INSERT INTO user(username,password,phonenumber) VALUES(:username,:password,:phonenumber)";
		$stmt=$conn->prepare($sql);
		//绑定变量
		$stmt->bindParam(":username",$username);
		$stmt->bindParam(":password",$password);
		$stmt->bindParam(":phonenumber",$phonenumber);
		$username=$_POST['username'];
		$phonenumber=$_POST['phonenumber'];
		$password=$_POST['password'];
		$repassword=$_POST['repassword'];
		$res=$stmt->execute();
		if($res&&$password==$repassword){
			echo "注册成功";
		} else {
			echo "注册失败";
		}

	} catch (PDOException $e) {
		echo "注册失败<br>";
		echo $e->getMessage();
	}
 ?>
