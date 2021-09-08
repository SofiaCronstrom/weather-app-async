const cityForm = document.querySelector('form');


const updateCity = async (city) => {
    //get the data from forecast.js
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    //return objects with data
    return {
        cityDets: cityDets,
        weather: weather
    };
}
cityForm.addEventListener('submit', e =>{
e.preventDefault();

//city get the value of name wich is "city" in form in html to save trim to take away any blankspaces
const city = cityForm.city.value.trim();
//reset the written input after enter
cityForm.reset();

//console.log data from input and async 
updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));

});