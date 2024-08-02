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
            }, 1000); // Tempo para desaparecer
        }, 3000); // Tempo para exibir
    }

    // Função para mostrar o aviso secundário
    function showAvisoSecundario() {
        const avisoSecundario = document.getElementById('aviso-secundario');
        fetch('aviso-secundario.html')
            .then(response => response.text())
            .then(data => {
                avisoSecundario.innerHTML = data;
                const avisoSecundarioContent = document.getElementById('aviso-secundario-content');
                avisoSecundarioContent.style.display = 'flex'; // Mostrar o aviso secundário
                setTimeout(() => {
                    avisoSecundarioContent.style.opacity = 1; // Iniciar a transição de opacidade
                }, 0); // Garante que a transição começa imediatamente
                setTimeout(() => {
                    avisoSecundarioContent.style.opacity = 0; // Iniciar a transição para desaparecer
                    setTimeout(() => {
                        avisoSecundarioContent.style.display = 'none';
                        loadMainContent();
                    }, 3000); // Tempo para desaparecer
                }, 5000); // Tempo para exibir
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