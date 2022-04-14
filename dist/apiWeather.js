const _TOKEN = "c304a9d6ab5ab3f90cd09826ab7e8bec";

const icon ={
    "Clear":"./src/assets/meteo_icon/sun.png",
    "Thunderstorm":"./src/assets/meteo_icon/thunderstorm.png",
    "Drizzle":"./src/assets/meteo_icon/dizzle.png",
    "Rain":"./src/assets/meteo_icon/heavy_rain.png",
    "Clouds":"./src/assets/meteo_icon/cloud.png"
};
//FUNCTION WHICH STARTS WEATHERBYCITY ROUTINE
const searchWeath = () =>{
    let searchfield = document.getElementById("findCity").value;
    weatherByCity(searchfield);
}

//FUNCTION FOR GEOLOCATING THE DEVICE
let start =()=>navigator.geolocation.getCurrentPosition(success,error,optional);
const success=(pos)=> {
    if(navigator.geolocation){
        cord = pos.coords;
        console.log(`Latitude : ${cord.latitude}`);
        console.log(`Longitude: ${cord.longitude}`);
        console.log(`More or less ${cord.accuracy} meters.`);
        weatherByCoord(cord.latitude,cord.longitude);
    }else{
      console.log("GeoLoc not available!");
    }
  }
const error=()=>{
    alert('posizione non condivisa dal browser, puoi usare la ricerca città come alternativa!');
}
const optional = {
    enableHighAccuracy: true,
};

//THIS ARE TWO DIFFERENT REQUEST TO OPENWEATHER' API
const weatherByCity = (city)=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=it&appId="+_TOKEN)
    .then(data=>{ return data.json();})
    .then(post => renderRes(post));
    console.log("loading...");
}
const weatherByCoord = (lat,long)=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&lang=it&appid='+_TOKEN)  
    .then(data => {
        return data.json();
        })
        .then(post => {
        renderRes(post); 
        });
        console.log("loading...");
        weath
    }
//API RESPONSE RENDERING FUNCT
const renderRes = (result)=>{
    resetDOM();
    if (result.coord){
         nameField = document.getElementById("nameCity");
        descr = document.getElementById("descr");
         meteo_icon = document.getElementById("meteo_ico");
        let temp_min = document.getElementById("temp_min");
        let temp_max = document.getElementById("temp_max");
        let humidity = document.getElementById("humidity");
        let temp = document.getElementById("temp");
        nameField.innerHTML=result.name;
        nameField.innerHTML+=", "+result.sys.country;
        meteo_icon.innerHTML="";
        descr.innerHTML=result.weather[0].description;
        temp_min.innerText+=" "+Math.round(result.main.temp_min)+"°";
        temp_max.innerText+=" "+Math.round(result.main.temp_max)+"°";
        humidity.innerText+=" "+result.main.humidity+"%";
        temp.innerHTML=Math.round(result.main.temp)+"°";
        let icona = document.createElement("img");
        let address = result.weather[0].main;
        icona.classList.add("rounded-md");
        icona.src=icon[address.toString()];
        meteo_icon.appendChild(icona);
}else{
    resetDOM();
    nameField.innerHTML="Errore! Città non trovata!"
    meteo_ico.classList.add("text-2xl")
    meteo_ico.innerHTML="¯\\_(ツ)_/¯"
    descr.innerHTML="RITENTA!"
}
}

/* info utili da json
  nome = post.name
  country = post.sys.country
  tempo = post.weather[0].main
  gradi max = post.main.temp_max 
  gradi min = post.main.temp_min
  umidità = post.main.humidity
  vento = post.wind.speed  
  /*{"coord":{
      "lon":-79.4163,
      "lat":43.7001},
  "weather":[
      {"id":802,
      "main":"Clouds",
      "description":"scattered clouds","icon":"03n"}],
   "base":"stations",
   "main":{"temp":272.06,
           "feels_like":272.06,
           "temp_min":271.03,
           "temp_max":273.33,
           "pressure":1015,
           "humidity":85},
    "visibility":10000,
    "wind":{
        "speed":0.89,
        "deg":355,
        "gust":2.24},
    "clouds":{"
        all":32},
    "dt":1649067013,
    "sys":{
        "type":2,
        "id":2043365,
        "country":"CA",
        "sunrise":1649069621,
        "sunset":1649116032},
        "timezone":-14400,
        "id":6167865,
        "name":"Toronto",
        "cod":200}*/