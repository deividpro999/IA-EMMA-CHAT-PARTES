document.addEventListener('DOMContentLoaded', function() {
    // Exibir o menu após o carregamento da página
    document.getElementById('menu').style.display = 'flex';

    // Adicionar evento de clique para o botão "Salvar Configurações"
    document.getElementById('save-settings').addEventListener('click', function() {
        // Exemplo de como salvar configurações no localStorage
        localStorage.setItem('menuSettings', JSON.stringify({
            background: 'https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/1f3abf9403b6c13b06a8a8edf0e2e59b7fe36376/TELA%20DO%20MENU%20INICIAL.png',
            width: '1376px',
            height: '772px'
        }));
        alert('Configurações salvas!');
    });

    // Adicionar evento de clique para as opções do menu
    document.querySelectorAll('#menu button[data-option]').forEach(button => {
        button.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            if (option === 'novo-chat') {
                document.getElementById('main-content').style.display = 'block';
                document.getElementById('menu').style.display = 'none';
            }
            // Adicionar lógica para outras opções do menu conforme necessário
        });
    });
});
