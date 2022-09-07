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
const burgeric = document.querySelector(".hambuger__burger")
const icon = document.getElementById("icon")
const body = document.querySelector("body")
const content = document.getElementById("content")
img.src = chicken
bg.src = index2
ziglinesimg.src = ziglines
ziglines2img.src = created
ziglines3img.src = ziglines2
ziglines4img.src = ziglines2
var boo = false
hamburger.addEventListener("click", open)
window.addEventListener("scroll", standout)
// EventListner for the ripple effect for the links
buttons.addEventListener("click", addripples(e))
content.style.height = "100vh"
const buttons = document.querySelectorAll("a")
// a function to add a few syle to make the header stand out
function standout(){
    let header = document.querySelector("header");
    header.classList.toggle("extra", window.scrollY > 0)
}
function addripples(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetright;
    let ripples = documeent.createElement("span")
    ripples.style.left = x + "px"
    ripples.style.top = y + "px"
    this.appendChild(ripples)
    setTimeout(() => {
        ripples.remove()
    }, 1000)
}
function checker(){
    if(content.style.height === "100vh"){
        body.style.overflow = "hidden"
    }else{
        body.style.overflow = "auto"
    }
}
function open(){
    if(!boo){
        burgeric.classList.add("open")
        icon.classList.add("cover")
        icon.style.visibility = "visible"
        boo = true
    }else{
        burgeric.classList.remove("open")
        icon.classList.remove("cover")
        icon.style.visibility = "hidden"
        boo = false
    }
}
checker()


