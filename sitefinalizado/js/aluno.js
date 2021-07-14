export class Aluno {
    #matricula
    #nota
    #media
    constructor(matricula, nome, telefone, email, notas=[], media=0) {
        this.#matricula = matricula;
        this.#nota = notas;
        this.#media = media;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;

    }
    editarInformacoes(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        alert("Edições feitas!")
    }
    calculaMedia() {
        let soma = 0;
        for (let x = 0; x < this.#nota.length; x++) {
            soma += this.#nota[x];
            }
        let media = soma / this.#nota.length;
        this.#media = media.toFixed(2)
        return(this.#media)
    }

    cadastraNotas(n1, n2, n3) {
        this.#nota[0] = parseInt(n1)
        this.#nota[1] = parseInt(n2)
        this.#nota[2] = parseInt(n3)
        return alert("Notas Editadas!")
    }

    get nota(){
        return this.#nota
    }

    get media(){
        return this.#media
    }

    set nota(nota){
        this.#nota = nota
    }

    set media(media){
        this.#media = media
    }

    get matricula(){
        return this.#matricula
    }

    set matricula(matricula){
        this.#matricula = matricula
    }
    toJSON(){
        return {
          matricula: this.#matricula,
          nome: this.nome,
          telefone : this.telefone,
          email : this.email,
          nota : this.#nota,
          media : this.#media
        }
      }
    
}