document.getElementById("menu").onclick = ()=>{
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("ul").style.display = "block";
    document.getElementById("menuCont").style.borderRight = "#43afa1 solid 4px";
    document.getElementById("menuCont").style.width = "50vw";
    document.getElementById("menuCont").style.animation = "menuAnimStart 0.3s";
}
document.getElementById("close").onclick = ()=>{
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("ul").style.display = "none";
    document.getElementById("menuCont").style.width = "fit-content";
    document.getElementById("menuCont").style.borderRight = "none";
    document.getElementById("menuCont").style.animation = "menuAnimEnd 0.3s";
}