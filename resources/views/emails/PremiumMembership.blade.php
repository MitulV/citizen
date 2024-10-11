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
        }
    </style>
</head>

<body class="bg-gray-100">
    <table class="w-full h-full bg-gray-100">
        <tr>
            <td></td>
            <td class="w-full max-w-2xl mx-auto py-8">
                <!-- Email Content -->
                <table class="w-full bg-white rounded-lg shadow-md">
                    <!-- Header -->
                    <tr>
                        <td class="bg-green-600 text-white p-6 rounded-t-lg">
                            <h1 class="text-2xl font-semibold">Welcome to Our Premium Membership!</h1>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td class="p-6">
                            <p class="text-gray-700 text-lg leading-relaxed">
                                Hi {{ $mailData['USER_NAME'] }},
                            </p>
                            <p class="text-gray-700 text-lg leading-relaxed mt-4">
                                Thank you for upgrading to our <strong>Premium Package</strong>! We’re thrilled to have
                                you as a valued member. Here’s a summary of your package details:
                            </p>

                            <!-- Package Details -->
                            <table class="w-full mt-6">
                                <tr>
                                    <td class="text-gray-600 font-semibold py-2">Package Name:</td>
                                    <td class="text-gray-900 py-2">{{ $mailData['PACKAGE_NAME'] }}</td>
                                </tr>
                                <tr>
                                    <td class="text-gray-600 font-semibold py-2">Start Date:</td>
                                    <td class="text-gray-900 py-2">{{ $mailData['START_DATE'] }}</td>
                                </tr>
                                <tr>
                                    <td class="text-gray-600 font-semibold py-2">End Date:</td>
                                    <td class="text-gray-900 py-2">{{ $mailData['END_DATE'] }}</td>
                                </tr>
                                <tr>
                                    <td class="text-gray-600 font-semibold py-2">Amount Paid:</td>
                                    <td class="text-gray-900 py-2">{{ $mailData['AMOUNT'] }}</td>
                                </tr>
                            </table>

                            <p class="text-gray-700 text-lg leading-relaxed mt-6">
                                We hope you enjoy the full benefits of your premium package. If you have any questions
                                or need assistance, feel free to reach out to our support team at any time.
                            </p>

                            <p class="text-gray-700 text-lg leading-relaxed mt-4">
                                Welcome aboard and enjoy your premium experience!
                            </p>

                            <div class="mt-6">
                                <a href="#"
                                    class="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition">
                                    View My Account
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="bg-gray-100 text-gray-600 text-center p-6 rounded-b-lg">
                            <p class="text-sm">
                                If you have any questions, feel free to <a href="#"
                                    class="text-green-600 underline">contact our support team</a>.
                            </p>
                            <p class="text-sm mt-2">
                                &copy; 2024 CitizenPrep, All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
            <td></td>
        </tr>
    </table>
</body>

</html>
