const todasAsCelulas = document.querySelectorAll('.celula')
const containerJogo = document.querySelector('.container-jogo')

let vezDoCirculo;

const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const iniciarJogo = () => {
    for (const celula of customElements) {
        celula.addEventListener('click', cliqueMouse, { once: true} )
    }

    vezDoCirculo = false

    containerJogo.classList.add('jogadorX')
}

const checaPorVitoria = (jogadorAtual)

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

    // verificar por empate

    // mudar o simbolo
    trocaVez()
}

for (const celula of todasAsCelulas) {
    celula.addEventListener('click', cliqueMouse, { once:true  } )
}

iniciarJogo()