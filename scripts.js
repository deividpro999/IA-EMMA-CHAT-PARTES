document.addEventListener('DOMContentLoaded', () => {
    // Função para mostrar o aviso principal
    function showAvisoPrincipal() {
        const avisoPrincipal = document.getElementById('aviso-principal');
        avisoPrincipal.style.opacity = 1;
        setTimeout(() => {
            avisoPrincipal.style.opacity = 0;
            setTimeout(() => {
                avisoPrincipal.style.display = 'none';
                showAvisoSecundario();
            }, 2000); // Tempo para desaparecer
        }, 5000); // Tempo para exibir
    }

    // Função para mostrar o aviso secundário
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
                }, 0); // Garante que a transição começa imediatamente
                setTimeout(() => {
                    avisoSecundarioContent.style.opacity = 0;
                    setTimeout(() => {
                        avisoSecundarioContent.style.display = 'none';
                        loadMainContent();
                    }, 2000); // Tempo para desaparecer (2 segundos)
                }, 5000); // Tempo para exibir (5 segundos)
            })
            .catch(error => console.error('Erro ao carregar o aviso secundário:', error));
    }

    // Função para ocultar a tela de carregamento e mostrar o conteúdo principal
    function hideLoadingScreen() {
        document.getElementById('loading-screen').style.display = 'none';
    }

    // Função para carregar o conteúdo principal
    function loadMainContent() {
        fetch('content.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-content').innerHTML = data;
                hideLoadingScreen(); // Ocultar a tela de carregamento
            })
            .catch(error => console.error('Erro ao carregar o conteúdo:', error));
    }

    // Inicialização
    function initialize() {
        document.getElementById('loading-screen').style.display = 'block';
        showAvisoPrincipal(); // Mostrar o aviso principal
    }

    initialize(); // Iniciar a carga
});
