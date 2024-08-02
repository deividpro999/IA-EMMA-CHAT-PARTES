document.addEventListener('DOMContentLoaded', () => {
    function showAvisoPrincipal() {
        const avisoPrincipal = document.getElementById('aviso-principal');
        avisoPrincipal.style.opacity = 1;
        setTimeout(() => {
            avisoPrincipal.style.opacity = 0;
            setTimeout(() => {
                avisoPrincipal.style.display = 'none';
                showAvisoSecundario();
            }, 1000);
        }, 3000);
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
                    }, 1000);
                }, 3000);
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
        document.getElementById('loading-screen').style.display = 'none';
    }

    function showMenu() {
        fetch('menu.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-content').innerHTML += data;
                document.getElementById('menu').style.display = 'block'; // Mostrar o menu
            })
            .catch(error => console.error('Erro ao carregar o menu:', error));
    }

    showAvisoPrincipal();
});
