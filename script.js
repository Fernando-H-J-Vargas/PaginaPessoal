// MANIPULAÇÃO DA BARRA DE CARREGAMENTO
// pega todas as tags <h4> dentro de .habilidades
var textos = document.querySelectorAll(".habilidades h4");
// pega todas as barras
var barras = document.querySelectorAll(".habilidades .barra");

// percorre todos os <h4>
for (var i = 0; i < textos.length; i++) {
  var percent = textos[i].innerHTML.trim(); // pega o texto (ex: "90%")
  barras[i].style.width = percent; // aplica na barra correspondente
}
// FIM - MANIPULAÇÃO DA BARRA DE CARREGAMENTO

// ALTERAÇÃO NO CONTEUDO DE CADA BOTÃO DO MENU VERTICAL
// pega todos os links do menu
var links = document.querySelectorAll("nav ul li .aba");
// pega todas as seções do conteúdo
var secoes = document.querySelectorAll(".conteudo > div");
// primeiro: deixa todas escondidas
for (var i = 0; i < secoes.length; i++) {
  secoes[i].style.display = "none";
}
// mostra a primeira seção por padrão
secoes[0].style.display = "block";
// adiciona evento nos links
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();
    // esconde todas
    for (var j = 0; j < secoes.length; j++) {
      secoes[j].style.display = "none";
    }
    // pega o valor do data-target
    var alvo = this.getAttribute("data-target");
    // mostra só a seção correspondente
    var secao = document.querySelector("." + alvo);
    if (secao) {
      secao.style.display = "block";
    }
  });
}
// FIM - ALTERAÇÃO NO CONTEUDO DE CADA BOTÃO DO MENU VERTICAL

// BOTÃO BAIXAR CV
document.querySelector(".btnDownload").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "document/CV_Fernando_Vargas_2025.pdf";
  link.download = "CV_Fernando_Vargas_2025.pdf";
  link.click();
});
// FIM - BOTÃO BAIXAR CV - FIM