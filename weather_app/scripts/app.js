const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    
    //saving data from updateCity in local variables
    const cityDets = data.cityDets;
    const weather = data.weather;

    //Output details to the DOM
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`;

    //check if class d-none is showing on card
   if (card.classList.contains('d-none')){
       card.classList.remove('d-none')
   }
};

const updateCity = async (city) => {

    //get the data from forecast.js
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    //return objects with data
    //object shorthand notation
    return {cityDets, weather};
}
cityForm.addEventListener('submit', e =>{
e.preventDefault();

//city get the value of name wich is "city" in form in html to save trim to take away any blankspaces
const city = cityForm.city.value.trim();
//reset the written input after enter
cityForm.reset();

//console.log data from input and async 
updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});