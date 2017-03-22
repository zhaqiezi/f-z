<?php 
$str=$_POST['title'].','.$_POST['content']."\n";
$file=fopen('./welcome.txt', 'a');
fwrite($file, $str);
fclose($file);
$file=fopen('./welcome.txt', 'r');
fgetcsv($file);
while (($row=fgetcsv($file))!=false) {
	echo "<h1>$row[0]</h1><br/><p>$row[1]</p>";
	echo "<br/>";
}
fclose($file);
 ?>
