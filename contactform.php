<?php 

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $lName = $_POST['lName'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "m.kafel@wp.pl";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from".$name.".\n\n".$message;

    mail($mailTo, $lName, $txt, $headers);

    header("Location: index.php?mailsend");
}

?>