class Forecast{
    constructor(){
        this.key = 'ksDYGDYsPPqkX7WaxYf3RkujxBEqrbTZ';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
          //get the data from forecast.js
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);

    //return objects with data
    //object shorthand notation
    return {cityDets, weather};
    }
    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        const respone = await fetch(this.cityURI + query);
        const data = await respone.json();
    
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;

        const respons = await fetch(this.weatherURI + query);
        const data = await respons.json();

        return data[0];
    }
}







