function navigateTo(option) {
    let contentDiv = document.getElementById('content');
    switch (option) {
        case 'option1':
            loadContent('chat.html');
            break;
        case 'option2':
            loadContent('carregar.html');
            break;
        case 'option3':
            loadContent('auto.html');
            break;
        case 'option4':
            loadContent('opcoes.html');
            break;
        case 'option5':
            window.close(); // Fechar tudo
            break;
    }
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('content').innerHTML = data;
            document.getElementById('content').style.display = 'flex';
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('menu').style.display = 'flex';
    }, 3000); // 3000 milissegundos = 3 segundos
};
