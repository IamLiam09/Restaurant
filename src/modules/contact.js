import headcomponent from "./head";
const contactHTMLHeader = () => {
    let heading = headcomponent()
    let content = document.querySelector("#content")
    let home = heading.querySelector(".Home")
    let contact = heading.querySelector(".Contact")
    home.classList.remove("active")
    contact.classList.add("active")
    content.append(heading)
    console.log("clicked")
}
export default contactHTMLHeader