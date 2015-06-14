<?php  
  
  $host="localhost";
  $user="root";
  $pass="";
  $db="delta";
  $path=getcwd();
 
  $dbc = mysqli_connect($host,$user,$pass,$db)
  or die('error connecting to mysql server');

  $name = mysqli_escape_string($dbc,$_POST['name']);
  $mobile=mysqli_escape_string($dbc,$_POST['mobile']);
  $email=mysqli_escape_string($dbc,$_POST['email1']);
  $coll=mysqli_escape_string($dbc,$_POST['coll']);
  $acc_no=mysqli_escape_string($dbc,$_POST['acc_no']);
  $acc_name=mysqli_escape_string($dbc,$_POST['acc_name']);
  $bank=mysqli_escape_string($dbc,$_POST['bank']);
  
    


$query1="INSERT INTO register(name,mobile,email,coll,acc_no,acc_name,bank) values('$name','$mobile','$email','$coll','$acc_no','$acc_name','$bank')";
$result=mysqli_query($dbc,$query1)
or die('error querying 2');
mysqli_close($dbc);

      
      move_uploaded_file($_FILES["receipt"]["tmp_name"],
         $path .$acc_no )         //acc_no is unique
        or die('Error uploading');
    
echo 'you have successfully <br>signed up :)';

	
?>