<?php  
  
  $host="localhost";
  $user="root";
  $pass="";
  $db="delta";
  $path=getcwd();
  //  echo $path.$acc_no;
  $dbc = mysqli_connect($host,$user,$pass,$db)
  or die('error connecting to mysql server');

  $unique_code = mysqli_escape_string($dbc,$_POST['code']);
  $movie_name=mysqli_escape_string($dbc,$_POST['moviename']);
  $short_description=mysqli_escape_string($dbc,$_POST['shortdesc']);
  $movie_link=mysqli_escape_string($dbc,$_POST['movielink']);
  //echo $unique_code.$movie_name.$movie_link.$short_description;
  //$unique_code='106113077';

  

$query1 = "UPDATE register SET movie_name='".$movie_name."',movie_description='".$short_description."',movie_link='".$movie_link."' WHERE unique_code='".$unique_code."'"; 
$result=mysqli_query($dbc,$query1)
or die('invalid unique code');
mysqli_close($dbc);

      
move_uploaded_file($_FILES["poster"]["tmp_name"],$path.'/posters/'.$movie_name )         //movie_name is unique
        or die('Error uploading');
echo 'updated successfully';      
?>