const todasAsCelulas = document.querySelectorAll('.celula')
const containerJogo = document.querySelector('.container-jogo')
const msgDeVitoria = document.querySelector('.msg-de-vitoria')
const msgVitoriaDisplay = document.querySelector('.mensagem-vencedor')

let vezDoCirculo;

const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const iniciarJogo = () => {
    for (const celula of todasAsCelulas) {
        celula.addEventListener('click', cliqueMouse, { once: true})
    }

    vezDoCirculo = false

    containerJogo.classList.add('jogadorX')
}

const fimJogo = (empate) => {
    if (empate) {
        msgDeVitoria.innerText = 'Empate'
    } else {
        msgDeVitoria.innerText = vezDoCirculo 
        ? 'Bolinha Ganhou!' 
        : 'X Ganhou!'
    }

    msgVitoriaDisplay.classList.add('mostra-vencedor')
}

const checaPorVitoria = (jogadorAtual) => {
    return combinacoesVitoria.some((combinacoes) => {
        return combinacoes.every((index) => {
            return todasAsCelulas[index].classList.contains(jogadorAtual)
        })
    })
}

const marca  = (celula, adicionaClasse) => {
    celula.classList.add(adicionaClasse)
} 

const trocaVez = () => {
    vezDoCirculo = !vezDoCirculo

    containerJogo.classList.remove('jogador0')
    containerJogo.classList.remove('jogadorX')

    if (vezDoCirculo) {
        containerJogo.classList.add('jogador0')
    } else {
        containerJogo.classList.add('jogadorX')
    }
}

const cliqueMouse = (elemento) => {
    // aplicar marca (x ou 0)
    const celula = elemento.target
    const adicionaClasse = vezDoCirculo ? 'jogador0' : 'jogadorX'

    celula.classList.add(adicionaClasse)
    marca(celula, adicionaClasse)
    // Checar por vitória
    const ganhou = checaPorVitoria(adicionaClasse)
    
    if(ganhou) {
        fimJogo(false)
    }
    // verificar por empate

    // mudar o simbolo
    trocaVez()
}

iniciarJogo()