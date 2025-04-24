document.addEventListener('DOMContentLoaded', function () {
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    appendMessage('user', text);
    userInput.value = '';

    setTimeout(() => {
      const resposta = getResposta(text);
      appendMessage('emma', resposta);
    }, 500);
  }

  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.classList.add('message');
    msg.classList.add(sender === 'user' ? 'user-message' : 'emma-message');
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getResposta(texto) {
    const respostas = {
      'oi': 'Oi chefinho! Tudo bem?',
      'tudo bem': 'Que bom! Comigo também!',
      'quem é você?': 'Sou a Emma, sua assistente virtual 😄',
    };

    const entrada = texto.toLowerCase();
    return respostas[entrada] || 'Hmm... ainda não aprendi isso!';
  }
});
