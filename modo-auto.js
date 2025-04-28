// Mensagens da manhã
const mensagensManha = [
  { texto: "Bom dia! Vamos fazer esse dia brilhar!", audio: "link1.mp3" },
  { texto: "Acorde e brilhe! Hoje é seu dia!", audio: "link2.mp3" },
  { texto: "Sorria para um novo começo!", audio: "link3.mp3" },
  { texto: "Respire fundo, o sucesso te espera!", audio: "link4.mp3" },
  { texto: "Hoje é o primeiro dia do resto da sua vida!", audio: "link5.mp3" },
  { texto: "Levante e mostre ao mundo sua força!", audio: "link6.mp3" },
  { texto: "Cada manhã é uma nova oportunidade!", audio: "link7.mp3" },
  { texto: "Comece o dia acreditando em você!", audio: "link8.mp3" },
  { texto: "O amanhecer traz novas chances!", audio: "link9.mp3" },
  { texto: "Você é capaz de grandes coisas hoje!", audio: "link10.mp3" },
];

// Mensagens da tarde
const mensagensTarde = [
  { texto: "Boa tarde! Como você está se sentindo hoje?", audio: "link11.mp3" },
  { texto: "Continue firme, seu esforço vale a pena!", audio: "link12.mp3" },
  { texto: "Dê uma pausa e respire. Você merece!", audio: "link13.mp3" },
  { texto: "Aproveite essa tarde para crescer!", audio: "link14.mp3" },
  { texto: "Nunca desista! Cada passo é uma vitória.", audio: "link15.mp3" },
  { texto: "Você é mais forte do que imagina!", audio: "link16.mp3" },
  { texto: "Cada desafio te torna melhor!", audio: "link17.mp3" },
  { texto: "Seu brilho ilumina essa tarde!", audio: "link18.mp3" },
  { texto: "Acredite em você! O melhor está por vir.", audio: "link19.mp3" },
  { texto: "Siga em frente com coragem!", audio: "link20.mp3" },
];

// Mensagens da noite
const mensagensNoite = [
  { texto: "Boa noite! O que você conquistou hoje?", audio: "Boa noite! O que você conquistou hoje?", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/980af71f31e640d7a4c37e60b71440c1f92cb3ed/audios/Boa%20noite!%20O%20que%20voc%CC%83e%20conquistou%20hoje!.mp3" },
  { texto: "Relaxe, você deu o seu melhor!", audio: "link22.mp3" },
  { texto: "Nunca desista! Cada passo é uma vitória.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/980af71f31e640d7a4c37e60b71440c1f92cb3ed/audios/Nunca%20desista!%20Cada%20passo%20%C3%A9%20uma%20vit%C3%B3ria..mp3" },
  { texto: "Acredite em você! O melhor está por vir.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/3afd31c3537973aed765253033f2047037a4f515/audios/Acredite%20em%20voc%C3%AA!%20O%20melhor%20est%C3%A1%20por%20vir..mp3" },
  { texto: "Você é incrível! Continue assim.", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/2d2c5c800107d74d4119153ea98355bf3aab74ff/audios/Voc%C3%AA%20%C3%A9%20incr%C3%ADvel!%20Continue%20assim..mp3" },
  { texto: "Gratidão pelo dia vivido!", audio: "link23.mp3" },
  { texto: "Amanhã é um novo começo!", audio: "link24.mp3" },
  { texto: "Você foi incrível hoje!", audio: "link25.mp3" },
  { texto: "Descanse sua mente e seu coração!", audio: "link26.mp3" },
  { texto: "Sonhe alto esta noite!", audio: "link27.mp3" },
  { texto: "Seu futuro é brilhante!", audio: "link28.mp3" },
  { texto: "Boa noite, campeão!", audio: "link29.mp3" },
  { texto: "Amanhã você vai conquistar ainda mais!", audio: "link30.mp3" },
  { texto: "Agora o Vilgax vai sentir o gosto do grandão!", audio: "https://github.com/deividpro999/IA-EMMA-CHAT-PARTES/raw/97f217011f34f5ed981285d07f9c522b8b432942/audios/Agora%20o%20Vilgax%20vai%20Sentir%20o%20Gosto%20do%20Grand%C3%A3o!.mp3" }
];

let mensagensJaFaladas = new Set();
let grupoMensagensAtual = [];
let saudacaoFalou = false;

function iniciarModoAuto() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // Limpa o chat

  const horaAtual = new Date().getHours();

  if (horaAtual >= 6 && horaAtual < 12) {
    grupoMensagensAtual = mensagensManha;
  } else if (horaAtual >= 12 && horaAtual < 18) {
    grupoMensagensAtual = mensagensTarde;
  } else {
    grupoMensagensAtual = mensagensNoite;
  }

  // Fala a saudação (só uma vez)
  if (!saudacaoFalou) {
    enviarMensagem(grupoMensagensAtual[0].texto, grupoMensagensAtual[0].audio);
    mensagensJaFaladas.add(0);
    saudacaoFalou = true;
  }

  setInterval(() => {
    // Verifica se já falou todas
    if (mensagensJaFaladas.size >= grupoMensagensAtual.length) {
      mensagensJaFaladas.clear(); // Zera
      mensagensJaFaladas.add(0); // Garante que a saudação não repita
    }

    // Pega só as mensagens que ainda não foram faladas
    const mensagensDisponiveis = grupoMensagensAtual
      .map((msg, index) => ({ msg, index }))
      .filter(({ index }) => !mensagensJaFaladas.has(index) && index !== 0); // nunca escolhe a saudação de novo

    if (mensagensDisponiveis.length === 0) return; // Se não tiver, espera próximo ciclo

    const aleatorio = Math.floor(Math.random() * mensagensDisponiveis.length);
    const { msg, index } = mensagensDisponiveis[aleatorio];

    mensagensJaFaladas.add(index);
    enviarMensagem(msg.texto, msg.audio);
  }, 10000); // A cada 10 segundos
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
