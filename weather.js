const api_key = '59ce505ee91f07f3642cd9dfdb7aa4ed';
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=59ce505ee91f07f3642cd9dfdb7aa4ed";
const weather_icon = "http://openweathermap.org/img/wn/10d@2x.png";
const default_value = "---";

const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const weatherDegree = document.querySelector('.weather-degree');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity>span');
const windSpeed = document.querySelector('.wind-speed>span');

function getWeather(){
    let city = document.querySelector(".search-input").value || "Huế";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&lang=vi&units=metric`)
      .then(async function(res){
          let data = await res.json();
          cityName.innerHTML = data.name ?? default_value;
          weatherState.innerHTML = data.weather[0].description ?? default_value;
          weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ?? default_value;
          weatherDegree.innerHTML = Math.round(data.main.temp) ?? default_value;
          sunrise.innerHTML = moment.unix(data.sys.sunrise).format("HH:mm") ?? default_value;
          sunset.innerHTML = moment.unix(data.sys.sunset).format("HH:mm") ?? default_value;
          humidity.innerHTML = data.main.humidity ?? default_value;
          windSpeed.innerHTML = (data.wind.speed *3.6).toFixed(1) ?? default_value;
      })
  }

  getWeather();