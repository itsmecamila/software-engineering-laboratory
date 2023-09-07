class Pessoa{
    constructor(nome,email,telfixo,celular,datanascimento){
        this.nome = nome;
        this.email = email;
        this.telfixo = telfixo;
        this.celular = celular;
        this.datanascimento = datanascimento;
    }
}

class Professor extends Pessoa {
    constructor(nome,email,telfixo,celular,datanascimento,area,matricula,lattes){
        super(nome,email,telfixo,celular,datanascimento);
        this.area = area;
        this.matricula = matricula;
        this.lattes = lattes;
    }

    apresentar() {
        const informacoes = `Nome: ${this.nome}, Email: ${this.email}, Telefone Fixo: ${this.telfixo}, Celular: ${this.celular}, Data de Nascimento: ${this.datanascimento}, Área: ${this.area}, Matrícula: ${this.matricula}, Lattes: ${this.lattes}`;
        return informacoes;
      }
      
}


const formularioProfessor = document.getElementById("cadastroProfessor");
const resultadoCP = document.getElementById("resultadoCP");
const cadastrosProfessor = [];


formularioProfessor.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(formularioProfessor);
  
    const nome = formData.get("nome");
    const email = formData.get("email");
    const telfixo = formData.get("telfixo");
    const celular = formData.get("celular");
    const datanascimento = formData.get("datanasc");
    const area = formData.get("area");
    const matricula = formData.get("matricula");
    const lattes = formData.get("lattes");
    const professor = new Professor(nome,email,telfixo,celular,datanascimento,area,matricula,lattes);
    cadastrosProfessor.push(professor);
  
  
    resultadoCP.innerHTML = "";
    cadastrosProfessor.forEach((cadastro) => {
          const p = document.createElement("p");
          p.textContent = cadastro.apresentar();
          resultadoCP.appendChild(p);
  });
  });
  
  