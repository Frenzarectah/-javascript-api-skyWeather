const _TOKEN = "c304a9d6ab5ab3f90cd09826ab7e8bec";

const icon ={
    "Clear":"./src/assets/meteo_icon/sun.png",
    "Thunderstorm":"./src/assets/meteo_icon/thunderstorm.png",
    "Drizzle":"./src/assets/meteo_icon/dizzle.png",
    "Mist":"./src/assets/meteo_icon/fog.png",
    "Rain":"./src/assets/meteo_icon/heavy_rain.png",
    "Clouds":"./src/assets/meteo_icon/cloud.png"
};
//FUNCTION WHICH STARTS WEATHERBYCITY ROUTINE
const searchWeath = () =>{
    let searchfield = document.getElementById("findCity").value;
    weatherByCity(searchfield);
}

//THIS ARE TWO DIFFERENT REQUEST TO OPENWEATHER' API
const weatherByCity = (city)=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=it&appId="+_TOKEN)
    .then(data=>{ 
        return data.json();
    })
    .then(post =>{ 
        template(post,"page1");
    });
    console.log("loading...");
}
const weatherByCoord = (lat,long)=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&lang=it&appid='+_TOKEN)  
    .then(data => {
        return data.json();
        })
    .then(post => {
        template(post,"page1"); 
    });
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