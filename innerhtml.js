
// charge le dom de la frame other_city
async function innerhtml_othercity(){

  const data = await dataOtherCity();
  

  paris_id.innerHTML = `Paris | Minimal : ${data.data_paris.temperature_min}°C 
Maximal : ${data.data_paris.temperature_max}°C   <img id="img_other_city" src="${traduireCodeMeteo(data.data_paris.weatherCode[reel_hour])}">`;


  lille_id.innerHTML = `Lille | Minimal : ${data.data_lille.temperature_min}°C 
Maximal : ${data.data_lille.temperature_max}°C    <img id="img_other_city" src="${traduireCodeMeteo(data.data_lille.weatherCode[reel_hour])}">`;

  marseille_id.innerHTML = `Marseille | Minimal : ${data.data_marseille.temperature_min}°C  
Maximal : ${data.data_marseille.temperature_max}°C   <img id="img_other_city" src="${traduireCodeMeteo(data.data_marseille.weatherCode[reel_hour])}">`;


  brest_id.innerHTML = `Brest | Minimal : ${data.data_brest.temperature_min}°C  
Maximal : ${data.data_brest.temperature_max}°C   <img id="img_other_city" src="${traduireCodeMeteo(data.data_brest.weatherCode[reel_hour])}">`;


  toulouse_id.innerHTML = `Toulouse | Minimal : ${data.data_toulouse.temperature_min}°C 
Maximal : ${data.data_toulouse.temperature_max}°C   <img id="img_other_city" src="${traduireCodeMeteo(data.data_toulouse.weatherCode[reel_hour])}">`;

}

// charge le dom de la frame today
async function setDomToday(){
    
    const data = await getDataMeteo(latitude,longitude);    
    document.getElementById('today').innerHTML = `
        
        <p id="date">${fisrtToUpperCase(data.date)} - ${formatHeure(data.direct_time)}</p>


        <div id="box_daylight">
        <button type="button" id="date_update_after" onclick="dateAfter()"></button>
        <button type="button" id="date_update_before" onclick="dateBefore()"></button>
        <button type="button" id="hour_update_before" onclick="hourBefore()"></button>
        <button type="button" id="hour_update_after" onclick="hourAfter()"></button>
        


          <p id="ville">Météo à &nbsp; <strong> ${fisrtToUpperCase(city)} </strong> </p>
          <p id="sunrise"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      </svg> : ${sliceDate(data.sunrise)} </p>

          <p id="sunset"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16">
      <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      </svg> : ${sliceDate(data.sunset)} </p>
          <p id="daily_light">Durée du jour : ${convertirSecondes(data.daylightDuration)} </p>
        </div>


        <div id="box_temperature_today">
          <p id="temperature_min"> Minimum ${data.temperature_min}°C </p>
          <p id="temperature_max"> Maximum ${data.temperature_max}°C </p>
        </div>

        <div id="humid_wind">
          <p id="humidity_today">Humidité ${data.humidity[reel_hour]}% </p>
          <p id="wind_today">Vitesse vent ${data.wind_speed[reel_hour]}km/h </p>

        </div>



      <div id="recap_by_hour">
        <div id="hour0">
          <p id="recap_hour0">${reel_hour}H <br>
          ${data.temperature[reel_hour]}°C <br></p>
          <img id="img_weather_0" src="${traduireCodeMeteo(data.weatherCode[reel_hour])}">
        </div>



        <div id="hour1">
          <p id="recap_hour1">${reel_hour+1}H <br>
          ${data.temperature[reel_hour+1]}°C <br></p>
          <img id="img_weather_1" src="${traduireCodeMeteo(data.weatherCode[reel_hour+1])}">
        </div>


        <div id="hour2">
          <p id="recap_hour2">${reel_hour+2}H <br>
          ${data.temperature[reel_hour+2]}°C <br></p>
          <img id="img_weather_2" src="${traduireCodeMeteo(data.weatherCode[reel_hour+2])}">
        </div>



        <div id="hour3">
          <p id="recap_hour3">${reel_hour+3}H <br>
          ${data.temperature[reel_hour+3]}°C <br></p>
          <img id="img_weather_3" src="${traduireCodeMeteo(data.weatherCode[reel_hour+3])}">
        </div>



        <div id="hour4">
          <p id="recap_hour4">${reel_hour+4}H <br>
          ${data.temperature[reel_hour+4]}°C <br></p>
          <img id="img_weather_4" src="${traduireCodeMeteo(data.weatherCode[reel_hour+4])}">
        </div>



        <div id="hour5">
          <p id="recap_hour5">${reel_hour+5}H <br>
          ${data.temperature[reel_hour+5]}°C <br></p>
          <img id="img_weather_5" src="${traduireCodeMeteo(data.weatherCode[reel_hour+5])}">
        </div>


      </div>
        `
}

