import { Aluno } from './aluno.js'
import { Turma } from './turma.js'

function cadastrarTurma(codigo, nome) {
    let lista_geral = JSON.parse(localStorage.getItem("listaTurmas"))
    console.log(lista_geral)
    for (let elemento of lista_geral) {
        if (elemento.codigoTurma == codigo) {
            return ("Não foi possivel cadastrar a turma!")
        }
    }
    let turma = new Turma(codigo, nome)
    lista_geral.push(turma)
    console.log(lista_geral)
    armazenarValores(lista_geral)
    window.location.reload()

}

function armazenarValores(lista) {
    localStorage.setItem("listaTurmas", JSON.stringify(lista))
    window.location.reload()
}

function armazenarValorInicial() {
    alert("a")
    let lista_geral = []
    localStorage.setItem("listaTurmas", JSON.stringify(lista_geral))
}

function verificar() {
    if (!localStorage.getItem("listaTurmas")) {
        alert("a")
        armazenarValorInicial()
    }
}

function instanciaTurmas(turmas) {
    let turmasObjeto = []
    for (let turma of turmas) {
        let turmaObjeto = new Turma(turma.codigoTurma, turma.nomeTurma, turma.alunos)        
        turmasObjeto.push(turmaObjeto)
    }
    return turmasObjeto
}


function instanciaAlunos(turmas) {        
    for (let turma of turmas) {
      for (let i = 0; i < turma.alunos.length; i++) {            
        turma.alunos[i] = new Aluno(turma.alunos[i].matricula, turma.alunos[i].nome, turma.alunos[i].telefone, turma.alunos[i].email)
      }
    }
}

export { cadastrarTurma, armazenarValores, armazenarValorInicial, verificar, instanciaAlunos, instanciaTurmas, classesInitTurma, classesInitAlunos }