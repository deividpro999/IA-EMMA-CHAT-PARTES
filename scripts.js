document.addEventListener('DOMContentLoaded', () => {
    function showAvisoPrincipal() {
        const avisoPrincipal = document.getElementById('aviso-principal');
        const auraBackground = document.getElementById('aura-background');
        
        if (avisoPrincipal) {
            auraBackground.style.display = 'block';
            avisoPrincipal.style.display = 'block';
            setTimeout(() => {
                auraBackground.style.opacity = 1;
                avisoPrincipal.classList.add('aura');
                avisoPrincipal.style.opacity = 1;
                setTimeout(() => {
                    avisoPrincipal.style.opacity = 0;
                    auraBackground.style.opacity = 0;
                    setTimeout(() => {
                        avisoPrincipal.style.display = 'none';
                        auraBackground.style.display = 'none';
                        showAvisoSecundario();
                    }, 2000); // Tempo para desaparecer
                }, 4000); // Tempo visível
            }, 1000);
        }
    }

    function showAvisoSecundario() {
        const avisoSecundario = document.getElementById('aviso-secundario');
        if (avisoSecundario) {
            setTimeout(() => {
                avisoSecundario.style.display = 'block';
                setTimeout(() => {
                    avisoSecundario.style.opacity = 1;
                    setTimeout(() => {
                        avisoSecundario.style.opacity = 0;
                        setTimeout(() => {
                            avisoSecundario.style.display = 'none';
                            showLoadingScreen();
                        }, 2000); // Tempo para desaparecer
                    }, 5000); // Tempo visível
                }, 0);
            }, 2000); // Atraso para leitura
        }
    }

    function showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'block';
            setTimeout(() => {
                loadingScreen.style.opacity = 1;
                setTimeout(() => {
                    loadingScreen.style.opacity = 0;
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                        loadMainContent();
                    }, 500); // Tempo para desaparecer
                }, 2000); // Tempo para aparecer
            }, 0);
        }
    }

    function loadMainContent() {
        fetch('index.html')
            .then(response => response.text())
            .then(data => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.innerHTML = data;
                    mainContent.style.display = 'block';
                    showMenu();
                }
            })
            .catch(error => console.error('Erro ao carregar o conteúdo:', error));
    }

    function showMenu() {
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.innerHTML += data;
                    const menu = document.getElementById('menu');
                    if (menu) {
                        menu.style.display = 'block';
                        menu.addEventListener('click', function(event) {
                            const target = event.target;
                            if (target.tagName === 'BUTTON') {
                                const option = target.dataset.option;
                                navigateTo(option);
                            }
                        });
                    }
                }
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
