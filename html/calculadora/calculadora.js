/* PRINCIPAIS CONSTANTES E VARIAVEIS */

const tela = document.querySelector(".visor"); // constante que manipulara tela/visor
const botoes = document.querySelectorAll(".btn"); // constante que manipulara botão
const btnTema = document.querySelector(".btntema"); // constante que manipula o Dark mode
const somClick = new Audio('click.mp3');

let expressao = ''; // sera utilizada para armazenar as expressoes 
// modo dark
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('darckMode');
    if (btnTema.textContent === 'Tema Escuro') {
      btnTema.textContent = 'Tema Claro';
    } else {
      btnTema.textContent = 'Tema Escuro';
    }
  
});

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent; // Captura o texto do botão

        if (valor === '=') { // se o botão precionado for o = então a conta devera ser feita
            try {
                expressao = eval(expressao); // utilizando eval para transformar strigs em uma expressao utilizavel
                tela.textContent = expressao; // mostra na tela 
            } catch {
                tela.textContent = "Erro"
                expressao = ''; // limpa expressao para recomeçar 
            }
        } else if (valor === 'C') {
            expressao = ''; // limpa expressao
            tela.textContent = '0' // reseta a tela para zero
        } else {
            expressao += valor;

            tela.textContent = expressao;
        }

        somClick.currentTime = 0; // reiniciar som se ele ainda estiver tocando
        somClick.play(); // executar o som

    });
});
// Teclado
document.addEventListener('keydown', (evento) => {

    const tecla = evento.key;
    if ('0123456789.+-*/'.includes(tecla)) {
        expressao += tecla;
        tela.textContent = expressao;
    } else if (tecla === 'Enter') {
        try {
            expressao = eval(expressao);
            tela.textContent = expressao;
        } catch {
            tela.textContent = 'Erro';
            expressao = '';
        }
    } else if (tecla === 'Backspace') {

        expressao = expressao.slice(0, -1);
        tela.textContent = expressao || '0';
    } else if (tecla === 'Escape') {
        expressao = '';
        tela.textContent = '0';
    }
});

