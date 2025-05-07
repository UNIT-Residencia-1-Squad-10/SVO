document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".structure__cards");
  const leftArrow = document.querySelector(
    '.structure__arrows img[alt*="esquerda"]'
  );
  const rightArrow = document.querySelector(
    '.structure__arrows img[alt*="direita"]'
  );

  const scrollAmount = 370;

  // Função de animação para o scroll suave
  function smoothScroll(direction) {
    const start = cardsContainer.scrollLeft;
    const distance = direction * scrollAmount;
    const duration = 500; //
    const startTime = performance.now();

    function animateScroll(time) {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      cardsContainer.scrollLeft = start + distance * progress;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  leftArrow.addEventListener("click", () => {
    if (cardsContainer.scrollLeft <= 0) {
      cardsContainer.scrollTo({
        left: cardsContainer.scrollWidth,
        behavior: "smooth",
      });
    } else {
      smoothScroll(-1);
    }
  });

  rightArrow.addEventListener("click", () => {
    const maxScrollLeft =
      cardsContainer.scrollWidth - cardsContainer.clientWidth;
    if (cardsContainer.scrollLeft >= maxScrollLeft) {
      cardsContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      smoothScroll(1);
    }
  });

  // Confirmar antes de abrir links externos
  const lawLinks = document.querySelectorAll(".laws__item");
  lawLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const confirmed = confirm(
        "Você será redirecionado para outro site. Deseja continuar?"
      );
      if (!confirmed) {
        e.preventDefault();
      }
    });
  });
});
