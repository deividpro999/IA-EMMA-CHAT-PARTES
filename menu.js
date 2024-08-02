function navigateTo(option) {
    switch (option) {
        case 'option1':
            window.location.href = 'index.html';
            break;
        case 'option2':
            window.location.href = 'carregar-chat.html'; // Atualize com a URL correta
            break;
        case 'option3':
            // Implementar funcionalidade para Modo auto, se necessário
            break;
        case 'option4':
            window.location.href = 'opcoes.html'; // Atualize com a URL correta
            break;
    }
}

document.getElementById('exit').addEventListener('click', function() {
    window.close(); // Fechar tudo
});
