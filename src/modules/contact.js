import clearHTML from "./clear";
import beingused from "./head.js";
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
                            <h4>8 street, xxxvid, san franciso, california</h4>
                        </div>`
    content.append(section)
}
const contactHTML = () => {
    contactHTMLHeader()
    contactHTMLBody()
}
export default contactHTML