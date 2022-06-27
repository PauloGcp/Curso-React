

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default function gerarNumeros(qtd){
    let numeros;
    const colecaoDeNumeros = []

    for(numeros = 0; numeros<61; numeros +=1){
        colecaoDeNumeros.push(numeros)
    }

    const colecaoMisturada = shuffle(colecaoDeNumeros)
    const colecaoSemiPronta = []
    for (let i = 0; i < qtd; i+=1){
        colecaoSemiPronta.push(colecaoMisturada.shift()) 
    }
    const colecaoPronta = colecaoSemiPronta.sort()
    return colecaoPronta
}

console.log(gerarNumeros(6))