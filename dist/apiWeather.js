let pos = ()=>{
        alert(navigator.geolocation.getCurrentPosition((position) => {
        position.coords.latitude, position.coords.longitude;
      }));
}

/*const _TOKEN = "c304a9d6ab5ab3f90cd09826ab7e8bec";

const pos = navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
  });
const displayRes = (result)=> console.log(result);

const  weatherBalloon = ( city )=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + city+ '&appid='+_TOKEN)  
    .then(data => {
        return data.json();
        })
        .then(post => {
        displayRes(post.name); //ritorna coordinate
        return post.coord;
        });
    }
  window.onload = function() {
   console.log(weatherBalloon( 6167865 ));
   document.getElementById("faind").onclick=()=>{
    const pos = navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
      });
      alert(pos);
}

}

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