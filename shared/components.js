// CLASS/TAG HEADER COMO COMPONENTE
class MeuHeader extends HTMLElement {
	connectedCallback() {
    if (!document.querySelector('script[src*="kit.fontawesome.com/a940e28064.js"]')) {
      const script = document.createElement("script");
      script.src = "https://kit.fontawesome.com/a940e28064.js";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

		this.innerHTML = `
    <header>
			<!-- Barra de informações acima da Navbar -->
			<div class="info-bar">
				<div class="info-bar__item">
					<div class="info-bar__item-circle">
						<i class="fa-solid fa-phone"></i>
					</div>
					<p class="info-bar__text">(79) 9 9999-9999</p>
				</div>

				<div class="info-bar__item">
					<div class="info-bar__item-circle">
						<i class="fa-solid fa-envelope"></i>
					</div>
					<p class="info-bar__text">svo@email.com</p>
				</div>

				<div class="info-bar__item">
					<div class="info-bar__item-circle">
						<i class="fa-solid fa-location-dot"></i>
					</div>
					<p class="info-bar__text">endereço svo</p>
				</div>
			</div>

			<!-- Navbar -->
			<nav class="navbar">
				<img class="navbar__logo" src="/Home/assets/logo-svo.svg" alt="Logo SVO" />

				<ul class="navbar__list">
					<li class="navbar__item">
						<a class="navbar__link" id="home" href="/Home/index.html" data-link>Início</a>
					</li>
					<li class="navbar__item">
						<a class="navbar__link" id="institutional" href="/Institutional/index.html" data-link>Institucional</a>
					</li>
					<li class="navbar__item">
						<a class="navbar__link" id="professionals" href="/Professionals/index.html" data-link>Profissionais</a>
					</li>
					<li class="navbar__item">
						<a class="navbar__link" id="news" href="/News/index.html" data-link>Notícias</a>
					</li>
					<li class="navbar__item">
						<a class="navbar__link" id="services" href="/Services/index.html" data-link>Serviços</a>
					</li>
					<li class="navbar__item">
						<a class="navbar__link" id="contact" href="" data-link>Contato</a>
					</li>
					<li class="navbar__item">
						<a class="navbar__link" id="talkWithUs" href="" data-link>Fale Conosco</a>
					</li>
				</ul>

				<!-- Modo claro/escuro -->
				<div class="navbar__theme-toggle">
					<input
						type="checkbox"
						id="navbar__theme-toggle-checkbox"
						class="navbar__theme-toggle-checkbox"
					/>
					<label
						for="navbar__theme-toggle-checkbox"
						class="navbar__theme-toggle-label"
					>
						<span class="navbar__theme-toggle-slider">
							<i class="fa-solid fa-sun icon icon-sun"></i>
							<i class="fa-solid fa-moon icon icon-moon"></i>
						</span>
					</label>
				</div>

				<!-- Acessibilidade (tamanho da fonte) -->
				<button class="navbar__accessibility-font-size-btn" id="fontSizeButton">
					Aa <span id="fontSizeLevel">(1/3)</span>
				</button>

				<!-- Botão de solicitar remoção -->
				<button class="navbar__request-service">
					Solicitar Remoção
				</button>
			</nav>
		</header>
      `;
	}
}
customElements.define("svo-header", MeuHeader);

//SUAVIZAÇÃO NA TRANSIÇÃO DE PÁGINAS
document.querySelectorAll('a[data-link]').forEach(link => {
  link.addEventListener('click', async e => {
    e.preventDefault();

    const url = link.getAttribute('href');
    const res = await fetch(url);
    const html = await res.text();

    // Extrai só o <main> da nova página (ou a parte que quiser atualizar)
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newContent = doc.querySelector('main');

    document.querySelector('main').innerHTML = newContent.innerHTML;

    // Atualiza o histórico
    window.history.pushState(null, '', url);
  });
});


class MeuFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <footer>
          <p>&copy; 2025 - Todos os direitos reservados</p>
        </footer>
      `;
	}
}
customElements.define("svo-footer", MeuFooter);
