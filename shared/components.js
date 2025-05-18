// CLASS/TAG HEADER COMO COMPONENTE
class MeuHeader extends HTMLElement {
  connectedCallback() {
    if (
      !document.querySelector(
        'script[src*="kit.fontawesome.com/a940e28064.js"]'
      )
    ) {
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
					<p class="info-bar__text">(79) 3234-6022</p>
				</div>

				<div class="info-bar__item">
					<div class="info-bar__item-circle">
						<i class="fa-solid fa-envelope"></i>
					</div>
					<p class="info-bar__text">ouvidoria.fsph@fsph.se.gov.br</p>
				</div>

				<div class="info-bar__item info-bar__item--hidden">
					<div class="info-bar__item-circle">
						<i class="fa-solid fa-location-dot"></i>
					</div>
					<p class="info-bar__text">R. Campo do Brito, 551 - Salgado Filho, Aracaju - SE, 49020-590</p>
				</div>
			</div>

			<!-- Navbar -->
			<nav class="navbar">
				<a href="/Home/index.html"><img class="navbar__logo" src="/Home/assets/logo svo branco.png" alt="Logo SVO" /></a>

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
						<a class="navbar__link" id="talkWithUs" href="" data-link>Fale Conosco</a>
					</li>
				</ul>

				<!-- Modo claro/escuro -->
				<div class="navbar__theme-toggle navbar__theme-toggle--hidden-sm">
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
				<button class="navbar__accessibility-font-size-btn navbar__accessibility-font-size-btn--hidden-sm" id="fontSizeButton">
					Aa <span id="fontSizeLevel">(1/3)</span>
				</button>

				<!-- Botão de solicitar remoção -->
				<a href="/Services/index.html">
          <button class="navbar__request-service navbar__request-service--hidden-sm">
            Solicitar Remoção
          </button>
        </a>


      <!-- Botão Menu de Navegação -->
      <div class="navbar__mobile-buttom" id="menu-toggle">
          <div class="navbar__mobile-line "></div>
          <div class="navbar__mobile-line "></div>
          <div class="navbar__mobile-line "></div>
        </div>
			</nav>

      <!-- Menu de Navegação Mobile -->
      <div class="navbar__mobile" id="mobile-menu">   

        <!-- Botão de Navegação Mobile --> 
        <div class="navbar__mobile-buttom" id="menu-toggle-close">
          <div class="navbar__mobile-line navbar__mobile-line1 "></div>
          <div class="navbar__mobile-line navbar__mobile-line2"></div>
        </div>
      	<ul class="navbar-mobile__list">
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
						<a class="navbar__link" id="talkWithUs" href="" data-link>Fale Conosco</a>
					</li>
				</ul>
        <div class="mobile-navbar__bottom">
          <a href="/Home/index.html"><img class="mobile-navbar__logo" src="/Home/assets/logo svo branco.png" alt="Logo SVO" /></a>

          <div class="navbar__theme-toggle mobile-navbar__theme-toggle">
            <input
              type="checkbox"
              id="navbar__theme-toggle-checkbox2"
              class="navbar__theme-toggle-checkbox"
            />
            <label
              for="navbar__theme-toggle-checkbox2"
              class="navbar__theme-toggle-label"
            >
              <span class="navbar__theme-toggle-slider">
                <i class="fa-solid fa-sun icon icon-sun"></i>
                <i class="fa-solid fa-moon icon icon-moon"></i>
              </span>
            </label>
          </div>
        </div>
      </div>

		</header>
		<!-- VLibras Widget -->
		<vlibras-widget></vlibras-widget>
      `;
  }
}

customElements.define("svo-header", MeuHeader);

class MeuFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="footer">
<div class="footer__container">
  <div class="footer__column">
    <img class="footer__img" src="/Home/assets/logo svo branco.png" alt="Logo SVO">
    <div class="footer__section">
      <h4 class="footer__title">Serviço de Verificação de Óbito - SVO</h4>
      <div class="footer__elements">
      <div class="footer__element">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 18 25" fill="none">
          <path d="M10.1109 23.616C12.5156 20.5988 18 13.2861 18 9.17862C18 4.19698 13.9688 0.155273 9 0.155273C4.03125 0.155273 0 4.19698 0 9.17862C0 13.2861 5.48438 20.5988 7.88906 23.616C8.46562 24.335 9.53438 24.335 10.1109 23.616ZM9 6.17084C9.79565 6.17084 10.5587 6.48773 11.1213 7.0518C11.6839 7.61587 12 8.38091 12 9.17862C12 9.97634 11.6839 10.7414 11.1213 11.3054C10.5587 11.8695 9.79565 12.1864 9 12.1864C8.20435 12.1864 7.44129 11.8695 6.87868 11.3054C6.31607 10.7414 6 9.97634 6 9.17862C6 8.38091 6.31607 7.61587 6.87868 7.0518C7.44129 6.48773 8.20435 6.17084 9 6.17084Z" fill="#F8F8F8"/>
        </svg>
        <p class="footer__contact">R. Campo do Brito, 551 - Salgado Filho, Aracaju - SE, 49020-590</p>
      </div>
      <div class="footer__element">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 19 23" fill="none">
          <path d="M6.11907 1.21323C5.83334 0.414043 5.08005 -0.0113285 4.36016 0.216396L1.09468 1.2476C0.449004 1.45384 0 2.13272 0 2.90612C0 13.5361 7.44381 22.1553 16.6243 22.1553C17.2922 22.1553 17.8785 21.6354 18.0566 20.8878L18.9472 17.1067C19.1439 16.2731 18.7765 15.4009 18.0863 15.07L14.524 13.3514C13.9191 13.0592 13.2178 13.2611 12.8059 13.8498L11.3067 15.968C8.69434 14.5373 6.5792 12.0881 5.34351 9.06327L7.17293 7.33171C7.6813 6.85048 7.85571 6.0427 7.60338 5.34234L6.11907 1.21752V1.21323Z" fill="#F8F8F8"/>
        </svg>
        <p class="footer__contact">(79) 3234-6022</p>
      </div>
      <div class="footer__element">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 22 19" fill="none">
          <path d="M2.0625 0.655273C0.923828 0.655273 0 1.66309 0 2.90527C0 3.61309 0.305078 4.27871 0.825 4.70527L10.175 12.3553C10.6648 12.7537 11.3352 12.7537 11.825 12.3553L21.175 4.70527C21.6949 4.27871 22 3.61309 22 2.90527C22 1.66309 21.0762 0.655273 19.9375 0.655273H2.0625ZM0 5.90527V15.6553C0 17.31 1.2332 18.6553 2.75 18.6553H19.25C20.7668 18.6553 22 17.31 22 15.6553V5.90527L12.65 13.5553C11.6703 14.3568 10.3297 14.3568 9.35 13.5553L0 5.90527Z" fill="#F8F8F8"/>
        </svg>
        <p class="footer__contact">ouvidoria.fsph@fsph.se.gov.br </p>
      </div>
    </div>
  </div>
  </div>
  
  <div class="footer__column">
    <div class="footer__section">
      <h4 class="footer__title">Sobre Nós</h4>
      <div class="footer_decoration"></div>
      <div class="footer__elements">
        <div class="footer__element">
          <a class="footer__link-site" href="/Institutional/index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="currentColor">
              <path d="M6.70859 5.79365C7.09922 6.18428 7.09922 6.81865 6.70859 7.20928L1.70859 12.2093C1.31797 12.5999 0.683594 12.5999 0.292969 12.2093C-0.0976562 11.8187 -0.0976562 11.1843 0.292969 10.7937L4.58672 6.4999L0.296094 2.20615C-0.0945313 1.81553 -0.0945313 1.18115 0.296094 0.790527C0.686719 0.399902 1.32109 0.399902 1.71172 0.790527L6.71172 5.79053L6.70859 5.79365Z"/>
            </svg>
            Institutional
          </a>
        </div>
        <div class="footer__element">
          <a class="footer__link-site" href="/Professionals/index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="currentColor">
            <path d="M6.70859 5.79365C7.09922 6.18428 7.09922 6.81865 6.70859 7.20928L1.70859 12.2093C1.31797 12.5999 0.683594 12.5999 0.292969 12.2093C-0.0976562 11.8187 -0.0976562 11.1843 0.292969 10.7937L4.58672 6.4999L0.296094 2.20615C-0.0945313 1.81553 -0.0945313 1.18115 0.296094 0.790527C0.686719 0.399902 1.32109 0.399902 1.71172 0.790527L6.71172 5.79053L6.70859 5.79365Z" />
            </svg>
            Profissionais
          </a>
        </div>
        <div class="footer__element">
          <a class="footer__link-site" href="/Services/index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="currentColor">
              <path d="M6.70859 5.79365C7.09922 6.18428 7.09922 6.81865 6.70859 7.20928L1.70859 12.2093C1.31797 12.5999 0.683594 12.5999 0.292969 12.2093C-0.0976562 11.8187 -0.0976562 11.1843 0.292969 10.7937L4.58672 6.4999L0.296094 2.20615C-0.0945313 1.81553 -0.0945313 1.18115 0.296094 0.790527C0.686719 0.399902 1.32109 0.399902 1.71172 0.790527L6.71172 5.79053L6.70859 5.79365Z"/>
            </svg>
            Serviços
          </a>
        </div>
      </div>
    </div>
    <div class="footer__section">
      <h4 class="footer__title">Acompanhem nossas redes</h4>
      <div class="footer_decoration"></div>
      <div class="footer__elements">
        <div class="footer__element footer__element--align">
          <a class="footer__link-social" target="_blank" href="https://www.instagram.com/hemose_lacen_svo/">
            <svg class="footer__social-sgv" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#F8F8F8"/>
            </svg>
            <span class="footer__span">https://www.instagram.com/hemose_lacen_svo</span>
          </a>
        </div>
        <div class="footer__element footer__element--align">
          <a class="footer__link-social" target="_blank" href="https://x.com/FSPH_SE">
            <svg class="footer__social-sgv" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 19" fill="none">
              <path d="M15.75 0.5H18.8171L12.1171 8.1239L20 18.5H13.8286L8.99143 12.2082L3.46286 18.5H0.392857L7.55857 10.3427L0 0.501419H6.32857L10.6943 6.25126L15.75 0.5ZM14.6714 16.6728H16.3714L5.4 2.23219H3.57714L14.6714 16.6728Z" fill="#F8F8F8"/>
            </svg>
            <span class="footer__span">https://x.com/FSPH_SE</span>
          </a>
        </div>
        <div class="footer__element footer__element--align">
          <a class="footer__link-social" target="_blank" href="https://www.facebook.com/fsph.se">
            <svg class="footer__social-sgv" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 23" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7122 24.363L12.699 24.3652L12.6138 24.4054L12.5898 24.4099L12.573 24.4054L12.4878 24.3652C12.475 24.3614 12.4654 24.3633 12.459 24.371L12.4542 24.3824L12.4338 24.8729L12.4398 24.8959L12.4518 24.9108L12.5766 24.9956L12.5946 25.0002L12.609 24.9956L12.7338 24.9108L12.7482 24.8924L12.753 24.8729L12.7326 24.3836C12.7294 24.3714 12.7226 24.3645 12.7122 24.363ZM13.0302 24.2334L13.0146 24.2357L12.7926 24.3423L12.7806 24.3538L12.777 24.3664L12.7986 24.8592L12.8046 24.8729L12.8142 24.881L13.0554 24.9876C13.0706 24.9914 13.0822 24.9883 13.0902 24.9784L13.095 24.9623L13.0542 24.2587C13.0502 24.2449 13.0422 24.2365 13.0302 24.2334ZM12.1722 24.2357C12.1669 24.2327 12.1606 24.2317 12.1546 24.233C12.1485 24.2342 12.1432 24.2377 12.1398 24.2426L12.1326 24.2587L12.0918 24.9623C12.0926 24.9761 12.0994 24.9853 12.1122 24.9898L12.1302 24.9876L12.3714 24.881L12.3834 24.8718L12.3882 24.8592L12.4086 24.3664L12.405 24.3526L12.393 24.3412L12.1722 24.2357Z" fill="#F8F8F8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 11.4606C2.40017 9.69615 2.93342 7.96927 3.93575 6.48712C4.93808 5.00497 6.36691 3.83051 8.05081 3.10468C9.7347 2.37885 11.6021 2.13247 13.429 2.39511C15.2559 2.65775 16.9646 3.41825 18.3501 4.58536C19.7357 5.75247 20.7392 7.27661 21.2402 8.97489C21.7412 10.6732 21.7185 12.4735 21.1748 14.1597C20.6311 15.846 19.5895 17.3466 18.1749 18.4815C16.7604 19.6164 15.033 20.3374 13.2 20.558V13.7527H15.6C15.9183 13.7527 16.2235 13.6319 16.4485 13.417C16.6736 13.2021 16.8 12.9106 16.8 12.6066C16.8 12.3027 16.6736 12.0112 16.4485 11.7962C16.2235 11.5813 15.9183 11.4606 15.6 11.4606H13.2V9.16845C13.2 8.8645 13.3264 8.57299 13.5515 8.35807C13.7765 8.14314 14.0817 8.02239 14.4 8.02239H15C15.3183 8.02239 15.6235 7.90165 15.8485 7.68672C16.0736 7.47179 16.2 7.18029 16.2 6.87634C16.2 6.57238 16.0736 6.28088 15.8485 6.06595C15.6235 5.85103 15.3183 5.73028 15 5.73028H14.4C13.4452 5.73028 12.5295 6.09252 11.8544 6.7373C11.1793 7.38208 10.8 8.25659 10.8 9.16845V11.4606H8.4C8.08174 11.4606 7.77652 11.5813 7.55147 11.7962C7.32643 12.0112 7.2 12.3027 7.2 12.6066C7.2 12.9106 7.32643 13.2021 7.55147 13.417C7.77652 13.6319 8.08174 13.7527 8.4 13.7527H10.8V20.558C8.47994 20.2788 6.34633 19.2005 4.7997 17.5255C3.25308 15.8504 2.39978 13.6938 2.4 11.4606ZM12 22.9211C18.6276 22.9211 24 17.7902 24 11.4606C24 5.13089 18.6276 0 12 0C5.3724 0 0 5.13089 0 11.4606C0 17.7902 5.3724 22.9211 12 22.9211Z" fill="#F8F8F8"/>
            </svg>
            <span class="footer__span">https://www.facebook.com/fsph.se</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="footer__column">
  
    <div class="footer__section">
      <h4 class="footer__title">Notícias Recentes</h4>
      <div class="footer_decoration"></div>
    <div class="footer__news">
      <div class="footer__new">
        <img class="footer__new-img" src="/Home/assets/not_1.png" alt="Imagem relacionada a notícia">
        <div class="footer__new-informations">
          <h4 class="footer__new-title">Hemose recebe certificado de qualificação técnica da Hemobrás</h4>
  
          <div class="footer__new-bottom">
            <p class="footer__new-date">03/01/2025</p>
            <a class="footer__new-link" href="#">Saiba Mais</a>
          </div>
        </div>
      </div>
      <div class="footer__new">
        <img class="footer__new-img" src="/Home/assets/not_1.png" alt="Imagem relacionada a notícia">
        <div class="footer__new-informations">
          <h4 class="footer__new-title">Hemose recebe certificado de qualificação técnica da Hemobrás</h4>
  
          <div class="footer__new-bottom">
            <p class="footer__new-date">03/01/2025</p>
            <a class="footer__new-link" href="#">Saiba Mais</a>
          </div>
        </div>
      </div>

    </div>
  </div>
  
  </div>
</div>

</footer>
      `;
  }
}
customElements.define("svo-footer", MeuFooter);

// Lógica do dark-mode
const body = document.body;
const buttons = document.querySelectorAll(".navbar__theme-toggle-checkbox");
const savedTheme = localStorage.getItem("darkMode");

let isDark = false;

if (savedTheme !== null) {
  // Usa o tema salvo
  isDark = savedTheme === "true";
} else {
  // Detecta preferência do sistema
  isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Aplica o tema conforme detectado
if (isDark) {
  body.classList.add("dark-mode");
  buttons.forEach((btn) => (btn.checked = true));
} else {
  body.classList.remove("dark-mode");
  buttons.forEach((btn) => (btn.checked = false));
}

// Listener para alternar tema manualmente
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    buttons.forEach((b) => (b.checked = isDarkMode));
  });
});

// Menu mobile

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const close_menu = document.getElementById("menu-toggle-close");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("ativo");
  });
  close_menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("ativo");
  });

  // Fechar o menu ao clicar em um link
  document.querySelectorAll(".navbar__link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("ativo");
    });
  });
});
