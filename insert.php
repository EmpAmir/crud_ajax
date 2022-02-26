<?php 
include 'dbConn.php';
$data = stripslashes(file_get_contents("php://input")) ;
$mydata = json_decode($data,true);
$name = $mydata['name'];
$email = $mydata['email'];
$password = $mydata['password'];
$id = $mydata['id'];
//For Insert data only
// if (!empty($name) && !empty($email) && !empty($password)) {
//     $sql = "INSERT INTO student(name,email, password) VALUES ('$name','$email','$password')";
//     if ($conn->query($sql) == TRUE) {
//         echo "Student Data Saved Sucessfully!!";
//     } else {
//         echo "Unable to Save!!";
//     }  
// } else {
//     echo "Fill all Fields!!";
// }
//For Insert& Update data only

if (!empty($name) && !empty($email) && !empty($password)) {
    $sql = "INSERT INTO student(id,name,email, password) VALUES ('$id','$name','$email','$password') ON DUPLICATE KEY UPDATE name='$name',email='$email',password='$password'";
    if ($conn->query($sql) == TRUE) {
        echo "Student Data Saved Sucessfully!!";
    } else {
        echo "Unable to Save!!";
    }  
} else {
    echo "Fill all Fields!!";
}

?>