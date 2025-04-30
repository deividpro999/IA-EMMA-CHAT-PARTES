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
    // MÚSICA DE FUNDO
const musicaFundo = document.createElement("audio");
musicaFundo.src = "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/3f6a7a775a020c2d73c1bceabad0c7a4cfa7ac68/audios/Ambient%207%20-%2050%20Cent%20Bulletproof.mp3";
musicaFundo.loop = true;
musicaFundo.volume = 0.4;
document.body.appendChild(musicaFundo);

document.addEventListener("click", () => {
  musicaFundo.play().catch(e => console.warn("Erro ao tocar música:", e));
}, { once: true });

const botaoMusica = document.getElementById("icone-musica");
let tocando = false;

botaoMusica.addEventListener("click", () => {
  if (tocando) {
    musicaFundo.pause();
    botaoMusica.textContent = "🔇";
  } else {
    musicaFundo.play().catch(e => console.warn("Erro ao tentar tocar música:", e));
    botaoMusica.textContent = "🎵";
  }
  tocando = !tocando;
});
