document.addEventListener('DOMContentLoaded', function() {
    // Definição das funções
    
    // Função para navegação
    function navigateTo(option) {
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
                window.close(); // Fechar a aba/ventana
                break;
        }
    }

    // Função para abrir opções
    function openOptions() {
        document.getElementById('options-screen').classList.remove('hidden');
    }

    // Função para fechar opções
    function closeOptions() {
        document.getElementById('options-screen').classList.add('hidden');
    }

    // Função para sair da aplicação
    function exitApp() {
        window.close();
    }

    // Adicionando eventos aos botões
    document.getElementById('novo-chat').addEventListener('click', function() {
        navigateTo('novo-chat');
    });

    document.getElementById('carregar-chat').addEventListener('click', function() {
        navigateTo('carregar-chat');
    });

    document.getElementById('opcoes').addEventListener('click', function() {
        openOptions();
    });

    document.getElementById('sair').addEventListener('click', function() {
        exitApp();
    });

    document.getElementById('close-options').addEventListener('click', function() {
        closeOptions();
    });
