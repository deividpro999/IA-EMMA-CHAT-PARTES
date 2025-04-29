const mensagensManha = [
  { texto: "Bom dia! Vamos fazer esse dia brilhar!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/07e3f6b6d1af2d935615b7cd5a9ad56e0dc89f7a/audios/Bom%20dia!%20Vamos%20fazer%20esse%20dia%20brilhar!.mp3" },
  { texto: "Nunca desista! Cada passo é uma vitória.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/980af71f31e640d7a4c37e60b71440c1f92cb3ed/audios/Nunca%20desista!%20Cada%20passo%20%C3%A9%20uma%20vit%C3%B3ria..mp3" },
  { texto: "Acredite em você! O melhor está por vir.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/3afd31c3537973aed765253033f2047037a4f515/audios/Acredite%20em%20voc%C3%AA!%20O%20melhor%20est%C3%A1%20por%20vir..mp3" },
  { texto: "Hoje é um novo começo, aproveite!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/488258e0b73e468dad67505b17dac71f1e298f3e/audios/Hoje%20%C3%A9%20um%20novo%20come%C3%A7o%2C%20aproveite!.mp3" },
  { texto: "Acorde com determinação e vá dormir com satisfação!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/488258e0b73e468dad67505b17dac71f1e298f3e/audios/Acorde%20com%20determina%C3%A7%C3%A3o%20e%20v%C3%A1%20dormir%20com%20satisfa%C3%A7%C3%A3o!.mp3" },
  { texto: "Cada amanhecer é uma nova chance para ser feliz!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/488258e0b73e468dad67505b17dac71f1e298f3e/audios/Cada%20amanhecer%20%C3%A9%20uma%20nova%20chance%20para%20ser%20feliz!.mp3" },
  { texto: "Que hoje seja melhor que ontem!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/488258e0b73e468dad67505b17dac71f1e298f3e/audios/Que%20hoje%20seja%20melhor%20que%20ontem!.mp3" }
   
];

const mensagensTarde = [
  { texto: "Boa tarde! Como você está se sentindo hoje?", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/8fad33cb6b6e4e9d67364a11d4614743d910e1c6/audios/Boa%20tarde!%20Como%20voc%C3%AA%20est%C3%A1%20se%20sentindo%20hoje!.mp3" },
  { texto: "Você é incrível! Continue assim.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/2d2c5c800107d74d4119153ea98355bf3aab74ff/audios/Voc%C3%AA%20%C3%A9%20incr%C3%ADvel!%20Continue%20assim..mp3" },
];

const mensagensNoite = [
  { texto: "Boa noite! O que você conquistou hoje?", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/main/boa_noite_o_que_voce_conquistou_hoje.mp3"},
  { texto: "Agora o Vilgax vai sentir o gosto do grandão!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/97f217011f34f5ed981285d07f9c522b8b432942/audios/Agora%20o%20Vilgax%20vai%20Sentir%20o%20Gosto%20do%20Grand%C3%A3o!.mp3" },
];

function iniciarModoAuto() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // Limpa o chat

  const horaAtual = new Date().getHours();
  let mensagensSelecionadas = [];

  if (horaAtual >= 6 && horaAtual < 12) {
    mensagensSelecionadas = mensagensManha;
  } else if (horaAtual >= 12 && horaAtual < 18) {
    mensagensSelecionadas = mensagensTarde;
  } else {
    mensagensSelecionadas = mensagensNoite;
  }

  let index = 0;

  function enviarProximaMensagem() {
    if (index < mensagensSelecionadas.length) {
      const mensagem = mensagensSelecionadas[index];
      enviarMensagem(mensagem.texto, mensagem.audio);
      index++;
      if (index < mensagensSelecionadas.length) {
        setTimeout(enviarProximaMensagem, 10000); // Espera 10 segundos para enviar a próxima
      }
    }
  }

  enviarProximaMensagem();
}

function enviarMensagem(texto, audioSrc) {
  const chatBox = document.getElementById("chat-box");

  const div = document.createElement("div");
  div.textContent = texto;
  chatBox.appendChild(div);

  const audio = new Audio(audioSrc);
  audio.play();

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Cria o elemento de áudio
const musicaFundo = document.createElement("audio");
musicaFundo.src = "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/3f6a7a775a020c2d73c1bceabad0c7a4cfa7ac68/audios/Ambient%207%20-%2050%20Cent%20Bulletproof.mp3";
musicaFundo.loop = true;
musicaFundo.volume = 0.4; // Volume mais suave

// Adiciona o elemento no corpo da página
document.body.appendChild(musicaFundo);

// Espera a primeira interação do usuário para tocar (autoplay seguro)
document.addEventListener("click", () => {
  musicaFundo.play().catch(e => {
    console.warn("Erro ao tentar tocar o áudio:", e);
  });
}, { once: true });
