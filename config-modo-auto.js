function toggleConfigMenu() {
  const menu = document.getElementById('config-menu');
  menu.classList.toggle('hidden');
}

function trocarFonte(fonte) {
  document.body.style.fontFamily = fonte;
}

function trocarFundo(fundo) {
  if (fundo.startsWith('url')) {
    document.body.style.backgroundImage = fundo;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = fundo;
  }
}
