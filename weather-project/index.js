const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');



/**BELOW EXPLAINED: The addEventListener method is used to attach an event listener to an element,
 * which allows the element to "listen" for the specified event and run the associated function when the event is detected. */

search.addEventListener('click',() => {


    const APIKey = '728b0ee6df5687559812bd3169ad77b7';
    /**BELOW EXPLAINED: .search: The dot indicates that you are looking for an element with the class name search-box input. */
    const city = document.querySelector('.search-box input').value;




    /**BELOW EXPLAINED: city === '' is checking if the variable city is strictly equal to an empty string ('').
     * This means both the value must be an empty string and the type must be a string.
        return; is a statement that exits the current function if the condition is true. */

    if (city === '')
        return;


    fetch ('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then (response => response.json)).then 
    (json => {
        if (json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span');
        const wind = document.querySelector('.weather-box .wind span');


        switch (json.weather[0].main){

                case 'Clear':
                image.src ='images/clear.png';
                break;

                case 'Rain':
                image.src ='images/rain.png';
                break;

                case 'Snow':
                image.src ='images/snow.png';
                break;

                case 'Clouds':
                image.src ='images/clouds.png';
                break;

                case 'Haze':
                image.src ='images/haze.png';
                break;

                default:
                    image.src = '';

        }


        temperature.innerHTML = '${parseInt(json.main.temp)}<span>°C</span>';
        description.innerHTML = '${json.weather[0].description}';
        humidity.innerHTML = '${json.main.humidity}%';
        wind.innerHTML = '${parseInt(json.wind.speed)}Km/h';

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';


    });


});


