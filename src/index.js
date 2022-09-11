import "./styles/main.scss";
import firstpage from "./modules/homepage.js"
import open from "./modules/hamburger.js"
import clearHTML from "./modules/clear.js"
import catalogHTML from "./modules/catalog.js"
import contactHTMLHeader from "./modules/contact.js"
firstpage()
const hamburger = document.getElementById("hambuger")
hamburger.addEventListener("click", open)
const home = document.querySelector(".Home")
const catalog = document.querySelector(".Catalog")
const contact = document.querySelector(".Contact")
catalog.addEventListener("click", () => {
    clearHTML()
    catalogHTML()
})
contact.addEventListener("click", () =>{
    clearHTML()
    contactHTMLHeader()
})
