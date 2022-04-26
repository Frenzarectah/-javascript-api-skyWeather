const changePage = () =>{ 
    let page = document.getElementById("page");
    let page1 = document.getElementById("page1");
    page.classList.add("hidden");
    page1.classList.remove("hidden");
    obtainPos();
}
const resetDOM = () =>{
    let divs = document.getElementsByClassName("ut");
    for (let elem of divs) elem.innerText="";
}
//MODULE FOR GEOLOCATING THE DEVICE
const obtainPos =()=>navigator.geolocation.getCurrentPosition(success,error,optional);
const success=(pos)=> {
    if(navigator.geolocation){
        cord = pos.coords;
        weatherByCoord(cord.latitude,cord.longitude);
    }else{
      console.log("GeoLoc not available!");
    }
  }
const error=()=>{
    let layout = templateFail();
    renderingDOM(layout,"page1");
}
const optional = {
    enableHighAccuracy: true,
};
