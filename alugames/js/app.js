let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}.`)

}
function alterarStatus(gameId) {
    let gameElement = document.getElementById(`game-${gameId}`);  // Seleciona o elemento do jogo com o ID fornecido
    let imageElement = gameElement.querySelector('.dashboard__item__img'); // Seleciona a imagem dentro do elemento do jogo
    let buttonElement = gameElement.querySelector('.dashboard__item__button'); // Seleciona o botão dentro do elemento do jogo
    let gameName = gameElement.querySelector('.dashboard__item__name'); //

    if (buttonElement.classList.contains('dashboard__item__button--return')) {// Verifica se o botão tem a classe 'dashboard__item__button--return'.
        // Se tiver, o jogo está alugado, então vamos devolvê-lo
        if (confirm(`Você tem certeza que deseja Devolver o jogo ${gameName.textContent}?`)) {//Pergunta se quer Devolver o jogo.
            buttonElement.classList.remove('dashboard__item__button--return'); // Remove a classe
            imageElement.classList.remove('dashboard__item__img--rented'); // Remove a classe da imagem
            buttonElement.textContent = 'Alugar'; // Muda o texto do botão
            jogosAlugados--;
        }

    } else {
        if (confirm(`Você tem certeza que deseja Alugar o jogo ${gameName.textContent}?`)) {//Pergunta se quer Alugar o jogo.
            // Se não tiver, o jogo está disponível, então vamos alugá-lo
            buttonElement.classList.add('dashboard__item__button--return'); // Adiciona a classe
            imageElement.classList.add('dashboard__item__img--rented'); // Adiciona a classe à imagem
            buttonElement.textContent = 'Devolver'; // Muda o texto do botão
            jogosAlugados++;
        }
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});