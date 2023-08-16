let numero = prompt("Digite um número inteiro positivo: ");

    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }
    alert("Fatorial: "+ resultado);
