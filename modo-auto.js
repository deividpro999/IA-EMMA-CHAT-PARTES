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
  { texto: "Boa noite! O que você conquistou hoje?", audio: "link21.mp3" },
  { texto: "Relaxe, você deu o seu melhor!", audio: "link22.mp3" },
  { texto: "Gratidão pelo dia vivido!", audio: "link23.mp3" },
  { texto: "Amanhã é um novo começo!", audio: "link24.mp3" },
  { texto: "Você foi incrível hoje!", audio: "link25.mp3" },
  { texto: "Descanse sua mente e seu coração!", audio: "link26.mp3" },
  { texto: "Sonhe alto esta noite!", audio: "link27.mp3" },
  { texto: "Seu futuro é brilhante!", audio: "link28.mp3" },
  { texto: "Boa noite, campeão!", audio: "link29.mp3" },
  { texto: "Amanhã você vai conquistar ainda mais!", audio: "link30.mp3" },
];

function iniciarModoAuto() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = ""; // Limpa o chat

  const horaAtual = new Date().getHours();
  let grupoMensagens;

  if (horaAtual >= 6 && horaAtual < 12) {
    grupoMensagens = mensagensManha;
  } else if (horaAtual >= 12 && horaAtual < 18) {
    grupoMensagens = mensagensTarde;
  } else {
    grupoMensagens = mensagensNoite;
  }

  // Começar enviando uma saudação
  const saudacao = grupoMensagens[0];
  enviarMensagem(saudacao.texto, saudacao.audio);

  let mensagensJaFaladas = new Set();
  mensagensJaFaladas.add(0); // A primeira já foi falada

  setInterval(() => {
    const mensagensDisponiveis = grupoMensagens.filter((_, i) => !mensagensJaFaladas.has(i));
    if (mensagensDisponiveis.length === 0) {
      mensagensJaFaladas.clear(); // Resetar se já falou todas
      mensagensDisponiveis.push(...grupoMensagens.slice(1)); // Ignorar a primeira (saudação)
    }

    const indiceAleatorio = Math.floor(Math.random() * mensagensDisponiveis.length);
    const mensagem = mensagensDisponiveis[indiceAleatorio];

    const indiceOriginal = grupoMensagens.indexOf(mensagem);
    mensagensJaFaladas.add(indiceOriginal);

    enviarMensagem(mensagem.texto, mensagem.audio);
  }, 10000); // Muda a cada 10 segundos
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
