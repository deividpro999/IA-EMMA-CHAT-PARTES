document.addEventListener('DOMContentLoaded', function () {
    // Verificar se existe um estado salvo e redirecionar imediatamente
    const savedChoice = localStorage.getItem('menuChoice');
    if (savedChoice === 'novo-chat') {
        window.location.href = 'index.html';
        return;
    } else if (savedChoice === 'carregar-chat') {
        window.location.href = 'carregar.html';
        return;
    }

    // Se for 'opcoes', abrir a tela de opções sem sair da página
    if (savedChoice === 'opcoes') {
        document.getElementById('options-screen').classList.remove('hidden');
    }

    // Definição das funções
    function navigateTo(option) {
        localStorage.setItem('menuChoice', option);

        switch (option) {
            case 'novo-chat':
                window.location.href = 'index.html';
                break;
            case 'carregar-chat':
                window.location.href = 'carregar.html';
                break;
            case 'opcoes':
                document.getElementById('options-screen').classList.remove('hidden');
                break;
            case 'sair':
                window.close();
                break;
        }
    }

    function openOptions() {
        document.getElementById('options-screen').classList.remove('hidden');
    }

    function closeOptions() {
        document.getElementById('options-screen').classList.add('hidden');
    }

    function exitApp() {
        window.close();
    }

    // Adicionando eventos aos botões
    document.getElementById('novo-chat').addEventListener('click', function () {
        navigateTo('novo-chat');
    });

    document.getElementById('carregar-chat').addEventListener('click', function () {
        navigateTo('carregar-chat');
    });

    document.getElementById('opcoes').addEventListener('click', function () {
        navigateTo('opcoes');
    });

    document.getElementById('sair').addEventListener('click', function () {
        exitApp();
    });

    document.getElementById('close-options').addEventListener('click', function () {
        closeOptions();
    });
});
