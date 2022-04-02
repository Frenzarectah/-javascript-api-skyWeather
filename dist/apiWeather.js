const _TOKEN = "c304a9d6ab5ab3f90cd09826ab7e8bec";

const  weatherBalloon = ( city )=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + city+ '&appid='+_TOKEN)  
    .then(resp =>{ return resp.json()}) // Convert data to json
    .then(data => console.log(data.weather));
  }
  
  window.onload = function() {
    weatherBalloon( 6167865 );
  }



 /*fetch(`https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=${_TOKEN}`,{
            method: "get",
            mode:"no-cors",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(Response => {
        console.log(Response);
    })
    .catch(console.log("connessione fallita!"));*/