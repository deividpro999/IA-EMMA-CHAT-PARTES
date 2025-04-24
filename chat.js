// chat.js

// Função que envia a mensagem
function sendMessage() {
    // Captura a mensagem do usuário
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Não envia se o campo estiver vazio
    
    // Exibe a mensagem do usuário no chat
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Limpa o campo de entrada
    document.getElementById('user-input').value = '';

    // Responde com uma mensagem da Emma
    const emmaMessage = document.createElement('div');
    emmaMessage.classList.add('message', 'emma-message');
    emmaMessage.textContent = getEmmaResponse(userInput);
    chatBox.appendChild(emmaMessage);

    // Rola para o fundo do chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para determinar a resposta da Emma com base no texto do usuário
function getEmmaResponse(userMessage) {
    const responses = {
        'Oi': 'Oi, como posso ajudar?',
        'Como você está?': 'Estou bem, obrigada por perguntar!',
        // Adicione mais respostas aqui conforme necessário
    };

    return responses[userMessage] || 'Desculpe, não entendi sua pergunta.';
}
