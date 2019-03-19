const weather = document.querySelector(".js-weather");


const API_KEY ='4287bb4aa56e1c1f67abe58fb08294db';
const COORDS = 'coords';


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

).then(function(response){
    return response.json();
    // console.log(response.json());
}).then(function(json){
    // console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} ℃ , ${place}`;
});
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude,
          longitude = position.coords.longitude;

    const coordsObj={
        latitude,
        longitude
        // latitude : latitude,
        // longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}

function handleGeoError(){
    console.log("Cant access geo location!")

}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoordes(){
    const loadedCoordes = localStorage.getItem(COORDS);
    if(loadedCoordes === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoordes);
        getWeather(parseCoords.latitude,parseCoords.longitude)
        // console.log(parseCoords);
        //getweather
    }
}



function init(){
    loadCoordes();
}
init();