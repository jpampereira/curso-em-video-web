function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        window.document.body.style.background = 'rgb(235, 219, 185)'
    } else if(hora >= 12 && hora < 19) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        window.document.body.style.background = 'rgb(249, 181, 134)'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        window.document.body.style.background = 'rgb(16, 28, 40)'
    }
}