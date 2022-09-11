import "./styles/main.scss";
import index2 from "./assets/index2.png";
import chick from "./assets/chicken.png";
import  ziglines from "./assets/ziglines.jpg";
import ziglines2 from "./assets/ziglines2.png";
import created from "./assets/createdzig.png";
// const plate = document.getElementById("plate")
// const bg = document.getElementById("bgimage")
// const ziglinesimg = document.getElementById("zigline__1")
// const ziglines2img = document.getElementById("zigline__2")
// const ziglines3img = document.getElementById("zigline__3")
// const ziglines4img = document.getElementById("zigline__4")
// const hamburger = document.getElementById("hambuger")
// const burgeric = document.querySelector(".hambuger__burger")
// const icon = document.getElementById("icon")
// const body = document.querySelector("body")
const content = document.querySelector("#content")
// plate.src = chick
// bg.src = index2
// ziglinesimg.src = ziglines
// ziglines2img.src = created
// ziglines3img.src = ziglines2
// ziglines4img.src = ziglines2
var boo = false
var chek = document.createElement("header")
content.innerHTML = chek
console.log(content)
console.log(chek)
// content.innerHTML = ""
content.innerHTML = `<p>Hi</p>`
// The header html
// The markup for the rest of the home page
const addToHomepage = () => {
    let homePageHtml = `<div class="">
                            <img src="" alt="" class="bg__image" id="bgimage">
                        </div>
                        <div class="wording">
                            <h1 class="wording__word">All Delicacies</h1>
                            <h1 class="wording__african">African</h1>
                            <p class="wording__list">Egba, fufu, egusi, Chicken</p>
                            <button class="wording__booknow">book now</button>
                        </div>
                        <div class="ziglines">
                            <img src="" alt="" class="ziglines__1" id="zigline__1">
                            <img src="" alt="" class="ziglines__2" id="zigline__2">
                            <img src="" alt="" class="ziglines__3" id="zigline__3">
                            <img src="" alt="" class="ziglines__4" id="zigline__4">
                            <div class="circle"></div>
                            <div class="circle2"></div>
                            <div class="circle3"></div>
                        </div>
                        <div class="plate">
                            <img src="" class="plate__image" id="plate">
                        </div>
                        <div class="socials">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-facebook"></i>
                        </div>`
    return homePageHtml
}
// Markup being added to the content
const homepage = () => {
   addToHomepage()
}
// document.onload = homepage()
// hamburger.addEventListener("click", open)
window.addEventListener("scroll", standout)
// EventListner for the ripple effect for the links
content.style.height = "100vh"
// a function to add a few syle to make the header stand out
function standout(){
    let header = document.querySelector("header");
    header.classList.toggle("extra", window.scrollY > 0)
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
if(window.innerWidth > 750){
    let head = document.querySelector("header")
    head.classList.add("ingo")
}
