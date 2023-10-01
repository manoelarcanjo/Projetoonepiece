const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado")
        personagem[index].classList.add('selecionado');
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');

    botaoSelecionado.classList.remove("selecionado");
}

