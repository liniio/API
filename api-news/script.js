document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '24bc944a786b4604abe9373a970cf573'; // Thay thế KEY API phù hợp
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // Gọi API để lấy dữ liệu
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=${yesterday.toISOString().split('T')[0]}&sortBy=popularity&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            const articles = data.articles;
            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'article';
                articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>Source: ${article.source.name}</p>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read More</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Lỗi khi gọi API:', error);
        });
});
