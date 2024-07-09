<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <link rel="stylesheet" href="{{ asset('vendor/laraberg/css/laraberg.css') }}">
    <script src="{{ asset('vendor/laraberg/js/laraberg.js') }}"></script>
</head>

<body>

    <form action="{{ route('createTopic.store') }}" method="post" onSubmit="handleSubmit(event)">
        @csrf
        <h1>Hello</h1>
        <textarea id="content" name="content" hidden></textarea>
        <input type="hidden" id="topicId" name="topicId" value="{{ $topicId }}">
        <input type="hidden" id="chapterId" name="chapterId" value="{{ $chapterId }}">
        <input type="submit" value="Save"
            style="background-color: #007CBA;border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;margin-top:10px" />
    </form>
    </form>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Laraberg.init('content');
        });
    </script>

    <script>
        function handleSubmit(event) {
            event.preventDefault();
            const form = event.target;

            fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value,
                    },
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the response as JSON
                })
                .then(data => {
                    console.log(`data is`, data);
                    if (data.topicId && data.chapterId) { // Ensure the necessary data is available
                        //window.location.reload();
                    } else {
                        // Handle errors
                        console.error('Error in response data:', data);
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    </script>

</body>

</html>
