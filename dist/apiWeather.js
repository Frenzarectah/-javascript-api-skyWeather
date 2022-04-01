const _TOKEN = "c304a9d6ab5ab3f90cd09826ab7e8bec";

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rome,italy&appid=${_TOKEN}`,{
            method: "get",
            mode:"no-cors",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
        return res.json();
    })
    .then(body=>{
        return body.json();
    })
    .catch(console.log("connessione fallita!"));