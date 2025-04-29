import { NewsType } from './enums.js';

function parseDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

export function loadHighlightNews(container, newsItem) {
    const highlightCard = document.createElement("div");
    highlightCard.classList.add("news__card--highlight");
    highlightCard.style.backgroundImage = `url('${newsItem.image}')`;

    highlightCard.innerHTML = `
        <div class="overlay"></div>
        <div class="content">
            <div class="meta">
                <span class="date">${parseDate(newsItem.date)}</span>
                <img src="assets/icon.png" alt="Icone de autor">
                <span class="author">${newsItem.author}</span>
            </div>
            <h2 class="title">${newsItem.title}</h2>
        </div>
    `;

    // Será extraido da URL o ID do card para montar a notícia em outra página
    highlightCard.addEventListener("click", () => {
        window.location.href = `new_details.html?id=${newsItem.id}`;
    });
    container.appendChild(highlightCard);
}

export function loadMainNews(container, newsItems) {
    newsItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("news-card-main");
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
        container.appendChild(card);
    });
}

export function loadLastNews(container, newsItems) {
    newsItems.forEach(item => {
        const lastNewsCard = document.createElement("div");
        lastNewsCard.classList.add("news-card-latest");
        lastNewsCard.style.backgroundImage = `url(${item.image})`;
        lastNewsCard.innerHTML = `
            <div class="news-card-latest-overlay"></div>
            <div class="news-card-latest-content">
                <h3 class="news-card-latest-title">${item.title}<h3>
                <div class="news-card-latest-meta">
                <span class="date">${parseDate(item.date)}</span>
                <div class="news-card-latest-author">
                    <img src="assets/icon.png" alt="Icone de autor">
                    <span>${item.author}</span></div>
                </div>
            </div>
        `;
        container.appendChild(lastNewsCard);
    });
}

// Função principal para carregar as notícias
export function loadNews(highlightContainer, mainContainer, lastNewsContainer, dataLocation) {
    fetch(dataLocation)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar as notícias");
            }
            return response.json();
        })
        .then(news => {
            const highlightNew = news.find(item => item.type === NewsType.HIGHLIGHT);
            const mainNews = news.filter(item => item.type === NewsType.MAIN);
            const lastNews = news.filter(item => item.type === NewsType.LAST);

            if (highlightNew) {
                loadHighlightNews(highlightContainer, highlightNew);
            }
            loadMainNews(mainContainer, mainNews);
            loadLastNews(lastNewsContainer, lastNews);
        })
        .catch(error => {
            console.error("Erro ao carregar as notícias:", error);
        });
}