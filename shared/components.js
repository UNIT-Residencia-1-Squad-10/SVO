class MeuHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <h1>Meu Site</h1>
        <nav>
        <ul>
            <li><a href="../Home/index.html">Início</a></li>
            <li><a href="../Institutional/index.html">Institucional</a></li>
            <li><a href="../News/index.html">Notícias</a></li>
            <li><a href="../Professionals/index.html">Profissionais</a></li>
            <li><a href="../Services/index.html">Serviços</a></li>
        </ul>
        </nav>
        </header>
      `;
  }
}
customElements.define("svo-header", MeuHeader);

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
