document.querySelectorAll(".services__item").forEach((item) => {
  item.addEventListener("click", () => {
    const answerId = item.id + "-answer";
    const answer = document.getElementById(answerId);
    if (!answer) return;

    const isOpen = answer.classList.contains("open");

    // Fecha todas as respostas abertas
    document
      .querySelectorAll(".services__answer.open")
      .forEach((a) => a.classList.remove("open"));

    // Se não estava aberto, abre agora
    if (!isOpen) answer.classList.add("open");
  });
});
