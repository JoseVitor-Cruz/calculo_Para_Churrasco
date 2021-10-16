// Considerando que:
// Se o churrasco durar menos que 6 horas, cada pessoa irá consumir 450g de carne, 1200ml de cerveja e 1litro de refrigerante.
// Se o churrasco durar mais que 6 horas, cada pessoa irá consumir 650gr de carne, 2litros de cerveja e 1,5litro de refrigerante.
// Considere crianças consumindo metade desses valores, e não bebendo cerveja.
// Cada lata de cerveja tem 355ml.
// Cada lata de refrigerante tem 310ml.

function calcular(){

    let inputAdultos = document.getElementById("adultos").value;
    let inputCrianças = document.getElementById("crianças").value;
    let inputHoras = document.getElementById("totHoras").value;

    let adultos = inputAdultos
    let crianças = inputCrianças
    let duracao = inputHoras

    let titulo = document.getElementById("tituloDoResultado")
    let resultadoCarne = document.getElementById("carne")
    let resultadoCerveja = document.getElementById("bebiba")
    let resultadoRefrigerante = document.getElementById("refrigerante")

    let carneTotal = duraçaoCarne(duracao) * adultos + ((duraçaoCarne(duracao) * crianças) * 0.5);
    let cervejaTotal = duraçaoCerveja(duracao) * adultos;
    let refrigeranteTotal = duracaoDrinks(duracao) * adultos + ((duracaoDrinks(duracao) * crianças) * 0.5)
    
    titulo.innerHTML = "Será necessário:"
    resultadoCarne.innerHTML = `${(carneTotal/1000).toFixed(1)} Kg de carne.`
    resultadoCerveja.innerHTML = `${Math.ceil(cervejaTotal/355)} latas de cerveja.`
    resultadoRefrigerante.innerHTML = `${Math.ceil(refrigeranteTotal/310)} latas de refrigerante.`
}

function duraçaoCarne(duracao){
    if (duracao >= 6){
        return 650
    } else {
        return 450
    }
}

function duraçaoCerveja(duracao){
    if (duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function duracaoDrinks(duracao){
    if (duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}