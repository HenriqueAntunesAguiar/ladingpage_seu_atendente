function getCSRFToken() {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

function criar_resposta_bot(resposta){
    // Criar a div
    const div = document.createElement('div');
    div.className = 'chat__msg_box__bot';

    // Criar o parágrafo
    const p = document.createElement('p');
    p.innerHTML = resposta; // você pode mudar o texto

    // Criar a imagem
    const img = document.createElement('img');
    img.className = 'chat_icon';
    img.src = 'static/chat_icon.png'; // defina a imagem que quiser

    // Adicionar o <p> e a <img> dentro da div
    div.appendChild(p);
    div.appendChild(img);

    // Inserir a div no body (ou outro lugar)
    document.body.getElementsByClassName('chat__msg_box')[0].appendChild(div);
    
    const chat__msg_box = document.getElementsByClassName('chat__msg_box')[0]
    chat__msg_box.scrollTop = chat__msg_box.scrollHeight;
}
function criar_pergunta_user(pergunta){
    // Criar a div
    const div = document.createElement('div');
    div.className = 'chat__msg_box__user';

    // Criar o parágrafo
    const p = document.createElement('p');
    p.textContent = pergunta; // você pode mudar o texto

    // Adicionar o <p> e a <img> dentro da div
    div.appendChild(p);

    // Inserir a div no body (ou outro lugar)
    document.body.getElementsByClassName('chat__msg_box')[0].appendChild(div);

    const chat__msg_box = document.getElementsByClassName('chat__msg_box')[0]
    chat__msg_box.scrollTop = chat__msg_box.scrollHeight;
}

const input = document.getElementById('mensagemInput');

input.addEventListener('keydown',async function(event) {
  if (event.key === 'Enter' && input.value.trim() !== '') {
    event.preventDefault(); // evita comportamentos padrão, como envio de formulário
    input.value
    criar_pergunta_user(input.value)
    const data = await enviar_pergunta_gemini(input.value);

    const resposta = data.resposta
    document.getElementById('tokens_entrada_valor').innerHTML = data.tokens_entrada_valor
    document.getElementById('tokens_saida_valor').innerHTML = data.tokens_saida_valor
    document.getElementById('tokens_total_valor').innerHTML = data.tokens_total_valor
    document.getElementById('tokens_entrada').innerHTML = data.tokens_entrada
    document.getElementById('tokens_saida').innerHTML = data.tokens_saida
    document.getElementById('tokens_totais').innerHTML = data.tokens_totais
    
    criar_resposta_bot(resposta)
  }
});

function enviar_pergunta_gemini(pergunta){
    input.value=''
    return fetch(`${window.location.origin}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({  'pergunta': pergunta,
                                'tokens_entrada_valor':document.getElementById('tokens_entrada_valor').textContent,
                                'tokens_saida_valor':document.getElementById('tokens_saida_valor').textContent,
                                'tokens_total_valor':document.getElementById('tokens_total_valor').textContent,
                                'tokens_entrada':document.getElementById('tokens_entrada').textContent,
                                'tokens_saida':document.getElementById('tokens_saida').textContent,
                                'tokens_totais':document.getElementById('tokens_totais').textContent,
         })
    })
    .then(response => response.json())
    .then(data => {
        return data;
    });
}
criar_resposta_bot('Olá, sou Giovani, assistente virtual da BEP Energia. Em que posso ajudar?')