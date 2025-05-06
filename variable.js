// Coordonnées 


// La variable city passé dans fetch2() retourne la variable latitude et longitude

let latitude = 43.8825;
let longitude = 1.5819;
let city = "Montdurausse";
let cached_data_today = null;

const input = document.getElementById("input_city");
const bouton = document.getElementById("button_input_city");

// Mock pour ne pas spam les requettes pendant les maj
let use_mock = false;

// Frame other_city
const paris_id = document.getElementById("other_city_1");
const lille_id = document.getElementById("other_city_2");
const marseille_id = document.getElementById("other_city_3");
const brest_id = document.getElementById("other_city_4");
const toulouse_id = document.getElementById("other_city_5");


const reel_hour = new Date().getHours()


//variable compteur
let day_account = 0;
let hour_account_min = 0;
let hour_account_max = 23;

let day_hour_account = 0;
let hour_account = reel_hour;

