const changePage = () =>{ 
    let page = document.getElementById("page");
    let page1 = document.getElementById("page1");
    page.classList.add("hidden");
    page1.classList.remove("hidden");
    obtainPos();
}
//MODULE FOR GEOLOCATING THE DEVICE
const obtainPos =()=>navigator.geolocation.getCurrentPosition(obtainPosOK,obtainPosKO,option);

const obtainPosOK=(pos)=> {
    if(navigator.geolocation){
        cord = pos.coords;
        weatherByCoord(cord.latitude,cord.longitude);
    }else{
      alert("Localizzazione non disponibile! Attivala o prova a ricercare per Città!");
    }
  }

const obtainPosKO=()=>{
    let layout = templateFail();
    renderingDOM(layout,"page1");
}
const option = {
    enableHighAccuracy: true,
};