// dans today changer le recap par heure de +1 chaque clic
function hourAfter(){
  if (cached_data_today && hour_account < 18){
    hour_account++
    
    const hour0 = document.getElementById("recap_hour0")
    const hour1 = document.getElementById("recap_hour1")
    const hour2 = document.getElementById("recap_hour2")
    const hour3 = document.getElementById("recap_hour3")
    const hour4 = document.getElementById("recap_hour4")
    const hour5 = document.getElementById("recap_hour5")

    const temperature = cached_data_today.hourly.temperature_2m;
    
    //hour0
    hour0.innerHTML = `${hour_account}H <br>
        ${temperature[hour_account+day_hour_account]}°C
        `;

    let img_hour0 = document.querySelector("#img_weather_0");
    const src_0 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+day_hour_account]);
    img_hour0.src = src_0;


    //hour1
   
    hour1.innerHTML = `${hour_account+1}H <br>
        ${temperature[hour_account+1+day_hour_account]}°C
        `;

    let img_hour1 = document.querySelector("#img_weather_1");
    const src_1 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+1+day_hour_account]);
    img_hour1.src = src_1;

    //hour2
    
    hour2.innerHTML = `${hour_account+2}H <br>
        ${temperature[hour_account+2+day_hour_account]}°C
        `;

    let img_hour2 = document.querySelector("#img_weather_2");
    const src_2 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+2+day_hour_account]);
    img_hour2.src = src_2;

    //hour3
  
    hour3.innerHTML = `${hour_account+3}H <br>
        ${temperature[hour_account+3+day_hour_account]}°C
        `;

    let img_hour3 = document.querySelector("#img_weather_3");
    const src_3 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+3+day_hour_account]);
    img_hour3.src = src_3;

    //hour4

    hour4.innerHTML = `${hour_account+4}H <br>
        ${temperature[hour_account+4+day_hour_account]}°C
        `;

    let img_hour4 = document.querySelector("#img_weather_4");
    const src_4 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+4+day_hour_account]);
    img_hour4.src = src_4;

    //hour5
    
    hour5.innerHTML = `${hour_account+5}H <br>
        ${temperature[hour_account+5+day_hour_account]}°C
        `;

    let img_hour5 = document.querySelector("#img_weather_5");
    const src_5 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+5+day_hour_account]);
    img_hour5.src = src_5;
  }
}

// dans today changer le recap par heure de +1 chaque clic
function hourBefore(){
  if (cached_data_today && !hour_account==0){

    hour_account--
    const hour0 = document.getElementById("recap_hour0");
    const hour1 = document.getElementById("recap_hour1");
    const hour2 = document.getElementById("recap_hour2");
    const hour3 = document.getElementById("recap_hour3");
    const hour4 = document.getElementById("recap_hour4");
    const hour5 = document.getElementById("recap_hour5");

    const temperature = cached_data_today.hourly.temperature_2m;
    
    //hour0
    hour0.innerHTML = `${hour_account}H <br>
        ${temperature[hour_account+day_hour_account]}°C
        `;

    let img_hour0 = document.querySelector("#img_weather_0");
    const src_0 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+day_hour_account]);
    img_hour0.src = src_0;

    //hour1
    hour1.innerHTML = `${hour_account+1}H <br>
        ${temperature[hour_account+1+day_hour_account]}°C
        `;

    let img_hour1 = document.querySelector("#img_weather_1");
    const src_1 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+1+day_hour_account]);
    img_hour1.src = src_1;

    //hour2
    hour2.innerHTML = `${hour_account+2}H <br>
        ${temperature[hour_account+2+day_hour_account]}°C
        `;

    let img_hour2 = document.querySelector("#img_weather_2");
    const src_2 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+2+day_hour_account]);
    img_hour2.src = src_2;

    //hour3
      hour3.innerHTML = `${hour_account+3}H <br>
        ${temperature[hour_account+3+day_hour_account]}°C
        `;

    let img_hour3 = document.querySelector("#img_weather_3");
    const src_3 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+3+day_hour_account]);
    img_hour3.src = src_3;

    //hour4
    hour4.innerHTML = `${hour_account+4}H <br>
        ${temperature[hour_account+4+day_hour_account]}°C
        `;

    let img_hour4 = document.querySelector("#img_weather_4");
    const src_4 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+4+day_hour_account]);
    img_hour4.src = src_4;

    //hour5   +day_hour_account
    hour5.innerHTML = `${hour_account+5}H <br>
        ${temperature[hour_account+5+day_hour_account]}°C
        `;

    let img_hour5 = document.querySelector("#img_weather_5");
    const src_5 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+5+day_hour_account]);
    img_hour5.src = src_5;
  }
}

