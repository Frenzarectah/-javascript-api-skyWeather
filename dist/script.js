const changePage = () =>{ 
    let page = document.getElementById("page");
    let page1 = document.getElementById("page1");
    page.classList.add("hidden");
    page1.classList.remove("hidden");
    start();
}
const resetDOM = () =>{
    let divs = document.getElementsByClassName("ut");
    for (let elem of divs) elem.innerText="";
}

