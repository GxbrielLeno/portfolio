let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

function exibirAlerta() {
  var alerta = document.getElementById('alert');
  alerta.classList.add('slide-in');
  alerta.style.display = 'block';
}

function fecharAlerta() {
  var alerta = document.getElementById('alert');
  alerta.style.display = 'none';
}

var botao = document.getElementById('btnCopiarTexto');

        // Adiciona um evento de passagem do mouse para exibir a mensagem
        botao.addEventListener('mouseover', function() {
          exibirAlerta()
        });
        botao.addEventListener('mouseout', function() {
          fecharAlerta();
        });

        // Adiciona um evento de clique para copiar o texto
        botao.addEventListener('click', function() {
            var alerta = document.getElementById('alert');
            var textoDinamico = "gabrielleno.p@gmail.com";
            var inputElement = document.createElement('input');
            inputElement.value = textoDinamico;
            document.body.appendChild(inputElement);
            inputElement.select();
            document.execCommand('copy');
            document.body.removeChild(inputElement);
            alerta.textContent = "Email copiado!"
            exibirAlerta();
        });
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let tresPontos = document.getElementById("tres-pontos");
let descCompleta = document.getElementById("descricao-completa");
let btnContinuarLendo = document.getElementById("btn-continuar-lendo");
let btnLerMenos = document.getElementById("ler-menos");

function MostrarDescricao() {
  descCompleta.style.display = "block";
  btnLerMenos.style.display = "block";
  tresPontos.style.display = "none";
  btnContinuarLendo.style.display = "none";
}
function EsconderDescricao() {
  descCompleta.style.display = "none";
  btnLerMenos.style.display = "none";
  tresPontos.style.display = "block";
  btnContinuarLendo.style.display = "block";
}
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu");
  var logo = document.querySelector(".logo");
  menu.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("sumir", window.scrollY > 0);
});

ScrollReveal().reveal("#btn-curriculo", { delay: 400, reset: true });
ScrollReveal().reveal(".meu-nome", { delay: 400, reset: true });
ScrollReveal().reveal(".meu-cargo", { delay: 600, reset: true });
ScrollReveal().reveal(".minha-desc", { delay: 800, reset: true });
ScrollReveal().reveal("#minha-foto", { delay: 400, reset: true });
ScrollReveal().reveal(".parte-texto", { delay: 400, reset: true });
ScrollReveal().reveal(".texto-skills,.projetos", { delay: 400, reset: true });
ScrollReveal().reveal(".skiils-linguagem,.todos_projetos,.btn_ver_projetos", {
  delay: 800,
  reset: true,
});

function mostrarAlerta() {
  alert("Código privado.");
}