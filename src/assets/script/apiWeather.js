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
const searchWeather = () =>{
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
        //template(post,"page1");
        const page = document.getElementById("page1");
        const layout = template(post);
        renderingDOM(layout,page);
    });
    console.log("loading...");
}
const weatherByCoord = (lat,long)=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&lang=it&appid='+_TOKEN)  
    .then(data => {
        return data.json();
    })
    .then(post => {
        //template(post,"page1"); 
        const page = document.getElementById("page1");
        const layout = template(post);
        renderingDOM(layout,page);
    });
    }