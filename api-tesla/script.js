document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '24bc944a786b4604abe9373a970cf573';

    // Lấy ngày hiện tại và ngày trước đó một tháng
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    // Định dạng ngày thành chuỗi phù hợp với API
    const fromDateString = lastMonth.toISOString().split('T')[0];
    const toDateString = today.toISOString().split('T')[0];

    // Thực hiện yêu cầu API để lấy bài viết về Tesla
    const apiUrl = `https://newsapi.org/v2/everything?q=Tesla&from=${fromDateString}&to=${toDateString}&sortBy=publishedAt&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const newsList = document.getElementById('news-list');
            const articles = data.articles;

            articles.forEach((article, index) => {
                const li = document.createElement('li');
                li.className = 'news-item';
                li.innerHTML = `<strong>${index + 1}. ${article.title}</strong><br>${article.description}`;
                newsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
