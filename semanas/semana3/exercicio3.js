let entrada = prompt("Digite uma palavra ou frase: ");

palavraSemEspacos = '';

for(i = 0; i < entrada.length;i ++){
    if(entrada[i] != ''){
        palavraSemEspacos += entrada[i];
    }
}

let palavra = palavraSemEspacos.toLowerCase();

for (i = 0; i < palavra.length;i ++){
    if(palavra[i] !== palavra[palavra.length - 1 - i]){
        alert("Não é um palíndromo!");
        break;
    }
}

if(i == palavra.length){
    alert("É um palíndromo!");
}