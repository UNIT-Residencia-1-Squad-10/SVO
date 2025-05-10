document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".structure__cards");
  const leftArrow = document.querySelector(
    '.structure__arrows img[alt*="esquerda"]'
  );
  const rightArrow = document.querySelector(
    '.structure__arrows img[alt*="direita"]'
  );
  const scrollAmount = 370;

  // DUPLICAR OS CARDS
  const cards = [...cardsContainer.children];
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.classList.add("clone");
    cardsContainer.appendChild(clone);
  });

  // Flag para bloquear cliques durante a animação
  let isScrolling = false;

  // Scroll suave com bloqueio de múltiplos cliques
  function smoothScroll(direction) {
    if (isScrolling) return;
    isScrolling = true;

    const start = cardsContainer.scrollLeft;
    const distance = direction * scrollAmount;
    const duration = 500;
    const startTime = performance.now();

    function animateScroll(time) {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      cardsContainer.scrollLeft = start + distance * progress;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling = false;
      }
    }

    requestAnimationFrame(animateScroll);
  }

  rightArrow.addEventListener("click", () => {
    smoothScroll(1);
  });

  leftArrow.addEventListener("click", () => {
    smoothScroll(-1);
  });

  // Loop infinito ao atingir o fim/início
  cardsContainer.addEventListener("scroll", () => {
    const maxScrollLeft = cardsContainer.scrollWidth / 2;

    if (cardsContainer.scrollLeft >= maxScrollLeft) {
      cardsContainer.scrollLeft -= maxScrollLeft;
    } else if (cardsContainer.scrollLeft <= 0) {
      cardsContainer.scrollLeft += maxScrollLeft;
    }
  });

  // Confirmar antes de abrir links externos
  const lawLinks = document.querySelectorAll(".laws__item");
  lawLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const confirmed = confirm(
        "Você será redirecionado para outro site. Deseja continuar?"
      );
      if (!confirmed) e.preventDefault();
    });
  });
});
