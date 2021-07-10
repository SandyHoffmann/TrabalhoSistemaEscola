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
}

function armazenarValores(lista) {
    localStorage.setItem("listaTurmas", JSON.stringify(lista))
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

export { cadastrarTurma, armazenarValores, armazenarValorInicial, verificar }