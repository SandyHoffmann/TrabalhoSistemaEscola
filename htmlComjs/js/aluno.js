export class Aluno {
    #nota
    #media
    constructor(matricula, nome, telefone, email, notas=[], media=0) {
        this.matricula = matricula;
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
        for (let x = 0; x < this.#nota.length; x++) {
            soma += this.#nota[x];
            }
        let media = soma / this.#nota.length;
        this.#media = media
        return(this.#media)
    }

    cadastraNotas(n1, n2, n3) {
        this.#nota[0] = parseInt(n1)
        this.#nota[1] = parseInt(n2)
        this.#nota[2] = parseInt(n3)
        alert(this.#nota)
        return(this.#nota)
    }
}