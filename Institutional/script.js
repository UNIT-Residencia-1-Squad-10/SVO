// Implementar navegação horizontal dos cards da 'Estrutura Administrativa' e alerta de links externos.

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.structure__cards');
    const leftArrow = document.querySelector('.structure__arrows img[alt*="esquerda"]');
    const rightArrow = document.querySelector('.structure__arrows img[alt*="direita"]');
    
    const scrollAmount = 350; // Pixels para mover a cada clique
  
    leftArrow.addEventListener('click', () => {
      if (cardsContainer.scrollLeft <= 0) {
        // Já está no começo -> vai pro final
        cardsContainer.scrollTo({
          left: cardsContainer.scrollWidth,
          behavior: 'smooth'
        });
      } else {
        cardsContainer.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      }
    });
  
    rightArrow.addEventListener('click', () => {
      const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;
      if (cardsContainer.scrollLeft >= maxScrollLeft) {
        // Já está no final -> volta pro começo
        cardsContainer.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        cardsContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    });
  
    // Confirmar antes de abrir links externos
    const lawLinks = document.querySelectorAll('.laws__item');
    lawLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const confirmed = confirm('Você será redirecionado para outro site. Deseja continuar?');
        if (!confirmed) {
          e.preventDefault();
        }
      });
    });
  });
  