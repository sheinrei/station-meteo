// Pour valider l'input avec touche entré
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // empêche le rechargement de page si c'est dans un form
    bouton.click(); // déclenche le clic du bouton
  };
});



//Convertit des secondes en format heures et minutes
function convertirSecondes(totalSecondes) {
  const heures = Math.floor(totalSecondes / 3600);
  const minutes = Math.floor((totalSecondes % 3600) / 60);

  return `${heures}h${minutes}min`;
};



// Weather code translate
function traduireCodeMeteo(code) {
  const descriptions = {
    0: "Soleil", // 
    1: "Principalement dégagé", // 
    2: "Partiellement nuageux",// 
    3: "Couvert",//
    45: "Brouillard",//
    48: "Dépôt de brouillard givrant",//
    51: "Bruine légère",//
    53: "Bruine modérée",//
    55: "Bruine dense",//
    56: "Bruine verglaçante légère",//
    57: "Bruine verglaçante dense",//
    61: "Pluie faible",//
    63: "Pluie modérée",//
    65: "Pluie forte",//
    66: "Pluie verglaçante légère",//
    67: "Pluie verglaçante forte",//
    71: "Chute de neige légère",//
    73: "Chute de neige modérée",//
    75: "Chute de neige forte",//
    77: "Grains de neige",//
    80: "Averses légères",//
    81: "Averses modérées",//
    82: "Averses fortes",//
    85: "Averses de neige légère",//
    86: "Averses de neige forte",//
    95: "Orage léger ou modéré",//
    96: "Orage avec légère grêle",//
    99: "Orage avec forte grêle"//
  };

  if (code == 0){
    return "image/soleil.png";
  };
  if (code == 1 || code == 2){
    return "image/soleil_nuage.png";
  };
  if (code == 3){
    return "image/nuage.png"
  }
  if (code == 45 || code == 48){
    return "image/brouillard.png";
  };
  if (code == 85 || code == 86 ||code == 73 || code == 75 || code == 77){
    return "image/neige.png";
  };
  if (code == 95){
    return "image/orage.png";
  };
  if(code == 95 || code == 96){
    return "orage_grele.png";
  };
  if (code == 51 || code == 53 || code == 55 || code == 56 || code == 57 || code == 61 || code == 63 || code == 65 ||
     code == 66 || code == 67 ||code == 80 || code == 81|| code == 82){
    return "image/pluie.png";
  };
  return descriptions[code] || "Code météo inconnu";
}



// Donne l'heure actuelle sous format 12h00
function formatHeure() {
  const date = new Date();
  const heures = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const heureFormate = `${heures}h${minutes}`;
  return heureFormate;
}


function sliceDate(input){
    const slice = input.slice(11,16);
    return slice;
}



// fonction qui permet de choisir une ville via input et afficher dans today
async function loadCity() {
  let get_input = document.getElementById("input_city").value;

  if (!get_input) {
    alert("Veuillez entrer une ville.");
    return;
  }   
  city = get_input;
  const coords = await fetch2(`${city}`);
  latitude = coords[0];
  longitude = coords[1];
  await getDataMeteo(coords[0],coords[1]);  
  setDomToday();
}

/*fonction dataOtherCity optimisé en mettant les coord en dur plutot que fetch les coords.
renvois les données du fetch meteo pour les 5 othercity.
Pour opti faire un fetch plus reduit et prendre moins d'info pour opti.*/
async function dataOtherCity(){

  const coords_paris = [48.8534951,2.3483915];
  const coords_lille = [50.6329700,3.0585800];
  const coords_marseille = [43.2969500,5.3810700];
  const coords_brest = [48.4000000,-4.4833300];
  const coords_toulouse = [43.6042600,1.4436700];

  const data_paris = await getDataMeteo(coords_paris[0],coords_paris[1]);
  const data_lille = await getDataMeteo(coords_lille[0],coords_lille[1]);
  const data_marseille = await getDataMeteo(coords_marseille[0],coords_marseille[1]);
  const data_brest = await getDataMeteo(coords_brest[0],coords_brest[1]);
  const data_toulouse = await getDataMeteo(coords_toulouse[0],coords_toulouse[1]);

  return {data_paris,data_lille,data_marseille,data_brest,data_toulouse};
}



// function pour premier caractère en maj
const fisrtToUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};



