<?php
if(isset($_POST['submit'])){
$name = $_POST["name"];
$emailaddress = $_POST["email"];
$subject = $_POST['subject'];
$message = $_POST["message"];
}
/*$EmailTo = "nitesh@digisajilo.com";*/
$EmailTo = "INFO@WORKHAUZ.IN";
$EmailTo = "INFO@WORKHAUZ.IN";
$Subject = "Work Hauz";
// prepare email body text
$Fields .= "<table border='2px' style='border-collapse:collapse; width:100%;'>";
$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>Full Name</td>";
$Fields .= "<td style='padding:5px;'>".$name."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Email</td>";
$Fields .= "<td style='padding:5px;'>".$emailaddress."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Subject</td>";
$Fields .= "<td style='padding:5px;'>".$subject."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>Message</td>";
$Fields .= "<td style='padding:5px;'>".$message."</td>";
$Fields .= "</tr>";
$Fields .= "</table>"; 

// send email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: '.$email. "\r\n";
$success = mail($EmailTo,  $Subject,  $Fields, $headers);
header("Location:index.html");
echo "Submit Your Enquiry";

?>