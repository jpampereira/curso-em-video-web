function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/homemcrianca.jpg')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/homemjovem.jpg')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homemidoso.jpg')
            }
        } else {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/mulhercrianca.jpg')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/mulherjovem.jpg')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulheradulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. </br>`
        res.appendChild(img)
    }
}