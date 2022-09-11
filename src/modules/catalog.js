import headcomponent from "./head";
const catalogHTML = () => {
    let heading = headcomponent()
    let content = document.querySelector("#content")
    let home = heading.querySelector(".Home")
    let catalog = heading.querySelector(".Catalog")
    home.classList.remove("active")
    catalog.classList.add("active")
    content.append(heading)
}
export default catalogHTML