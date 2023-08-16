let numero = prompt("Digite um número inteiro positivo: ");
let valor = 3;


if(numero == 2){
    document.write("O número é primo");
}

else{
    let PodeSerPrimo = true;
    while(PodeSerPrimo){
        if(numero > valor){
            if(numero % valor == 0){
                alert("Não é primo.");    
                PodeSerPrimo = false;
            }
            valor ++;
        }
        else{
            PodeSerPrimo = false;
            alert("É primo.")
        }
    }
}