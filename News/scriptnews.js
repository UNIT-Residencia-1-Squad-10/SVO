import { renderNewsCards, CardSize } from './script.js';

export async function load_news() {
  try {
    const response = await fetch('../data/news.json');
    if (!response.ok) throw new Error('Erro HTTP: ' + response.status);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar a notícia:", error);
    return null;
  }
}

function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

export async function renderpage() {
  const div = document.createElement('div');
  div.classList.add('noticia-container');

  const data_news = await load_news();
  const id = getIdFromUrl();
  const noticia = data_news.find(n => n.id == id);

  div.innerHTML = `
    <div class="noticia-grid">
      <div class="coluna-esquerda">
        <div class="bloco-titulo-esquerda">
          <section class="intro-noticia">
            <h1 class="titulo-noticia">${noticia.title}</h1>
            <p class="subtitulo-noticia">${noticia.content}</p>
            <div class="autor-info">
              <p class="autor-nome">${noticia.author}</p>
              <div class="redes-sociais">
                <a href="https://instagram.com" target="_blank" class="btn-social" aria-label="Instagram">
                  <i class="fi fi-brands-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" class="btn-social" aria-label="Facebook">
                  <i class="fi fi-brands-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" class="btn-social" aria-label="Twitter">
                  <i class="fi fi-brands-twitter-alt-circle"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" class="btn-social" aria-label="LinkedIn">
                  <i class="fi fi-brands-linkedin"></i>
                </a>
                <a href="mailto:email@exemplo.com" class="btn-social" aria-label="E-mail">
                  <i class="fi fi-sr-envelope"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div class="bloco-conteudo-esquerda">
          <div class="imagem-noticia">
            <img src="${noticia.image}" alt="Imagem da notícia">
          </div>
          <div class="texto-da-noticia">
            <article>${noticia.text}</article>
          </div>
        </div>
      </div>

      <div class="coluna-direita">
        <div class="bloco-titulo-direita">
          <h2 class="outras-noticias-titulo">Outras Notícias</h2>
        </div>
        <div class="bloco-conteudo-direita">
          <div class="grid-leia-mais"></div>
        </div>
      </div>
    </div>
  `;

  document.querySelector('main').appendChild(div);
  renderNewsCards('.grid-leia-mais', CardSize.SMALL, 'main');
}