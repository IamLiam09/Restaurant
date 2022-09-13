import clearHTML from "./clear.js";
import beingused from "./head.js";
import open from "./hamburger.js"
import firstpage from "./homepage.js"
import catalogHTML from "./catalog.js"
const contactHTMLHeader = () => {
    let heading = beingused()
    let content = document.querySelector("#content")
    let home = heading.querySelector(".Home")
    let contact = heading.querySelector(".Contact")
    home.classList.remove("active")
    contact.classList.add("active")
    content.append(heading)
}
const contactHTMLBody = () => {
    const section = document.createElement("section")
    section.classList.add("contact")
    section.innerHTML = `
                        <div class="consquare">
                            <h1>Contact us</h1>
                            <h4>Open hours: 8AM-9PM</h4>
                            <h4>Call us: 09123917499</h4>
                            <h4>8 street, san franciso, california</h4>
                        </div>`
    content.append(section)
}
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
}
const contactHTML = () => {
    contactHTMLHeader()
    contactHTMLBody()
    window.addEventListener("Load", general())
}
export default contactHTML