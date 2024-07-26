if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST['phone'];
    
    $to = "your-email@example.com"; // Замените на ваш адрес электронной почты
    $subject = "Новый запрос на звонок";
    $message = "Номер телефона: " . $phone;
    $headers = "From: no-reply@example.com"; // Замените на ваш адрес электронной почты

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}