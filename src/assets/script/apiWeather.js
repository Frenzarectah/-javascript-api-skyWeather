/*this is the token for the access to openweather api, I know that it is unsecure to
leave it in here, but it is only for formation purpose.*/

const _TOKEN = "c304a9d6ab5ab3f90cd09826ab7e8bec";

//An object which contain several custom images according to the real state of the
//weather returned by the API

const icon ={
    "Clear":"./src/assets/meteo_icon/sun.png",
    "Thunderstorm":"./src/assets/meteo_icon/thunderstorm.png",
    "Drizzle":"./src/assets/meteo_icon/dizzle.png",
    "Mist":"./src/assets/meteo_icon/fog.png",
    "Rain":"./src/assets/meteo_icon/heavy_rain.png",
    "Clouds":"./src/assets/meteo_icon/cloud.png"
};
//this is the funct which extracts the typed city name into the searchfield and
//runs the weatherByCity routine
const  searchWeather = () =>{
    let searchfield = document.getElementById("findCity").value;
    weatherByCity(searchfield);
}

//this are the two different query to the openweatherAPI
//first provide a searching of a city by his name
const weatherByCity = (city)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=it&appId="+_TOKEN 
    fetch(url)
    .then(data=>{ 
        return data.json();
    })
    .then(post =>{ 
        const page = document.getElementById("page1");
        const layout = template(post);
        renderingDOM(layout,page);
    });
    console.log("loading...");
}
//this is a function to extract the weather at given coordinates
const weatherByCoord = (lat,long)=> {
    const url ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&lang=it&appid='+_TOKEN
    fetch(url)  
    .then(data => {
        return data.json();
    })
    .then(post => { 
        const page = document.getElementById("page1");
        const layout = template(post);
        renderingDOM(layout,page);
    });
    }