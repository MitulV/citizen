<!DOCTYPE html>
<html>

<head>
    <title>Contact Message</title>
</head>

<body>
    <h1>Contact Message from {{ $mailData['name'] }}</h1>
    <p>Email: {{ $mailData['email'] }}</p>
    <p>Message: {{ $mailData['message'] }}</p>
</body>

</html>
