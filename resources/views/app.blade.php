<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <!-- Canonical URL -->
    <link rel="canonical" href="{{ url()->current() }}" />
    <!-- Other meta tags and styles -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TYKJRWE13Z"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-TYKJRWE13Z');
    </script>

    <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CitizenTestPrep",
    "url": "https://www.citizentestprep.ca/",
    "description": "Prepare for the Canadian Citizenship Test with our comprehensive resources! Access 850+ practice questions, flashcards, study guides, and more.",
    "@id": "https://www.citizentestprep.ca/"
  }
</script>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Open Graph Tags for Social Sharing -->
    <meta property="og:title" content="CitizenTestPrep Canada - Canadian Citizenship Practise Test Online">
    <meta property="og:description"
        content="Prepare for the Canadian Citizenship Test with our comprehensive resources! Access 800+ practice questions, flashcards, study guides, and more.">
    <meta property="og:url" content="https://www.citizentestprep.ca/">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://www.citizentestprep.ca/images/citizenship-test-prep.png">

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="CitizenTestPrep Canada - Canadian Citizenship Practise Test Online">
    <meta name="twitter:description"
        content="Prepare for the Canadian Citizenship Test with our comprehensive resources! Access 800+ practice questions, flashcards, study guides, and more.">
    <meta name="twitter:image" content="https://www.citizentestprep.ca/images/citizenship-test-prep.png">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
