class Weather
{
    constructor(city)
    {
        this.apiKey = 'e095fee9344053dd69cfdd521b9a3140';
        this.city = city;
    }

    async getWeather()
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // change location

    changeLocation(city)
    {
        this.city = city;
    }
}