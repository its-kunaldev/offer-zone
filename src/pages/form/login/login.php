
<?php

session_start();
 
$con = mysqli_connect('localhost','root','');

 mysqli_select_db($con,'offerszone');


 $fullname = $_POST['fullname'];
 $mail = $_POST['email'];
 $mob = $_POST['phone'];
 $state = $_POST['statename'];
 $createpwd = $_POST['password'];

$s = "select * from consumer where email = '$mail' && password= '$createpwd'";

$result = mysqli_query($con, $s);

$num = mysqli_num_rows($result);

if ($num == 1)
{
  // $_SESSION['email'] = $mail;
	// $_SESSION['createpassword'] = $createpwd;
 header('location:welcome.php');	 
}
else
{

 header ('location:login.html');
}
?>



