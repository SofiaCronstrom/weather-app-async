const key = 'ksDYGDYsPPqkX7WaxYf3RkujxBEqrbTZ';

//fetch weather
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const respons = await fetch(base + query);
    const data = await respons.json();

    return data[0];
}



//Fetch city 
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const respone = await fetch(base + query);
    const data = await respone.json();

    return data[0];
};

 getCity('stockholm').then( data => {
    return getWeather(data.Key)
 }).then(data => {
    console.log(data);
 }).catch(err => console.log(err));