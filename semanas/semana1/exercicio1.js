let entrada = prompt("Digite uma entrada: ");

if(entrada != null){
    if(confirm("Deseja ver o tipo de dado do que digitou?")){
        if(isNaN(entrada)){
            alert("O que você digitou é uma: String");
        }

        else{
            alert("O que você digitou é um: Número");
        }
    }
}



