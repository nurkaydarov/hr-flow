<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body>
@include('hr.partials.navbar')
<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">

    @include('hr.partials.sidebar')

    <div id="main-content" class="flex flex-col min-h-screen relative w-full  overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main>
            @yield('main')
        </main>
        @include('hr.partials.footer')
    </div>

</div>
</body>
</html>
