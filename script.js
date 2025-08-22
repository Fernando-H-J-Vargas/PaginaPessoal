// pega todas as tags <h4> dentro de .habilidades
var textos = document.querySelectorAll(".habilidades h4");
// pega todas as barras
var barras = document.querySelectorAll(".habilidades .barra");

// percorre todos os <h4>
for (var i = 0; i < textos.length; i++) {
    var percent = textos[i].innerHTML.trim(); // pega o texto (ex: "90%")
    barras[i].style.width = percent; // aplica na barra correspondente
}

///////////////////////////////////////////////// script.js
// pega todos os links do menu
var links = document.querySelectorAll("nav ul li a");
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
