// chat.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === "") return;

  // Exibe a mensagem do usuário
  const userDiv = document.createElement('div');
  userDiv.classList.add('message', 'user-message');
  userDiv.textContent = userMessage;
  chatBox.appendChild(userDiv);

  // Limpa o campo de entrada
  userInput.value = '';

  // Responde com a Emma
  setTimeout(() => {
    const emmaMessage = getEmmaResponse(userMessage);
    const emmaDiv = document.createElement('div');
    emmaDiv.classList.add('message', 'emma-message');
    emmaDiv.textContent = emmaMessage.text;
    chatBox.appendChild(emmaDiv);

    // Toca o áudio (se existir)
    if (emmaMessage.audio) {
      const audio = new Audio(emmaMessage.audio);
      audio.play();
    }

    // Rolando para o final do chat
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

function getEmmaResponse(message) {
  const responses = {
    "Oi": { text: "Oi, como posso ajudar?", audio: "audio/oi.mp3" },
    "Como você está?": { text: "Estou bem, obrigada por perguntar!", audio: "audio/estou-bem.mp3" },
    // Adicione mais respostas e áudios aqui
  };

  return responses[message] || { text: "Desculpe, não entendi. Pode tentar outra coisa?", audio: "audio/erro.mp3" };
}
