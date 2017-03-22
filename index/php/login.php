<?php 
try {
	$dsn="mysql:host=localhost;dbname=mydb";
	$username="root";
	$password="";
	$conn=new PDO($dsn,$username,$password);
	$username=$_POST['username'];
	$password=$_POST['password'];
	$sql="SELECT password FROM user WHERE username=$username";
	$stmt=$conn->query($sql);
	foreach ($stmt as $row) {
		if($row['password']==$password){
			header("../html/home.html");
			echo "<script>alert('登录成功')</script>";
		}else{
			header("../html/login.html");
			echo "<script>alert('登录成功')</script>";
		}
		}	
} catch (PDOException $e) {
	echo "$e->getMessage()";
}

 ?>
