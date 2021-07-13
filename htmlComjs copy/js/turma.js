import { armazenarValores} from './backend.js'


export class Turma {
    constructor(codigoTurma, nomeTurma, alunos=[]) {
        this.codigoTurma = codigoTurma
        this.nomeTurma = nomeTurma
        this.alunos = alunos
    }
    cadastrarAluno(aluno) {
        for (let estudante of this.alunos) {
            if (estudante.matricula == aluno.matricula) {
                return alert("Não é possivel cadastrar o aluno!")
            }
        }
        this.alunos.push(aluno)
        return alert("Aluno inserido!")
    }
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
