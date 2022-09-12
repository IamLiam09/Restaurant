import beingused from "./head.js";
import fish from "../assets/catalogimg/Barque_fish.png";
import burger from "../assets/catalogimg/burger.png";
import  chickencat from "../assets/catalogimg/complete_chicken.png";
import pie from "../assets/catalogimg/pie.png";
import egusi from "../assets/catalogimg/egusi.png";
import  uglyplantain from "../assets/catalogimg/uglyplantain.png";
import jollofrice from "../assets/catalogimg/fried_rice_chicken.png";
import popular from "../assets/catalogimg/clean_fried_rice.png";
import comp from "../assets/catalogimg/about_comp.png";
import chocolatecupcake from "../assets/catalogimg/chocolate_cupcake.png";
import drink from "../assets/catalogimg/drink.png";
import review from "../assets/catalogimg/review_cust.png";
import complete_rice from "../assets/catalogimg/complete_rice.png";
import createdzig from "../assets/catalogimg/createdzig.png";
const catalogHTMLHeader = () => {
    let heading = beingused()
    let content = document.querySelector("#content")
    let home = heading.querySelector(".Home")
    let catalog = heading.querySelector(".Catalog")
    home.classList.remove("active")
    catalog.classList.add("active")
    content.append(heading)
}
const catalogHTMLBody = () => {
    let content = document.querySelector("#content")
    let main = document.createElement("main")
    let section = document.createElement("section")
    let menu__heading = document.createElement("div")
    let foodselection = document.createElement("div")
    let wrapper = document.createElement("div")
    let cont = document.createElement("div")
    // Classes for the created Element
    main.classList.add("menu")
    section.classList.add("category")
    menu__heading.classList.add("menu__heading")
    foodselection.classList.add("foodselection")
    foodselection.classList.add("swiper")
    foodselection.classList.add("swiper1")
    wrapper.classList.add("swiper-wrapper")
    // 
    cont.classList.add("cont")
    pasteries.id = "pasteries"
    cont.append(pasteries)
    // innerHTML
    menu__heading.innerHTML = ` 
                    <h2>Catalog Section</h2>
                    <div class="delicacies">
                        <div class="heading">
                            <h3><span>Delicacies</span></h3>
                            <div class="scrollers">
                                <!-- The arrow used for the carousel -->
                                <div class="holder" id="prev1">
                                    <i class='fa fa-less-than'></i>
                                </div>
                                <div class="holder" id="next1">
                                    <i class='fa fa-greater-than'></i>
                                </div>
                            </div>
                        </div>
                    </div>`
    // objecs added to the foood in selection
    const pasteries = new Food_in_selection("pasteries", chocolatecupcake, "Pasteries")
    const foreign = new Food_in_selection("foreign", "Foreign")
    const drinks = new Food_in_selection("drinks", "Drinks")
    const local = new Food_in_selection("local", "Local")
    // appended
    wrapper.append(pasteries)
    wrapper.append(foreign)
    wrapper.append(drinks)
    wrapper.append(local)
    section.append(menu__heading)
    foodselection.append(wrapper)
    section.append(foodselection)
    main.append(section)
    content.append(main)
}
// food in selection objects
function Food_in_selection(id, srcimg, desc){
    this.id = id
    this.srcimg = srcimg
    this.desc = desc
    let foodinselection = document.createElement("div")
    let cont = document.createElement("div")
    let img = document.createElement("img")
    let tileName = document.createElement("h3")
    foodinselection.classList.add("food_in_selection")
    foodinselection.classList.add("swiper-slide")
    cont.classList.add("cont")
    img.id = this.id
    img.src = this.srcimg
    tileName.innerText = this.desc
    cont.append(img)
    foodinselection.append(cont)
    foodinselection.append(tileName)
    return foodinselection
}
const catalogHTML = () => {
    catalogHTMLHeader()
    catalogHTMLBody()
}
export default catalogHTML