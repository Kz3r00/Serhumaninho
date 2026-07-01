// ========== DETECTAR O HORÁRIO E APLICAR O MODO ==========
function aplicarModoHorario() {
    const hora = new Date().getHours();
    const body = document.body;
    
    // Remove classes anteriores
    body.classList.remove('manha', 'tarde', 'noite');
    
    // Aplica a classe e a frase correspondente
    const fraseElemento = document.getElementById('frase-horario');
    
    if (hora >= 5 && hora < 12) {
        body.classList.add('manha');
        fraseElemento.textContent = '"Que a luz deste novo dia te lembre: você é a heroína da sua própria história."';
    } else if (hora >= 12 && hora < 18) {
        body.classList.add('tarde');
        fraseElemento.textContent = '"O sol está no alto, e você também. Continue, Serhumaninho. O mundo espera por você."';
    } else {
        body.classList.add('noite');
        fraseElemento.textContent = '"Descanse, guerreira. As estrelas velam seu sono. Amanhã é uma nova página."';
    }
}

// Executa ao carregar a página
aplicarModoHorario();

// ========== NAVEGAÇÃO ENTRE TELAS ==========
const telaInicial = document.getElementById('tela-inicial');
const cartaContainer = document.getElementById('carta-container');
const botaoAbrir = document.getElementById('botao-abrir');
const botaoVoltar = document.getElementById('botao-voltar');

botaoAbrir.addEventListener('click', function() {
    telaInicial.classList.add('oculto');
    cartaContainer.classList.remove('oculto');
    // Rola para o topo da carta
    cartaContainer.querySelector('.carta').scrollTop = 0;
    // Pequena animação: rolar a página para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

botaoVoltar.addEventListener('click', function() {
    cartaContainer.classList.add('oculto');
    telaInicial.classList.remove('oculto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
