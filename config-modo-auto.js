// Função para abrir/fechar o menu (ESSA É A QUE ESTÁ FALTANDO!)
function toggleConfigMenu() {
  const menu = document.getElementById('config-menu');
  menu.classList.toggle('hidden');
}

// Função para trocar a fonte e salvar no localStorage
function trocarFonte(fonte) {
  document.body.style.fontFamily = fonte;
  localStorage.setItem('font', fonte);  // Salva a fonte no localStorage
}

// Função para trocar o fundo e salvar no localStorage
function trocarFundo(fundo) {
  if (fundo.startsWith('url')) {
    document.body.style.backgroundImage = fundo;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = fundo;
  }
  localStorage.setItem('fundo', fundo);  // Salva o fundo no localStorage
}

// Função para carregar as configurações salvas quando a página é carregada
window.onload = function() {
  const font = localStorage.getItem('font');
  const fundo = localStorage.getItem('fundo');

  // Aplica a fonte salva, se houver
  if (font) {
    document.body.style.fontFamily = font;
  }

  // Aplica o fundo salvo, se houver
  if (fundo) {
    if (fundo.startsWith('url')) {
      document.body.style.backgroundImage = fundo;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    } else {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = fundo;
    }
  }
};
