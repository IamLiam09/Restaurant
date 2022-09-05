import "./styles/main.scss";
import index2 from "./assets/index2.png";
import chicken from "./assets/chicken.png";
import  ziglines from "./assets/ziglines.jpg";
import ziglines2 from "./assets/ziglines2.png";
import created from "./assets/createdzig.png";

const img = document.getElementById("plate")
const bg = document.getElementById("bgimage")
const ziglinesimg = document.getElementById("zigline__1")
const ziglines2img = document.getElementById("zigline__2")
const ziglines3img = document.getElementById("zigline__3")
const ziglines4img = document.getElementById("zigline__4")
const hamburger = document.getElementById("hambuger")
const burger = document.getElementById("burger")
const icon = document.getElementById("icon")
img.src = chicken
bg.src = index2
ziglinesimg.src = ziglines
ziglines2img.src = created
ziglines3img.src = ziglines2
ziglines4img.src = ziglines2
var boo = false
hamburger.addEventListener("click", open)
function open(){
    if(!boo){
        burger.classList.add("open")
        icon.classList.add("cover")
        icon.style.visibility = "visible"
        console.log(burger)
        console.log(icon)
        boo = true
    }else{
        burger.classList.remove("open")
        icon.classList.remove("cover")
        icon.style.visibility = "hidden"
        boo = false
    }
}

