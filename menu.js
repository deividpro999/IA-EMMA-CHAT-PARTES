document.addEventListener('DOMContentLoaded', function() {
    // Adiciona funcionalidade aos botões
    document.getElementById('menu').addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            if (target.textContent === 'Novo chat') {
                navigateTo('index.html');
            } else if (target.textContent === 'Carregar chat') {
                navigateTo('load-chat.html');
            } else if (target.textContent === 'Opções') {
                openOptions();
            } else if (target.textContent === 'Sair') {
                exitApp();
            }
        }
    });

    document.getElementById('options-menu').addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            if (target.textContent === '1376x722') {
                setResolution('1376x722');
            } else if (target.textContent === '1920x1080') {
                setResolution('1920x1080');
            } else if (target.textContent === '1280x720') {
                setResolution('1280x720');
            } else if (target.textContent === 'Fechar Opções') {
                closeOptions();
            }
        }
    });
});

function navigateTo(page) {
    window.location.href = page;
}

function openOptions() {
    document.getElementById('options-screen').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
}

function closeOptions() {
    document.getElementById('options-screen').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
}

function setResolution(resolution) {
    // Implementar lógica para mudar resolução aqui
    alert('Resolução ' + resolution + ' selecionada!');
}

function exitApp() {
    window.close(); // Para ambiente local, pode não funcionar como esperado
}
