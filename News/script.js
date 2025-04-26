export function loadNews(container, dataLocation) {
    fetch(dataLocation)
    .then(response => {
        if(!response.ok) {
            throw new Error("Erro ao carregar as notícias");
        }
        return response.json();
    })
    .then(news => {
        news.forEach(item => {
            const cardNew = document.createElement("div");
            if(item.highlightNew) {
                highlightDiv = document.querySelector(".news__main");
                highlightDiv.innerHTML = `
                    <h2>${item.title}</h2>
                `;
            } else if (item.mainNew) {
                cardNew.classList.add("news__card--left");
    
                cardNew.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.date}</p>
                `;
            } else if (item.lastNew) {
                cardNew.classList.add("news__card--right");
    
                cardNew.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.date}</p>
                `;
            }
            container.appendChild(cardNew);
        });
    })
    .catch(error => {
        console.error("Erro ao carregar as notícias:", error);
    })
}
