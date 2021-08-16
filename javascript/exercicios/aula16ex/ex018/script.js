var numeros = []
var res = window.document.getElementById('res')

// Adiciona um elemento no final do vetor
function adiciona(n) {
    if(numeros.indexOf(n) == -1 && n >= 1 && n <= 100) {
        numeros.push(n)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}

// Retorna o número de elementos do vetor 
function qntdNumeros() {
    return numeros.length
}

// Retorna qual o maior número armazenado no vetor
function maior() {
    let maior = numeros[0]
    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] > maior) {
            maior = numeros[i]
        }
    }
    return maior
}

// Retorna qual o menor número armazenado no vetor
function menor() {
    let menor = numeros[0]
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}

// Soma todos os valores armazenados no vetor
function soma() {
    var soma = 0
    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}

// Faz a média de todos os valores armazenados no vetor
function média() {
    return (soma() / numeros.length)

}

// Exibe os valores na tela
function finaliza() {
    if(numeros.length != 0) {
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${qntdNumeros()} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior()}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor()}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma()}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média()}.</p>`
    } else {
        window.alert('Adicione valores antes de finalizar!')
    }
}