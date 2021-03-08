// spda springs script - the only thing that is unique for springs script is the pancake banner

// adds pancake banner to the springs script page when it is friday

window.onload = function thursdayBanner() {
    let d = new Date();
    const ban = document.querySelector('.sodaFloat');
  
    if (d.getDay() == 3) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
  };

  

  // soda springs weather - pulls weather data from open weather map   <--- currently preston
  // this also adds real windchill info based on temp and wind speed
  
  const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial';
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      let t = parseFloat(jsObject.main.temp);
      let s = parseFloat(jsObject.wind.speed);
      let output = "N/A";
      document.getElementById('weather').innerHTML = jsObject.weather[0].description;
      document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
      if (t <= 50 && s >= 3) {
        let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
        output = Math.round(f);
      };
      document.getElementById("output").innerHTML = output + "&#8457;";
      document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
      document.getElementById('speed').innerHTML = Math.round(s) + " mph";
  
    });
  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f59f532633b10d55bbf07be7f8538bff';
  fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
      var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let day = 0; day < forecast.length; day++) {
        const d = new Date(forecast[day].dt_txt);
        const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
        const desc = forecast[day].weather[0].description;
        document.getElementById(`day0${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast0${day+1}`).textContent = Math.round(forecast[day].main.temp);
        document.getElementById(`icon0${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon0${day+1}`).setAttribute('alt', desc);
      }
    });