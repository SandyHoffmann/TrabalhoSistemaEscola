import { Aluno } from './aluno.js'
import { Turma } from './turma.js'

// @ts-check

/**
 * Cadastra uma turma
 * @param {string} codigo - Codigo da Turma
 * @param {string} nome - O nome do aluno
 * @returns {void}
 */

function cadastrarTurma(codigo, nome) {
    let lista_geral = JSON.parse(localStorage.getItem("listaTurmas"))
    console.log(lista_geral)
    for (let elemento of lista_geral) {
        if (elemento.codigoTurma == codigo) {
            return alert("Não foi possivel cadastrar a turma, pois o código já existe!")
        }
    }
    let turma = new Turma(codigo, nome)
    lista_geral.push(turma)
    console.log(lista_geral)
    alert("Turma Cadastrada!")
    armazenarValores(lista_geral)
    window.location.reload()

}

/**
 * Armazena valores no storage
 * @param {Array<Turma>} lista - lista de turmas
 * @returns {void}
 */
function armazenarValores(lista) {
    localStorage.setItem("listaTurmas", JSON.stringify(lista))
    window.location.reload()
}
/**
 * Armazena valores no storage
 * @returns {void}
 */
function armazenarValorInicial() {
    let lista_geral = []
    localStorage.setItem("listaTurmas", JSON.stringify(lista_geral))
    window.location.reload()
}
/**
 * Verifica se há a instância listaTurmas no storage
 * @returns {void}
 */
function verificar() {
    if (!localStorage.getItem("listaTurmas")) {
        alert("Iniciando Backend")
        armazenarValorInicial()
    }
}
/**
 * Instancia as turmas
 * @param {Array<object>} lista - lista de turmas
 * @returns {Array<Turma>}
 */
function instanciaTurmas(turmas) {
    let turmasObjeto = []
    for (let turma of turmas) {
        let turmaObjeto = new Turma(turma.codigoTurma, turma.nomeTurma, turma.alunos)        
        turmasObjeto.push(turmaObjeto)
    }
    return turmasObjeto
}

/**
 * Instancia os alunos
 * @param {Array<object>} lista - lista de turmas
 * @returns {void}
 */
function instanciaAlunos(turmas) {        
    for (let turma of turmas) {
      for (let i = 0; i < turma.alunos.length; i++) {            
        turma.alunos[i] = new Aluno(turma.alunos[i].matricula, turma.alunos[i].nome, turma.alunos[i].telefone, turma.alunos[i].email,turma.alunos[i].nota,turma.alunos[i].media)
      }
    }
}

export { cadastrarTurma, armazenarValores, armazenarValorInicial, verificar, instanciaAlunos, instanciaTurmas }