const todasAsCelulas = document.querySelectorAll('.celula')

let vezDoCirculo;

const marcado  = (celula, adicionaClasse) => {
    celula.classList.adda(adicionaClasse)
} 

const cliqueMouse = (elemento) => {
    // aplicar marca (x ou 0)
    const celula = elemento.target
    const adicionaClasse = vezDoCirculo ? 'jogador0' : 'jogadorX'

    celula.classList.add(adicionaClasse)
    marcado(celula, )
    // Checar por vitória

    // verificar por empate

    // mudar o simbolo
}

for (const celula of todasAsCelulas) {
    celula.addEventListener('click', cliqueMouse, { once:true  } )
}
