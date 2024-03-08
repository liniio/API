    document.addEventListener("DOMContentLoaded", function() {
        const apiKey = "2c20415742b919b733fb75ddd55e8e4d";
        const citySelect = document.getElementById("city-select");
        const cityName = document.getElementById("city-name");
        const temperature = document.getElementById("temperature");
        const description = document.getElementById("description");
        const humidity = document.getElementById("humidity");
    
        citySelect.addEventListener("change", function() {
        const selectedCity = citySelect.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},VN&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = data.main.temp;
            description.textContent = data.weather[0].description;
            humidity.textContent = data.main.humidity;
            })
            .catch(error => console.error(error));
        });
    });
