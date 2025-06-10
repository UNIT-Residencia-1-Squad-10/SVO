function show__card__professionals__details(button) {
    const card = button.closest('.card__professionals'); // sobe até o card mais proximo
    const details = card.querySelector('.card__professionals__details');
    details.style.display = (details.style.display === 'none') ? 'block' : 'none';
  }

  const profissionais = {
  charles: {
    nome: "Charles Leal Souza",
    cargo: "Médico Legista",
    imagem: "img/charles.jpg",
    bio: [
      "Lorem ipsum dolor sit amet. Et enim odites ut ullam minus ut aspernatur...",
      "Aut ipsa impedit aut nisi eius hic quae est unde non nihil facere...",
      "Id quo explicabo esse et dolor nihil non officia cum dolorem omnis..."
    ]
  },
  ana: {
    nome: "Ana Paula Silva",
    cargo: "Psicóloga Forense",
    imagem: "img/ana.jpg",
    bio: [
      "Ana é especialista em avaliação psicológica e atua há mais de 10 anos...",
      "Com experiência em casos criminais complexos, trabalha em parceria com...",
      "Seus principais focos são o atendimento a vítimas e a elaboração de laudos."
    ]
  }
};

const select = document.getElementById("profissionalSelect");
const nomeEl = document.getElementById("name");
const cargoEl = document.getElementById("title");
const imagemEl = document.getElementById("profile-img");
const bioEl = document.getElementById("bio");

function renderizar(profKey) {
  const prof = profissionais[profKey];
  nomeEl.textContent = prof.nome;
  cargoEl.textContent = prof.cargo;
  imagemEl.src = prof.imagem;
  
  bioEl.innerHTML = "";
  prof.bio.forEach(par => {
    const p = document.createElement("p");
    p.textContent = par;
    bioEl.appendChild(p);
  });
}

// Inicialização
renderizar(select.value);

// Muda quando seleciona outro profissional
select.addEventListener("change", (e) => {
  renderizar(e.target.value);
});
