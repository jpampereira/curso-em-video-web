let num = [5, 8, 2, 9, 3]
num.sort() // sort é um método interno de vetores que coloca os valores dele em ordem crescente
num.push(1) // push é um método interno de vetores que adiciona um valor na última posição do mesmo

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`) // num.length retorna o número de elementos do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
/*
indexOf é um método interno de vetores que busca o valor passado como parâmetro no vetor 
e, caso esse valor esteja presente no vetor, é retornada a posição em que esse valor 
encontra-se dentro do vetor. Caso o valor não exista dentro do vetor, é retornado o valor -1.
*/

if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
