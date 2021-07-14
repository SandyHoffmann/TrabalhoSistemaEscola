import { Aluno } from './aluno.js'
import { armazenarValores} from './backend.js'
// @ts-check

/** Classe representando uma Turma */

export class Turma {

    /**
     * Cria uma turma
     * @param {string} codigoTurma - o codigo da turma
     * @param {string} nomeTurma - O nome da turma
     * @param {Array<Aluno>} alunos - Uma lista de alunos
     */
    constructor(codigoTurma, nomeTurma, alunos=[]) {
        this.codigoTurma = codigoTurma
        this.nomeTurma = nomeTurma
        this.alunos = alunos
    }
    /**
     * Cadastra um aluno
     * @param {object<Aluno>} aluno - O nome do aluno
     * @returns {void} 
     */
    cadastrarAluno(aluno) {
        for (let estudante of this.alunos) {
            if (estudante.matricula == aluno.matricula) {
                return alert("Não é possivel cadastrar o aluno!")
            }
        }
        this.alunos.push(aluno)
        return alert("Aluno inserido!")
    }
    /**
     * Remove um aluno
     * @param {string} matriculaAluno - A matricula do aluno a ser removido
     * @returns {void} 
     */
    removerAluno(matriculaAluno) {
        for (let x = 0; x < (this.alunos.length); x += 1) {
            if (matriculaAluno == this.alunos[x].matricula) {
                this.alunos.splice(x, 1)
                armazenarValores()
                return alert("Aluno removido!")
            }
        }
        return ("Não foi possivel remover o aluno!")
    }
}