// Change la date +1 avec max +6
function dateAfter(){
  if (cached_data_today && day_account <=5){
    day_account ++;
    day_hour_account+= 24 ;
    hour_account_min = hour_account_min+24;
    hour_account_max = hour_account_max+24;

    const id_sunrise = document.getElementById("sunrise");
    const id_sunset = document.getElementById("sunset");
    const id_daylight = document.getElementById("daily_light");
    const id_temp_min = document.getElementById("temperature_min");
    const id_temp_max = document.getElementById("temperature_max");
    const id_date = document.getElementById("date");
    const id_humidity = document.getElementById("humidity_today");
    const id_wind = document.getElementById("wind_today")

    const hour0 = document.getElementById("recap_hour0");
    const hour1 = document.getElementById("recap_hour1");
    const hour2 = document.getElementById("recap_hour2");
    const hour3 = document.getElementById("recap_hour3");
    const hour4 = document.getElementById("recap_hour4");
    const hour5 = document.getElementById("recap_hour5");

    const sunrise = cached_data_today.daily.sunrise[day_account];
    const sunset = cached_data_today.daily.sunset[day_account];
    const daylight = cached_data_today.daily.daylight_duration[day_account];

    const humidity = cached_data_today.hourly.relative_humidity_2m;
    const wind_speed = cached_data_today.hourly.wind_speed_10m;
    const temperature = cached_data_today.hourly.temperature_2m;


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + day_account);
    const date = tommorow.toLocaleDateString('fr-FR', options);
    
    
    //parti supp de frame today
    id_date.textContent = `${fisrtToUpperCase(date)} - ${formatHeure()}`

    id_sunrise.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      </svg> : ${sliceDate(sunrise)}`;

    id_sunset.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16">
      <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      </svg> : ${sliceDate(sunset)}`

    id_daylight.innerHTML = `Durée du jour : ${convertirSecondes(daylight)}`

    const array_temperature = cached_data_today.hourly.temperature_2m.slice(hour_account_min, hour_account_max);
    const temperature_min = Math.min(...array_temperature);
    const temperature_max = Math.max(...array_temperature);

    
    id_temp_min.innerHTML = `Minimum ${temperature_min}°C`
    id_temp_max.innerHTML = `Maximum ${temperature_max}°C`

    
    id_humidity.textContent = `Humidité ${humidity[reel_hour+day_hour_account]}%`
    id_wind.textContent = `Vitesse vent ${wind_speed[reel_hour+day_hour_account]}km/h`

    //recap heure

    //hour0
    hour0.innerHTML = `${hour_account}H <br>
        ${temperature[hour_account+day_hour_account]}°C
        `;

    let img_hour0 = document.querySelector("#img_weather_0");
    const src_0 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+day_hour_account]);
    img_hour0.src = src_0;


    //hour1
   
    hour1.innerHTML = `${hour_account+1}H <br>
        ${temperature[hour_account+1+day_hour_account]}°C
        `;

    let img_hour1 = document.querySelector("#img_weather_1");
    const src_1 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+1+day_hour_account]);
    img_hour1.src = src_1;

    //hour2
    
    hour2.innerHTML = `${hour_account+2}H <br>
        ${temperature[hour_account+2+day_hour_account]}°C
        `;

    let img_hour2 = document.querySelector("#img_weather_2");
    const src_2 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+2+day_hour_account]);
    img_hour2.src = src_2;

    //hour3
  
    hour3.innerHTML = `${hour_account+3}H <br>
        ${temperature[hour_account+3+day_hour_account]}°C
        `;

    let img_hour3 = document.querySelector("#img_weather_3");
    const src_3 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+3+day_hour_account]);
    img_hour3.src = src_3;

    //hour4

    hour4.innerHTML = `${hour_account+4}H <br>
        ${temperature[hour_account+4+day_hour_account]}°C
        `;

    let img_hour4 = document.querySelector("#img_weather_4");
    const src_4 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+4+day_hour_account]);
    img_hour4.src = src_4;

    //hour5
    
    hour5.innerHTML = `${hour_account+5}H <br>
        ${temperature[hour_account+5+day_hour_account]}°C
        `;

    let img_hour5 = document.querySelector("#img_weather_5");
    const src_5 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+5+day_hour_account]);
    img_hour5.src = src_5;
  }
}

