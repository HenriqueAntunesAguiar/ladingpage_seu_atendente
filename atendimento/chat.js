botao_mecanica = document.getElementById('mecanica')
botao_restaurante = document.getElementById('restaurante')
botao_odonto = document.getElementById('odontologia')
botao_lavajato = document.getElementById('lavajato')

function Mecanico(){
    document.getElementById('chat_section').style.backgroundImage = 'url(mecanica.png)'
    botao_mecanica.style.backgroundColor = '#1A292B'
    botao_restaurante.style.backgroundColor = 'transparent'
    botao_odonto.style.backgroundColor = 'transparent'
    botao_lavajato.style.backgroundColor = 'transparent'
}
function Restaurante(){
    document.getElementById('chat_section').style.backgroundImage = 'url(restaurante.png)'
    botao_mecanica.style.backgroundColor = 'transparent'
    botao_restaurante.style.backgroundColor = '#C22C27'
    botao_odonto.style.backgroundColor = 'transparent'
    botao_lavajato.style.backgroundColor = 'transparent'
}
function LavaJato(){
    document.getElementById('chat_section').style.backgroundImage = 'url(lavajato.png)'
    botao_mecanica.style.backgroundColor = 'transparent'
    botao_restaurante.style.backgroundColor = 'transparent'
    botao_odonto.style.backgroundColor = 'transparent'
    botao_lavajato.style.backgroundColor = '#53696D'
}
function Odontologia(){
    document.getElementById('chat_section').style.backgroundImage = 'url(odonto.png)'
    botao_mecanica.style.backgroundColor = 'transparent'
    botao_restaurante.style.backgroundColor = 'transparent'
    botao_odonto.style.backgroundColor = '#47616B'
    botao_lavajato.style.backgroundColor = 'transparent'
}