<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carregando...</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div id="loading">Carregando...</div>
    <script>
        setTimeout(function() {
            window.location.href = 'menu.html';
        }, 2000); // Tempo de carregamento
    </script>
</body>
</html>
