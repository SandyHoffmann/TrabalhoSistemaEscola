// @ts-check

/** Classe representando um aluno */

export class Aluno {
    /**
     * @private
     */
    #matricula
    /**
     * @private
     */
    #nota
    /**
     * @private
     */
    #media
    /**
     * Cria um aluno
     * @param {string} matricula - A matrícula do aluno
     * @param {string} nome - O nome do aluno
     * @param {string} telefone - O telefone do Aluno
     * @param {string} email - O email do Aluno
     * @param {Array<number>} notas - As notas do Aluno
     * @param {number} media - A média do aluno
     */
    constructor(matricula, nome, telefone, email, notas=[], media=0) {
        this.#matricula = matricula;
        this.#nota = notas;
        this.#media = media;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;

    }
    /**
     * Edita as informações de um aluno
     * @param {string} nome - O nome do aluno
     * @param {string} telefone - O telefone do Aluno
     * @param {string} email - O email do Aluno
     * @returns {void} 
     */
    editarInformacoes(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        alert("Edições feitas!")
    }
    /**
     * Edita as informações de um aluno
     * @returns {number} 
     */
    calculaMedia() {
        let soma = 0;
        for (let x = 0; x < this.#nota.length; x++) {
            soma += this.#nota[x];
            }
        let media = soma / this.#nota.length;
        this.#media = media.toFixed(2)
        return(this.#media)
    }
    /**
     * Cadastra as notas de um aluno
     * @param {string} n1 - O nome do aluno
     * @param {string} n2 - O telefone do Aluno
     * @param {string} n3 - O email do Aluno
     * @returns {void} 
     */
    cadastraNotas(n1, n2, n3) {
        this.#nota[0] = parseFloat(n1)
        this.#nota[1] = parseFloat(n2)
        this.#nota[2] = parseFloat(n3)
        return alert("Notas Editadas!")
    }
    /**
     * Cadastra as notas de um aluno
     * @returns {Array<number>} 
     */
    get nota(){
        return this.#nota
    }
    /**
     * Retorna a média
     * @returns {number} 
     */
    get media(){
        return this.#media
    }
    /**
     * Seta a nota
     * @param {Array<number>} nota
     * @returns {void}
     */
    set nota(nota){
        this.#nota = nota
    }
    /**
     * Seta a media
     * @param {number} media
     * @returns {void}
     */
    set media(media){
        this.#media = media
    }
    /**
     * Retorna a matricula
     * @returns {string} 
     */
    get matricula(){
        return this.#matricula
    }
    /**
     * Seta a matricula
     * @param {string} matricula
     * @returns {void}
     */
    set matricula(matricula){
        this.#matricula = matricula
    }
    /**
     * Retorna o objeto no formato JSON
     * @returns {object}
     */
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