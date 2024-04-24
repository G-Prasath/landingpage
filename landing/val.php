<?php
// kqti jkuz hqnn mbeu
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/phpmailer/PHPMailer/src/Exception.php';
require './vendor/phpmailer/PHPMailer/src/PHPMailer.php';
require './vendor/phpmailer/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['phone'];
    $message = $_POST['msg'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'example@gmail.com'; // SMTP username
        $mail->Password   = 'password';         // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;  // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('rajsuryaco5@gmail.com'); // Add a recipient

        // Content
        $mail->isHTML(true);
        $mail->Subject = $name;

         // Build HTML table with form data
         $email_content = '<h2>Enquiry Quote</h2>';
         $email_content .= '<table>';
         $email_content .= '<tr><td><strong>Name:</strong></td><td>' . $name . '</td></tr>';
         $email_content .= '<tr><td><strong>Email:</strong></td><td>' . $email . '</td></tr>';
         $email_content .= '<tr><td><strong>Subject:</strong></td><td>' . $subject . '</td></tr>';
         $email_content .= '<tr><td><strong>Message:</strong></td><td>' . $message . '</td></tr>';
         $email_content .= '</table>';

         $mail->Body = $email_content;

        $mail->send();
        header("Location: ../landings.php");
    } catch (Exception $e) {
        echo "Sorry, your message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>
