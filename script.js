// Função para rolagem suave até a seção selecionada
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Log simples no console indicando inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log("Módulo do Guia de Marte carregado com sucesso.");
});