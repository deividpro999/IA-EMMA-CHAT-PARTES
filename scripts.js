document.addEventListener('DOMContentLoaded', () => {
    function showAvisoPrincipal() {
        const avisoPrincipal = document.getElementById('aviso-principal');
        avisoPrincipal.style.opacity = 1;
        setTimeout(() => {
            avisoPrincipal.style.opacity = 0;
            setTimeout(() => {
                avisoPrincipal.style.display = 'none';
                showAvisoSecundario();
            }, 1000); // Tempo para desaparecer
        }, 3000); // Tempo para aparecer
    }

    function showAvisoSecundario() {
        const avisoSecundario = document.getElementById('aviso-secundario');
        fetch('aviso-secundario.html')
            .then(response => response.text())
            .then(data => {
                avisoSecundario.innerHTML = data;
                const avisoSecundarioContent = document.getElementById('aviso-secundario-content');
                avisoSecundarioContent.style.display = 'block';
                setTimeout(() => {
                    avisoSecundarioContent.style.opacity = 1;
                }, 0);
                setTimeout(() => {
                    avisoSecundarioContent.style.opacity = 0;
                    setTimeout(() => {
                        avisoSecundarioContent.style.display = 'none';
                        loadMainContent();
                    }, 1000); // Tempo para desaparecer
                }, 3000); // Tempo para aparecer
            })
            .catch(error => console.error('Erro ao carregar o aviso secundário:', error));
    }

    function loadMainContent() {
        fetch('index.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-content').innerHTML = data;
                hideLoadingScreen();
                showMenu();
            })
            .catch(error => console.error('Erro ao carregar o conteúdo:', error));
    }

    function hideLoadingScreen() {
        document.getElementById('loading-screen').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 1000); // Tempo para desaparecer
    }

    function showMenu() {
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-content').innerHTML += data;
                const menu = document.getElementById('menu');
                menu.style.display = 'block';

                // Adiciona o ouvinte de eventos após o menu ser carregado
                menu.addEventListener('click', function(event) {
                    const target = event.target;
                    if (target.tagName === 'BUTTON') {
                        const option = target.dataset.option;
                        navigateTo(option);
                    }
                });
            })
            .catch(error => console.error('Erro ao carregar o menu:', error));
    }

    function navigateTo(option) {
        switch (option) {
            case 'novo-chat':
                window.location.href = 'index.html'; // Redireciona para o conteúdo principal
                break;
            case 'carregar-chat':
                window.location.href = 'carregar-chat.html'; // Redireciona para carregar chat
                break;
            case 'modo-auto':
                window.location.href = 'modo-auto.html'; // Redireciona para modo auto
                break;
            case 'opcoes':
                window.location.href = 'opcoes.html'; // Redireciona para opções
                break;
            case 'sair':
                window.close(); // Fecha a janela
                break;
        }
    }

    showAvisoPrincipal();
});
