const todasAsCelulas = document.querySelectorAll('.celula')
const containerJogo = document.querySelector('.container-jogo')
const msgDeVitoria = document.querySelector('.msg-de-vitoria')
const msgVitoriaDisplay = document.querySelector('.mensagem-vencedor')
const botaoReiniciar = document.querySelector('.botao-reiniciar')



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
    vezDoCirculo = false


    for (const celula of todasAsCelulas) {
        celula.classList.remove('jogadorX')
        celula.classList.remove('jogador0')
        celula.addEventListener('click', cliqueMouse)
        celula.addEventListener('click', cliqueMouse, { once: true})
    }


    dizJogadorDaVez()
    containerJogo.classList.add('jogadorX')
    msgVitoriaDisplay.classList.remove('mostrar-vencedor')
}

const fimJogo = (empate) => {
    if (empate) {
        msgDeVitoria.innerText = 'Empate'
    } else {
        msgDeVitoria.innerText = vezDoCirculo 
        ? 'Bolinha Ganhou!' 
        : 'X Ganhou!'
    }

    msgVitoriaDisplay.classList.add('mostrar-vencedor')
}



const checaPorVitoria = (jogadorAtual) => {
    return combinacoesVitoria.some((combinacoes) => {
        return combinacoes.every((index) => {
            return todasAsCelulas[index].classList.contains(jogadorAtual)
        })
    })
}

const checaPorEmpate = () => {
    return [...todasAsCelulas].every(celula => {
        return celula.classList.contains('jogadorX') || celula.classList.contains('jogador0')
    })
}

const marca  = (celula, adicionaClasse) => {
    celula.classList.add(adicionaClasse)
} 


const dizJogadorDaVez = () => {
    containerJogo.classList.remove('jogador0')
    containerJogo.classList.remove('jogadorX')

    if (vezDoCirculo) {
        containerJogo.classList.add('jogador0')
    } else {
        containerJogo.classList.add('jogadorX')
    }
}

const trocaVez = () => {
    vezDoCirculo = !vezDoCirculo

    dizJogadorDaVez()
  
}

const cliqueMouse = (elemento) => {
    // aplicar marca (x ou 0)
    const celula = elemento.target
    const adicionaClasse = vezDoCirculo ? 'jogador0' : 'jogadorX'

    celula.classList.add(adicionaClasse)
    marca(celula, adicionaClasse)
    // verificar por empate
    const empatou = checaPorEmpate()
    // Checar por vitória
    const ganhou = checaPorVitoria(adicionaClasse)
    
    if(ganhou) {
        fimJogo(false)
    } else if (empatou) {
        fimJogo(true)
    } else {
        // mudar o simbolo
        trocaVez()
    }    
}

iniciarJogo()
botaoReiniciar.addEventListener('click', iniciarJogo)