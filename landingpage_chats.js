const chat = document.getElementById('my__chat')

function DeleteMessages(){
    while (chat.firstChild){
        chat.removeChild(chat.firstChild)
    }
}
function CreateUserMessage(text){
    
    msg_line = document.createElement('div')
    msg_line.classList.add('my__chat_msg_line_user', 'my__chat_msg_line') //
    msg = document.createElement('div');
    p = document.createElement('p');

    msg.className = 'my__msg_user' //
    p.innerHTML = text

    msg.appendChild(p)
    msg_line.appendChild(msg)
    chat.appendChild(msg_line)
};
function CreateBotMessage(text){
    
    msg_line = document.createElement('div')
    msg_line.classList.add('my__chat_msg_line_bot', 'my__chat_msg_line') //
    msg = document.createElement('div');
    p = document.createElement('p');

    msg.className = 'my__msg_bot' //
    p.innerHTML = text

    msg.appendChild(p)
    msg_line.appendChild(msg)
    chat.appendChild(msg_line)
};

function CreateAgendamento(){
    DeleteMessages()
    CreateUserMessage('Bom dia!')
    CreateBotMessage('Olá! Bom dia!<br>Para começarmos, qual é o seu nome? 😊')

    CreateUserMessage('Henrique')
    CreateBotMessage('Olá, Henrique! 😊<br>Em que posso te ajudar hoje?<br>Você gostaria de agendar um serviço ou saber mais sobre o que oferecemos?')

    CreateUserMessage('Agendar um serviço')
    CreateBotMessage('Perfeito, Henrique! 😉<br>Para agendarmos, qual é o modelo do seu carro?')

    CreateUserMessage('Audi A3')
    CreateBotMessage('Entendido! 😊<br>Temos algumas opções de serviços para o seu Audi A3:<br><br>Lavagem Simples: R$ 30,00<br>Lavagem Detalhada: R$ 50,00<br>Lavagem Completa: R$ 70,00<br><br>Qual serviço você gostaria de agendar? 😉<br><br>E qual seria a melhor data e horário para você?')

    CreateUserMessage('Gostaria de uma lavagem simples')
    CreateBotMessage('Ok, Henrique! 😉<br>Qual data e horário você prefere para agendar a lavagem simples do seu Audi A3?')

    CreateUserMessage('Teria horário para amanha? Tenho que levar meu filho no médico hoje.')
    CreateBotMessage('Entendo, Henrique! 😊<br>Para amanhã, terça-feira, 10/06/2025, temos os seguintes horários disponíveis para a lavagem simples do seu Audi A3:<br><br>10:00 - 11:00<br>13:00 - 14:00<br>15:00 - 16:00<br><br>Qual horário fica melhor para você? 😉')

    CreateUserMessage('Ficaria bom para mim as 16')
    CreateBotMessage('Perfeito, Henrique! 😊<br>Então, para confirmar:<br>*   Nome: Henrique<br>*   Carro: Audi A3<br>*   Serviço: Lavagem Simples<br>*   Data e Horário: Terça-feira, 10/06/2025, às 16:00<br><br>Podemos confirmar o agendamento? 😉')
    
    CreateUserMessage('Por gentileza!')
    CreateBotMessage('Agendamento confirmado, Henrique! 😊<br>Agradecemos a preferência! 😉')

};

function CreateGenerico(){

    DeleteMessages()
    CreateUserMessage('Gostaria de marcar um horário para amanhã')
    CreateBotMessage('Ficamos felizes em atender você!😊 <br><br>⏰ Para amanhã temos os seguintes horários:<br>10:00 - 11:00<br>13:30 - 14:30')

    CreateUserMessage('As 10 está bom')
    CreateBotMessage('Agendamento confirmado para amanhã as 10:00 ✅')
};

function CreateFAQ(){

    DeleteMessages()
    CreateUserMessage('Qual é o horário de atendimento?')
    CreateBotMessage('Nosso atendimento é de segunda a sexta, das 9h às 18h.')

    CreateUserMessage('Quais formas de pagamento vocês aceitam?')
    CreateBotMessage('Aceitamos cartão de crédito, boleto bancário e Pix.')

    CreateUserMessage('Posso cancelar minha assinatura a qualquer momento?')
    CreateBotMessage('Sim, o cancelamento é simples e pode ser feito pelo painel do usuário.')
};

function CreateOfertaDeProdutos(){

    DeleteMessages()
    CreateUserMessage('Olá, vocês têm algo para melhorar o desempenho do meu carro?')
    CreateBotMessage('Olá! Sim, temos diversos produtos para isso.<br><br>Você já conhece nosso kit de aditivos para motor?<br>Ele ajuda a limpar o sistema e aumentar a performance.')

    CreateUserMessage('Interessante! Esse kit é fácil de usar?')
    CreateBotMessage('Super fácil!<br>É só adicionar o conteúdo no tanque de combustível antes de abastecer.<br><br>Não precisa de ferramentas ou conhecimentos técnicos.')

    CreateUserMessage('Quanto custa esse kit?')
    CreateBotMessage('O kit está com uma promoção especial por R$79,90.')
    
    CreateUserMessage('E ele funciona em qualquer tipo de carro?')
    CreateBotMessage('Sim!<br>Compatível com motores a gasolina, etanol e flex.<br><br>Quer que eu reserve um para você?')

    CreateUserMessage('Pode reservar sim. Como faço para pagar?')
    CreateBotMessage('Aceitamos cartão, boleto e Pix. Basta acerta direto na loja!')
};