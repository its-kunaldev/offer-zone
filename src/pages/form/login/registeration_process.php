<?php
session_start();

$con = mysqli_connect('localhost','root','');

 mysqli_select_db($con,'offerszone');

$fullname = $_POST['fullname'];
$mail = $_POST['email'];
$mob = $_POST['phone'];
$state = $_POST['statename'];
$createpwd = $_POST['createpassword'];


$s = "select * from consumer where email = '$mail'";
$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if ($num == 1)
{
 echo '<script> alert ("User already has been registered ") </script>';

}

else
{
	
	$reg = "insert into consumer(fullname,  email, phone , state , password) values 
	('$fullname', '$mail', '$mob', '$state' , '$createpwd')";	
	$_SESSION['fullname'] = $fullname;
mysqli_query($con, $reg);

header('location:login.html');  
}
?>

<script>
			setTimeout(function () {
       window.location.href = "index.php";
    }, 0000); 
</script>



	
