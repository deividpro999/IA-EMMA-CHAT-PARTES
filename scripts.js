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
                    }, 2000);
                }, 4000);
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
                        }, 2000);
                    }, 5000);
                }, 0);
            }, 2000);
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
                        showMenu();
                    }, 500);
                }, 2000);
            }, 0);
        }
    }

    function showMenu() {
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.innerHTML = data;
                    mainContent.style.display = 'block';
                    const menu = document.getElementById('menu');
                    if (menu) {
                        menu.style.display = 'flex';
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
                loadMainContent();
                break;
            case 'carregar-chat':
                window.location.href = 'carregar-chat.html';
                break;
            case 'modo-auto':
                window.location.href = 'modo-auto.html';
                break;
            case 'opcoes':
                window.open('opcoes.html', 'Opções', 'width=400,height=400');
                break;
            case 'diretor-animation-story':
                carregarConteudo('diretor-animation-story.html', 'diretor-animation-story.js');
                break;
            case 'sair':
                window.close();
                break;
        }
    }

    function loadMainContent() {
        fetch('content.html')
            .then(response => response.text())
            .then(data => {
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.innerHTML = data;
                    mainContent.style.display = 'block';
                }
            })
            .catch(error => console.error('Erro ao carregar o conteúdo:', error));
    }

    function carregarConteudo(htmlFile, jsFile) {
        const container = document.getElementById('conteudo-dinamico');
        fetch(htmlFile)
            .then(res => res.text())
            .then(html => {
                container.innerHTML = html;
                const script = document.createElement('script');
                script.src = jsFile;
                script.defer = true;
                container.appendChild(script);
            })
            .catch(err => console.error('Erro ao carregar conteúdo:', err));
    }

    showAvisoPrincipal();
});
