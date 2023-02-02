const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
    
    //destructure properties
    //getting data from updateCity storing it in a local variable
    console.log(data);
    const {cityDets, weather} = data; 

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

   let timeSrc = weather.IsDayTime ? 'day.svg' : 'night.svg';
   time.setAttribute('src', timeSrc);

   const iconSrc = `/icons/${weather.WeatherIcon}.svg`
   icon.setAttribute('src', iconSrc);

};

cityForm.addEventListener('submit', e =>{
e.preventDefault();

//city get the value of name wich is "city" in form in html to save trim to take away any blankspaces
const city = cityForm.city.value.trim();
//reset the written submit after enter
cityForm.reset();

//console.log data from input and async 
forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    localStorage.setItem('location', city);

});

if(localStorage.getItem('location')){
    forecast.updateCity(localStorage.getItem('location'))
    .then(data => updateUI(data))
}