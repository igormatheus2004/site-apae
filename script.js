// ==============================================================
// CÓDIGO DA GALERIA: ABRE A IMAGEM EM TAMANHO MAIOR AO CLICAR
// ==============================================================

const modal = document.getElementById("modal-imagem");
const imagemAmpliada = document.getElementById("imagem-ampliada");
const botaoFechar = document.getElementById("botao-fechar");
const fotos = document.querySelectorAll(".foto-clicavel");

// Ao clicar em qualquer foto da galeria, exibe o modal com a imagem grande
fotos.forEach(function(foto) {
    foto.addEventListener("click", function() {
        modal.style.display = "flex";
        imagemAmpliada.src = this.src;
        imagemAmpliada.alt = this.alt;
    });
});

// Ao clicar no botão de fechar (X), fecha a imagem
botaoFechar.addEventListener("click", function() {
    modal.style.display = "none";
});

// Ao clicar fora da imagem, também fecha a janela
modal.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});

