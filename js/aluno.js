export class Aluno {
    #matricula
    #nota
    #media
    constructor(matricula, nome, telefone, email, notas=[], media) {
        this.#matricula = matricula;
        this.#nota = notas;
        this.#media = media;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;

    }
    editarInformacoes(nome, telefone, email) {
        if (!nome == this.nome) {
        this.nome = nome;
        }
        if (!telefone == this.telefone) {
        this.telefone = telefone;
        }
        if (!email == this.email) {
        this.email = email;
        }
    }
    calculaMedia() {
        let soma = 0;
        for (let x = 0; x < this.notas.length; x++) {
        soma += this.notas[x];
        }
        let media = soma / this.notas.length;
        this.#media = media
    }

    cadastraNotas(n1, n2, n3) {
        this.#nota.push(n1)
        this.#nota.push(n2)
        this.#nota.push(n3)
        this.calculaMedia()
    }

    get matricula(){
        return this.#matricula
    }
    
}