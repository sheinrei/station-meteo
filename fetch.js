// fetch data de meteo

async function getDataMeteo(latitude, longitude) {
  // API météo (Open Meteo)
  const url = use_mock ? "fakefetch.json" : `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset,daylight_duration&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&models=best_match&timezone=Europe%2FBerlin`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors du chargement de la météo.');
    }

    const data = await response.json();
    
    // Extraction des données
    const sunrise = data.daily.sunrise[0];
    const sunset = data.daily.sunset[0];
    const daylightDuration = data.daily.daylight_duration[0];
    const weatherCode = data.hourly.weather_code;
    const temperature = data.hourly.temperature_2m;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('fr-FR', options);
    const array_temperature = data.hourly.temperature_2m.slice(0, 24);
    const temperature_min = Math.min(...array_temperature);
    const temperature_max = Math.max(...array_temperature);
    const set_time = new Date();
    const hours = set_time.getHours();
    const minutes = set_time.getMinutes();
    const direct_time = `Heure : ${hours}:${minutes}`;
    const humidity = data.hourly.relative_humidity_2m;
    const wind_speed = data.hourly.wind_speed_10m
  


    cached_data_today = data;
   
    return {wind_speed,humidity,sunrise, sunset, daylightDuration, weatherCode, temperature, date, temperature_min, temperature_max, direct_time };
    
  } catch (error) {
    console.error('Erreur:', error);
  }
}


// fetch coordonnée latitude/longitude d'une ville input
async function fetch2(city_input) {
  city = city_input
  
  //API localisation ville
  const url2 = use_mock ? "fakefetch.json" : `https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1&limit=1`;


  return fetch(url2)
    .then(response => {
      if (!response.ok) throw new Error("Erreur de la requête");
      return response.json();
    })

    
    


    .then(data => {
    if (use_mock){
      const result = data.location;
      latitude = result.lat;
      longitude = result.lon
      return [latitude,longitude]
    }else{
      const result = data[0];
      const latitude = result.lat;
      const longitude = result.lon;
     
    return [latitude,longitude]}
    })
    .catch(error => {
      console.error("Erreur :", error);
    });
}

