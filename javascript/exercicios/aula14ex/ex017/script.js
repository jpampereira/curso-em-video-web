function tabuada() {
    var num = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')

    if(num.value.length == 0) {
        res.innerHTML = 'Por favor, digite um número!'
    } else {
        res.innerHTML = ''
        n = Number(num.value)
        for(var i = 1; i <= 10; i++) {
            res.innerHTML += `${n} x ${i} = ${n*i} </br>`
        }
    }
}