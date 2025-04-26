import { NewsType } from './enums.js';

export function loadHighlightNews(container, newsItem) {
    const highlightCard = document.createElement("div");
    highlightCard.classList.add("news__card--highlight");
    highlightCard.innerHTML = `
        <h2>${newsItem.title}</h2>
        <p>${newsItem.date}</p>
        <p>${newsItem.content}</p>
    `;
    container.appendChild(highlightCard);
}

export function loadMainNews(container, newsItems) {
    newsItems.forEach(item => {
        const mainCard = document.createElement("div");
        mainCard.classList.add("news__card--main");
        mainCard.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.date}</p>
        `;
        container.appendChild(mainCard);
    });
}

export function loadLastNews(container, newsItems) {
    newsItems.forEach(item => {
        const lastNewsCard = document.createElement("div");
        lastNewsCard.classList.add("news__card--lastNews");
        lastNewsCard.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.date}</p>
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