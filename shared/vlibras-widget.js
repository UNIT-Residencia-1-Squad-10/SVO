class VLibrasWidget extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div vw class="enabled">
          <div vw-access-button class="active"></div>
          <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
          </div>
        </div>
      `;
  
      if (!window.vlibrasLoaded) {
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.async = true;
        script.onload = () => {
          new window.VLibras.Widget('https://vlibras.gov.br/app');
          window.vlibrasLoaded = true;
        };
        document.body.appendChild(script);
      }
    }
  }
  
  customElements.define('vlibras-widget', VLibrasWidget);
  