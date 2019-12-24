const COORDS = 'coords';
const API_KEY="d18eefd495749a4abcc4d56da2b07fa1";
const weather = document.querySelector(".js-weather");

function getWeather(lat ,lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} @${place}`;
     
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log("handlegeo");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}


function handleGeoError(){
    console.log("Can't access current location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if ( loadedCoords === null ){
        askForCoords();
    } else {
        const parseCoords=JSON.parse(loadedCoords)
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();


// function saveCoords(coordsObj) {
//     localStorage.setItem(COORDS, JSON.stringify(coordsObj));
// }

// function handleGeoSucces(position) {
//     const latitude = position.coords.latitude,
//           longitude = position.coords.longitude;
//     const coordsObj = {
//         latitude,
//         longitude
//     };

//     saveCoords(coordsObj);
//     getWeather(latitude, longitude);
// }

// function handleGoError() {
//     console.log("Cant access geo location");
// }

// function askForCoords() {

//     navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGoError);
// }

// function loadCoords() {
//     const loadedCoords = localStorage.getItem(COORDS);

//     if(loadedCoords === null) {
//         askForCoords();
//     } else {
//         const parsedCoords = JSON.parse(loadedCoords);

//         getWeather(parsedCoords.latitude, parsedCoords.longitude);
//     }
// }

// function init() {

//     loadCoords();
// }

// init();