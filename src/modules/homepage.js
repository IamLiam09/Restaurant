import index2 from "../assets/index2.png";
import  ziglinesimg from "../assets/ziglines.jpg";
import ziglines2img from "../assets/ziglines2.png";
import created from "../assets/createdzig.png";
import chick from "../assets/chicken.png";
import beingused from "./head.js";
import open from "./hamburger.js"
import clearHTML from "./clear.js"
import catalogHTML from "./catalog.js"
import contactHTML from "./contact.js"
const firstpage = () => {
    // creating the element that would be added to the page
    let heading = beingused()
    let content = document.querySelector("#content")
    let bgimg = document.createElement("img")
    let wording = document.createElement("div")
    let ziglines = document.createElement("div")
    let plate = document.createElement("div")
    let plateimg = document.createElement("img")
    let ziglines1 = document.createElement("img")
    let ziglines2 = document.createElement("img")
    let ziglines3 = document.createElement("img")
    let ziglines4 = document.createElement("img")
    let partzig = document.createElement("div")
    let div = document.createElement("div")
    let socials= document.createElement("div")
    const body = document.querySelector("body")
    // innerHTML for those I feel need to be inner html
    // Wording HTML
    wording.classList.add("wording")
    wording.innerHTML = `<h1 class="wording__word">All Delicacies</h1>
                        <h1 class="wording__african">African</h1>
                        <p class="wording__list">Egba, fufu, egusi, Chicken</p>
                        <button class="wording__booknow">book now</button>`
    // ziglines HTML
    ziglines.classList.add("ziglines")
    // ziglines classNames
    ziglines1.classList.add("ziglines__1")
    ziglines2.classList.add("ziglines__2")
    ziglines3.classList.add("ziglines__3")
    ziglines4.classList.add("ziglines__4")
    // ziglines Id
    ziglines1.id = "ziglines__1"
    ziglines2.id = "ziglines__2"
    ziglines3.id = "ziglines__3"
    ziglines4.id = "ziglines__4"
    // ziglines img source
    ziglines1.src = ziglinesimg
    ziglines2.src = created
    ziglines3.src = ziglines2img
    ziglines4.src = ziglines2img
    partzig.innerHTML = `
                            <div class="circle"></div>
                            <div class="circle2"></div>
                            <div class="circle3"></div>`
    ziglines.append(ziglines1, ziglines2, ziglines3, ziglines4, partzig)
    bgimg.classList.add("bg__image")
    bgimg.id = "bgimage"
    bgimg.src = index2
    plate.classList.add("plate")
    plateimg.classList.add("plate__image")
    plateimg.id = "plate"
    plateimg.src = chick
    // Social div
    socials.classList.add("socials")
    socials.innerHTML = `
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-facebook"></i>`
    plate.append(plateimg)
    div.append(bgimg) 
    content.append(heading, div, wording, ziglines, plate, socials)
    // Checker for the width of the screen
    content.style.height = "100%"
    function checker(){
        if(content.style.height === "100%"){
            body.style.overflow = "hidden"
        }
    }
    checker()
    window.addEventListener("Load", general())
}
const general = () => {
    const contact = document.querySelector(".Contact")
    const catalog = document.querySelector(".Catalog")
    const hamburger = document.getElementById("hambuger")
    hamburger.addEventListener("click", open)
    catalog.addEventListener("click", () => {
        clearHTML()
        catalogHTML()
    })
    contact.addEventListener("click", () =>{
        clearHTML()
        contactHTML()
    })
}
// window Event Listeners
export default firstpage