// change la date -1 ne marche pas jour reel -1
function dateBefore(){
  if (cached_data_today && day_account >0){
    day_account --;
    day_hour_account-= 24 ;
    hour_account_min-=24;
    hour_account_max-=24;

    const id_sunrise = document.getElementById("sunrise");
    const id_sunset = document.getElementById("sunset");
    const id_daylight = document.getElementById("daily_light");
    const id_temp_min = document.getElementById("temperature_min");
    const id_temp_max = document.getElementById("temperature_max");
    const id_date = document.getElementById("date")
    const id_humidity = document.getElementById("humidity_today");
    const id_wind = document.getElementById("wind_today")

    const hour0 = document.getElementById("recap_hour0");
    const hour1 = document.getElementById("recap_hour1");
    const hour2 = document.getElementById("recap_hour2");
    const hour3 = document.getElementById("recap_hour3");
    const hour4 = document.getElementById("recap_hour4");
    const hour5 = document.getElementById("recap_hour5");

    
    const sunrise = cached_data_today.daily.sunrise[day_account];
    const sunset = cached_data_today.daily.sunset[day_account];
    const daylight = cached_data_today.daily.daylight_duration[day_account];

    const humidity = cached_data_today.hourly.relative_humidity_2m;
    const wind_speed = cached_data_today.hourly.wind_speed_10m;
    
    const temperature = cached_data_today.hourly.temperature_2m;


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + day_account);
    const date = tommorow.toLocaleDateString('fr-FR', options);
    
    
    //parti supp de frame today
    id_date.textContent = `${fisrtToUpperCase(date)} - ${formatHeure()}`

    id_sunrise.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      </svg> : ${sliceDate(sunrise)}`;

    id_sunset.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16">
      <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      </svg> : ${sliceDate(sunset)}`

    id_daylight.innerHTML = `Durée du jour : ${convertirSecondes(daylight)}`;

    const array_temperature = cached_data_today.hourly.temperature_2m.slice(hour_account_min, hour_account_max);
    const temperature_min = Math.min(...array_temperature);
    const temperature_max = Math.max(...array_temperature);

    
    
    id_temp_min.innerHTML = `Minimum ${temperature_min}°C`;
    id_temp_max.innerHTML = `Maximum ${temperature_max}°C`;

    id_humidity.textContent = `Humidité ${humidity[reel_hour+day_hour_account]}%`
    id_wind.textContent = `Vitesse vent ${wind_speed[reel_hour+day_hour_account]} km/h`
    //recap heure

    //hour0
    hour0.innerHTML = `${hour_account}H <br>
        ${temperature[hour_account+day_hour_account]}°C
        `;

    let img_hour0 = document.querySelector("#img_weather_0");
    const src_0 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+day_hour_account]);
    img_hour0.src = src_0;


    //hour1
   
    hour1.innerHTML = `${hour_account+1}H <br>
        ${temperature[hour_account+1+day_hour_account]}°C
        `;

    let img_hour1 = document.querySelector("#img_weather_1");
    const src_1 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+1+day_hour_account]);
    img_hour1.src = src_1;

    //hour2
    
    hour2.innerHTML = `${hour_account+2}H <br>
        ${temperature[hour_account+2+day_hour_account]}°C
        `;

    let img_hour2 = document.querySelector("#img_weather_2");
    const src_2 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+2+day_hour_account]);
    img_hour2.src = src_2;

    //hour3
  
    hour3.innerHTML = `${hour_account+3}H <br>
        ${temperature[hour_account+3+day_hour_account]}°C
        `;

    let img_hour3 = document.querySelector("#img_weather_3");
    const src_3 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+3+day_hour_account]);
    img_hour3.src = src_3;

    //hour4

    hour4.innerHTML = `${hour_account+4}H <br>
        ${temperature[hour_account+4+day_hour_account]}°C
        `;

    let img_hour4 = document.querySelector("#img_weather_4");
    const src_4 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+4+day_hour_account]);
    img_hour4.src = src_4;

    //hour5
    
    hour5.innerHTML = `${hour_account+5}H <br>
        ${temperature[hour_account+5+day_hour_account]}°C
        `;

    let img_hour5 = document.querySelector("#img_weather_5");
    const src_5 = traduireCodeMeteo(cached_data_today.hourly.weather_code[hour_account+5+day_hour_account]);
    img_hour5.src = src_5;
  }
}