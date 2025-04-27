const mensagens = [
  { hora: 6, texto: "Bom dia! Vamos fazer esse dia brilhar!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/07e3f6b6d1af2d935615b7cd5a9ad56e0dc89f7a/audios/Bom%20dia!%20Vamos%20fazer%20esse%20dia%20brilhar!.mp3" },
  { hora: 12, texto: "Boa tarde! Como você está se sentindo hoje?", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/8fad33cb6b6e4e9d67364a11d4614743d910e1c6/audios/Boa%20tarde!%20Como%20voc%C3%AA%20est%C3%A1%20se%20sentindo%20hoje!.mp3" },
  { hora: 18, texto: "Boa noite! O que você conquistou hoje?", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/980af71f31e640d7a4c37e60b71440c1f92cb3ed/audios/Boa%20noite!%20O%20que%20voc%CC%83e%20conquistou%20hoje!.mp3" },
  { texto: "Nunca desista! Cada passo é uma vitória.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/980af71f31e640d7a4c37e60b71440c1f92cb3ed/audios/Nunca%20desista!%20Cada%20passo%20%C3%A9%20uma%20vit%C3%B3ria..mp3" },
  { texto: "Acredite em você! O melhor está por vir.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/3afd31c3537973aed765253033f2047037a4f515/audios/Acredite%20em%20voc%C3%AA!%20O%20melhor%20est%C3%A1%20por%20vir..mp3" },
  { texto: "Você é incrível! Continue assim.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/2d2c5c800107d74d4119153ea98355bf3aab74ff/audios/Voc%C3%AA%20%C3%A9%20incr%C3%ADvel!%20Continue%20assim..mp3" },
  { texto: "Agora o Vilgax vai sentir o gosto do grandão!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/97f217011f34f5ed981285d07f9c522b8b432942/audios/Agora%20o%20Vilgax%20vai%20Sentir%20o%20Gosto%20do%20Grand%C3%A3o!.mp3" }
];

function iniciarModoAuto() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // Limpa o chat

  const horaAtual = new Date().getHours();

  // Mensagem inicial dependendo da hora
  if (horaAtual >= 6 && horaAtual < 12) {
    enviarMensagem(mensagens[0].texto, mensagens[0].audio);
  } else if (horaAtual >= 12 && horaAtual < 18) {
    enviarMensagem(mensagens[1].texto, mensagens[1].audio);
  } else {
    enviarMensagem(mensagens[2].texto, mensagens[2].audio);
  }

  // Depois de um tempo, começar as frases motivacionais
  setTimeout(() => {
    tocarMensagensMotivacionais();
  }, 5000); // Espera 5 segundos depois da mensagem inicial
}

async function tocarMensagensMotivacionais() {
  while (true) {
    const motivacionais = mensagens.slice(3); // Pega só as motivacionais
    const mensagem = motivacionais[Math.floor(Math.random() * motivacionais.length)];
    await enviarMensagem(mensagem.texto, mensagem.audio);
    await esperar(15); // Espera 15 segundos antes da próxima
  }
}

function enviarMensagem(texto, audioSrc) {
  return new Promise((resolve) => {
    const chatBox = document.getElementById("chat-box");

    const div = document.createElement("div");
    div.textContent = texto;
    chatBox.appendChild(div);

    const audio = new Audio(audioSrc);
    audio.play();

    // Quando o áudio terminar, resolver a Promise
    audio.onended = () => {
      resolve();
    };

    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

function esperar(segundos) {
  return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}
