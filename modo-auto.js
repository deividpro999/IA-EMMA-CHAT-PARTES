const mensagens = [
  { hora: 6, texto: "Bom dia! Vamos fazer esse dia brilhar!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/07e3f6b6d1af2d935615b7cd5a9ad56e0dc89f7a/audios/Bom%20dia!%20Vamos%20fazer%20esse%20dia%20brilhar!.mp3" },
  { hora: 12, texto: "Boa tarde! Como você está se sentindo hoje?", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/8fad33cb6b6e4e9d67364a11d4614743d910e1c6/audios/Boa%20tarde!%20Como%20voc%C3%AA%20est%C3%A1%20se%20sentindo%20hoje!.mp3" },
  { hora: 18, texto: "Boa noite! O que você conquistou hoje?", audio: "audios/boa-noite.mp3" },
  { texto: "Nunca desista! Cada passo é uma vitória.", audio: "audios/motivacional1.mp3" },
  { texto: "Acredite em você! O melhor está por vir.", audio: "audios/motivacional2.mp3" },
  { texto: "Você é incrível! Continue assim.", audio: "audios/motivacional3.mp3" }
];

function iniciarModoAuto() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // Limpa o chat

  // Função para checar a hora e exibir a mensagem correta
  const horaAtual = new Date().getHours();
  
  // Enviar a saudação dependendo da hora
  if (horaAtual >= 6 && horaAtual < 12) {
    enviarMensagem("Bom dia! Vamos fazer esse dia brilhar!", "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/07e3f6b6d1af2d935615b7cd5a9ad56e0dc89f7a/audios/Bom%20dia!%20Vamos%20fazer%20esse%20dia%20brilhar!.mp3");
  } else if (horaAtual >= 12 && horaAtual < 18) {
    enviarMensagem("Boa tarde! Como você está se sentindo hoje?", "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/8fad33cb6b6e4e9d67364a11d4614743d910e1c6/audios/Boa%20tarde!%20Como%20voc%C3%AA%20est%C3%A1%20se%20sentindo%20hoje!.mp3");
  } else {
    enviarMensagem("Boa noite! O que você conquistou hoje?", "audios/boa-noite.mp3");
  }

  // Enviar frases motivacionais aleatórias com intervalo
  setInterval(() => {
    const mensagemMotivacional = mensagens[Math.floor(Math.random() * 3) + 3];
    enviarMensagem(mensagemMotivacional.texto, mensagemMotivacional.audio);
  }, 10000); // Envia uma frase motivacional a cada 10 segundos
}

function enviarMensagem(texto, audioSrc) {
  const chatBox = document.getElementById("chat-box");

  // Adiciona a mensagem no chat
  const div = document.createElement("div");
  div.textContent = texto;
  chatBox.appendChild(div);

  // Toca o áudio
  const audio = new Audio(audioSrc);
  audio.play();

  // Rolagem automática para mostrar a última mensagem
  chatBox.scrollTop = chatBox.scrollHeight;
}
