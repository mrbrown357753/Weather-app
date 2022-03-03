class UI
{
    constructor()
    {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feels = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    show_result(weather)
    {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.temp.textContent = `${weather.main.temp} °C`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feels.textContent = `Feels Like: ${weather.main.feels_like} °C`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} atm`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} MPH`;
    }
}