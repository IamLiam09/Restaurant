import "./styles/main.scss";
import clearHTML from "./modules/clear.js"
import firstpage from "./modules/homepage.js"
import contactHTML from "./modules/contact.js"
import catalogHTML from "./modules/catalog.js"
import open from "./modules/hamburger.js"
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
    })
    catalog.addEventListener("click", () => {
        clearHTML()
        catalogHTML()
    })
    contact.addEventListener("click", () =>{
        clearHTML()
        contactHTML()
    })
}
firstpage()
general()
