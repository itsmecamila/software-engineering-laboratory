class Pessoa{
    constructor(nome,email,telfixo,celular,datanascimento){
        this.nome = nome;
        this.email = email;
        this.telfixo = telfixo;
        this.celular = celular;
        this.datanascimento = datanascimento;
    }
}

class Aluno extends Pessoa {
    constructor(nome,email,telfixo,celular,datanascimento,curso,matricula){
        super(nome,email,telfixo,celular,datanascimento);
        this.curso = curso;
        this.matricula = matricula;
    }

    apresentar() {
        const informacoes = `Nome: ${this.nome}, Email: ${this.email}, Telefone Fixo: ${this.telfixo}, Celular: ${this.celular}, Data de Nascimento: ${this.datanascimento}, Curso: ${this.curso}, Matrícula: ${this.matricula}`;
        return informacoes;
      }
      
}

const formularioAluno = document.getElementById("cadastroAluno");
const resultadoCA = document.getElementById("resultadoCA");
const cadastrosAluno = [];


formularioAluno.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('entrei');
    const formData = new FormData(formularioAluno);
  
    const nome = formData.get("nome");
    const email = formData.get("email");
    const telfixo = formData.get("telfixo");
    const celular = formData.get("celular");
    const curso = formData.get("curso");
    const matricula = formData.get("matricula");
    const datanascimento = formData.get("datanasc");

    const aluno = new Aluno(nome,email,telfixo,celular,datanascimento,curso,matricula);
    console.log(aluno);
    cadastrosAluno.push(aluno);

    resultadoCA.innerHTML = "";
    cadastrosAluno.forEach((cadastro) => {
        const p = document.createElement("p");
        p.textContent = cadastro.apresentar();
        resultadoCA.appendChild(p);
  });
  });



