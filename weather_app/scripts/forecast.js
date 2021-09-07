const key = 'ksDYGDYsPPqkX7WaxYf3RkujxBEqrbTZ';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const respone = await fetch(base + query);
    const data = await respone.json();

    return(data[0]);
};

getCity('stockholm')
.then( data => console.log(data))
.catch(err => console.log(err));