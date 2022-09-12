import "./styles/main.scss";
import clearHTML from "./modules/clear.js"
import firstpage from "./modules/homepage.js"
import catalogHTML from "./modules/catalog.js"
import contactHTML from "./modules/contact.js"
import open from "./modules/hamburger.js"
firstpage()

const general = () => {
    const home = document.querySelector(".Home")
    const catalog = document.querySelector(".Catalog")
    const contact = document.querySelector(".Contact")
    const hamburger = document.getElementById("hambuger")
    const icon = document.getElementById("icon")
    hamburger.addEventListener("click", open)
    home.addEventListener("click", () => {
        clearHTML()
        firstpage()
        console.log("first")
    })
    catalog.addEventListener("click", () => {
        clearHTML()
        catalogHTML()
        console.log("second")
    })
    contact.addEventListener("click", () =>{
        clearHTML()
        contactHTML()
        console.log("Third")
    })
    if(icon.style.visibility === "visible" && icon.classList.contain(!"open")){
        icon.style.visibility = "hidden"
    }
}
general()
