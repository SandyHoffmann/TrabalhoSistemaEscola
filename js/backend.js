import {Turma} from './turma.js' 

let lista_geral = []

function cadastrarTurma(codigo,nome){
    for (let elemento of lista_geral){
        if (elemento.codigoTurma == codigo){
            return ("Não foi possivel cadastrar a turma!")
        }
    }
    let turma = new Turma(codigo,nome)
    lista_geral.push(turma)
    console.log(lista_geral)
    armazenarValores()
}

function armazenarValores() {
    localStorage.setItem("listaTurmas", JSON.stringify(lista_geral))
}

export{lista_geral,cadastrarTurma,armazenarValores}