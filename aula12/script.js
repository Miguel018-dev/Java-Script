function Carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora > 0 && hora <12){
    img.src = 'Sem título.png'
    document.body.style.backgroundColor = 'rgb(206, 184, 156)'
}else if(hora > 12 && hora <18){
    img.src = 'ramos.png'
    document.body.style.backgroundColor = 'rgb(85, 107, 47)'
}else{
    img.src = '0l0.png'
    document.body.style.backgroundColor = 'rgb(62, 65, 57)'
    }
}    