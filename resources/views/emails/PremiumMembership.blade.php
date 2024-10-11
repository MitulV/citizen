<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Premium Membership!</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7fafc;
            /* Light gray background */
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background-color: #ffffff;
            /* White background for the email content */
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            /* Max width for better readability */
        }

        .header {
            background-color: #38a169;
            /* Green background */
            color: #ffffff;
            /* White text */
            padding: 24px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            text-align: center;
        }

        .content {
            padding: 24px;
        }

        .footer {
            background-color: #f7fafc;
            /* Light gray background */
            text-align: center;
            padding: 16px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        .button {
            background-color: #38a169;
            /* Green background */
            color: #ffffff;
            /* White text */
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 6px;
            display: inline-block;
            font-size: 16px;
            margin-top: 16px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #2f855a;
            /* Darker green on hover */
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Welcome to Our Premium Membership!</h1>
        </div>

        <!-- Body -->
        <div class="content">
            <p>Hi {{ $mailData['USER_NAME'] }},</p>
            <p>Thank you for upgrading to our <strong>Premium Package</strong>! We’re thrilled to have you as a valued
                member. Here’s a summary of your package details:</p>

            <!-- Package Details -->
            <table style="width: 100%; margin-top: 16px;">
                <tr>
                    <td style="font-weight: bold;">Package Name:</td>
                    <td>{{ $mailData['PACKAGE_NAME'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Start Date:</td>
                    <td>{{ $mailData['START_DATE'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">End Date:</td>
                    <td>{{ $mailData['END_DATE'] }}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Amount Paid:</td>
                    <td>{{ $mailData['AMOUNT'] }}</td>
                </tr>
            </table>

            <p>We hope you enjoy the full benefits of your premium package. If you have any questions or need
                assistance, feel free to reach out to our support team at any time.</p>

            <p>Welcome aboard and enjoy your premium experience!</p>

            <div>
                <a href="#" class="button">View My Account</a>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>If you have any questions, feel free to <a href="#"
                    style="color: #38a169; text-decoration: underline;">contact our support team</a>.</p>
            <p>&copy; 2024 CitizenPrep, All rights reserved.</p>
        </div>
    </div>
</body>

</html>
