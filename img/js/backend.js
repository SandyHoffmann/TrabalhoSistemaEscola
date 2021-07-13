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

let classesInitTurma = []

function criarInst() {
    let lista_geral = JSON.parse(localStorage.getItem("listaTurmas"))
    classesInitAlunos = []
    classesInitTurma = []
    for (let x = 0; x < lista_geral.length; x++) {
        let classe = new Turma(lista_geral[x].codigoTurma, lista_geral[x].nomeTurma)
        classe.alunos = lista_geral[x].alunos
        classesInitTurma.push(classe)
        classesInitAlunos.push([])
        for (let aluno of lista_geral[x].alunos) {
            let alunoNovo = new Aluno(aluno.matricula, aluno.nome, aluno.telefone, aluno.email,aluno.notas,aluno.media)
            classesInitAlunos[x].push(alunoNovo)
        }
    }
    console.log(classesInitTurma)
    console.log(classesInitAlunos)

}



export { cadastrarTurma, armazenarValores, armazenarValorInicial, verificar, criarInst, classesInitTurma, classesInitAlunos }