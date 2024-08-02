function navigateTo(option) {
    switch (option) {
        case 'option1':
            window.location.href = 'chat.html'; // Redireciona para o conteúdo principal
            break;
        case 'option2':
            window.location.href = 'carregar.html'; // Redireciona para carregar chat
            break;
        case 'option3':
            window.location.href = 'auto.html'; // Redireciona para modo auto
            break;
        case 'option4':
            window.location.href = 'opcoes.html'; // Redireciona para opções
            break;
        case 'option5':
            window.close(); // Fechar tudo
            break;
    }
}