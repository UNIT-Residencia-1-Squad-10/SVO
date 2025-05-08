export const CardSize = {
    BIG: 'BIG',
    MED: 'MED',
    SMALL: 'SMALL'
  };
  
  const parseDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };
  
  export async function renderNewsCards(containerSelector, cardStyle, typeFilter) {
    const container = document.querySelector(containerSelector);
    if (!container) return console.error('Container não encontrado:', containerSelector);
  
    try {
      const response = await fetch('../data/news.json');
      if (!response.ok) throw new Error('Falha ao carregar notícias');
  
      const data = await response.json();
      const filtered = data.filter(n => n.type === typeFilter);
  
      filtered.forEach(item => {
        const card = document.createElement('div');
  
        if (cardStyle === CardSize.BIG) {
          card.classList.add('news__card--highlight');
          card.style.backgroundImage = `url('${item.image}')`;
          card.innerHTML = `
            <div class="overlay"></div>
            <div class="content">
              <div class="meta">
                <span class="date">${parseDate(item.date)}</span>
                <img src="assets/icon.png" alt="Icone de autor">
                <span class="author">${item.author}</span>
              </div>
              <h2 class="title">${item.title}</h2>
            </div>
          `;
          card.addEventListener('click', () => {
            window.location.href = `new_details.html?id=${item.id}`;
          });
  
        } else if (cardStyle === CardSize.MED) {
          card.classList.add('news-card-main');
          card.innerHTML = `
            <div class="news-card-main-image">
              <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-card-main-content">
              <div class="news-card-main-title-container">
                <h3 class="news-card-main-title">${item.title}</h3>
              </div>
              <div class="news-card-main-text-container">
                <p class="news-card-main-text">${item.content}</p>
              </div>
              <div class="news-card-main-link-container">
                <a href="new_details.html?id=${item.id}" class="news-card-main-link">Saiba mais</a>
              </div>
            </div>
          `;
  
        } else if (cardStyle === CardSize.SMALL) {
          card.classList.add('news-card-latest');
          card.style.backgroundImage = `url(${item.image})`;
          card.innerHTML = `
            <div class="news-card-latest-overlay"></div>
            <div class="news-card-latest-content">
              <h3 class="news-card-latest-title">${item.title}</h3>
              <div class="news-card-latest-meta">
                <span class="date">${parseDate(item.date)}</span>
                <div class="news-card-latest-author">
                  <img src="assets/icon.png" alt="Icone de autor">
                  <span>${item.author}</span>
                </div>
              </div>
            </div>
          `;
        }
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Erro ao carregar ou renderizar as notícias:', error);
    }
  }