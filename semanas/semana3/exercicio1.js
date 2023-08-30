let data = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const date = new Date();
alert(date.toLocaleDateString('pt-BR',data));

