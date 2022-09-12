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
    let newItems = document.createElement("section")
    let newMenuWrapper = document.createElement("div")
    let newMenuSection = document.createElement("section")
    let bestItems = document.createElement("section")
    let bestMenuWrapper = document.createElement("div")
    let bestMenuSection = document.createElement("section")
    // var
    const newHeadingHTML = headingNew()
    const bestHeadingHTML = headingBest()
    const article1div = article1()
    const article2div  = article2()
    const reviewdiv = reviewcata()
    // Classes for the created Element
    main.classList.add("menu")
    section.classList.add("category")
    menu__heading.classList.add("menu__heading")
    foodselection.classList.add("foodselection")
    foodselection.classList.add("swiper")
    foodselection.classList.add("swiper1")
    wrapper.classList.add("swiper-wrapper")
    cont.classList.add("cont")
    // The new items classList
    newItems.classList.add("menu__newitems")
    newMenuWrapper.id = "swiper-wrapper3"
    newMenuWrapper.classList.add("swiper-wrapper")
    newMenuSection.classList.add("__newmenu")
    newMenuSection.classList.add("swiper")
    newMenuSection.classList.add("swiper3")
    // The best items classList
    bestItems.classList.add("menu__bestseller")
    bestMenuWrapper.id = "swiper-wrapper2"
    bestMenuWrapper.classList.add("swiper-wrapper")
    bestMenuSection.classList.add("__newmenu")
    bestMenuSection.classList.add("swiper")
    bestMenuSection.classList.add("swiper2")
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
    const foreign = new Food_in_selection("foreign", chickencat, "Foreign")
    const drinks = new Food_in_selection("drinks", drink,  "Drinks")
    const local = new Food_in_selection("local", egusi, "Local")
    // objects of __newMenuWrapper
    const egusidiv = new Newmain("egusi", egusi, "Egusi", "$5", "__newmain")
    const jollofRice = new Newmain("jolloRice", complete_rice, "Jollof Rice", "$3", "__newmain")
    const plaintain = new Newmain("plaintain", uglyplantain, "Plaintain", "$2", "__newmain")
    const friedRice = new Newmain("friedrice", jollofrice, "Fried Rice", "$8", "__newmain")
    // objects of __bestmneuWrapper
    const barbequediv = new Newmain("barbeque-fish", fish,"Barbeque Fish", "$6", "__bestmain")
    const burgerdiv = new Newmain("burger", burger,"Burger", "$10", "__bestmain")
    const chickendiv = new Newmain("chicken", chickencat, "Chicken","$9", "__bestmain")
    const piediv = new Newmain("pie", pie, "Pie", "$4", "__bestmain")
    // appended
    wrapper.append(pasteries)
    wrapper.append(foreign)
    wrapper.append(drinks)
    wrapper.append(local)
    // New menu wrapper
    newMenuWrapper.append(egusidiv)
    newMenuWrapper.append(jollofRice)
    newMenuWrapper.append(plaintain)
    newMenuWrapper.append(friedRice)
    // Best menu wrapper
    bestMenuWrapper.append(barbequediv)
    bestMenuWrapper.append(burgerdiv)
    bestMenuWrapper.append(chickendiv)
    bestMenuWrapper.append(piediv)
    // best append
    bestMenuSection.append(bestMenuWrapper)
    bestItems.append(bestHeadingHTML)
    bestItems.append(bestMenuSection)
    // New append
    newMenuSection.append(newMenuWrapper)
    newItems.append(newHeadingHTML)
    newItems.append(newMenuSection)
    // other append
    section.append(menu__heading)
    foodselection.append(wrapper)
    section.append(foodselection)
    // main append
    main.append(section)
    main.append(bestItems)
    main.append(newItems)
    main.append(article1div)
    main.append(article2div)
    main.append(reviewdiv)
    // content append
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
function Newmain(id, srcimg, name, price, cls){
    this.id = id
    this.srcimg = srcimg
    this.name = name 
    this.price = price
    this.cls = cls
    // created elements
    const newmain = document.createElement("div")
    const cont = document.createElement("div")
    const img = document.createElement("img")
    const nameFood = document.createElement("h4")
    const star = document.createElement("div")
    const i = document.createElement("i")
    const pricing = document.createElement("div")
    const pricingdigit = document.createElement("h4")
    const i2 = document.createElement("i")
    const i3 = document.createElement("i")
    const i4 = document.createElement("i")
    const i5 = document.createElement("i")
    // classes
    i.classList.add("fas")
    i.classList.add("fa-star")
    i2.classList.add("fas")
    i2.classList.add("fa-star")
    i3.classList.add("fas")
    i3.classList.add("fa-star")
    i4.classList.add("fas")
    i4.classList.add("fa-star")
    i5.classList.add("fas")
    i5.classList.add("fa-star")
    newmain.classList.add(this.cls)
    newmain.classList.add("swiper-slide")
    cont.classList.add("cont")
    pricing.classList.add("pricing")
    star.classList.add("star")
    // passing the parameters to the right value
    img.id = this.id
    img.src = this.srcimg
    nameFood.innerText = this.name
    pricingdigit.innerText = this.price
    // appending the values
    pricing.append(pricingdigit)
    star.append(i, i2, i3, i4, i5)
    cont.append(img)
    newmain.append(cont)
    newmain.append(nameFood)
    newmain.append(star)
    newmain.append(pricing)
    return newmain
}
// The heading of the New catalog
const headingNew = () => {
    const heading = document.createElement('div')
    heading.classList.add("heading")
    heading.innerHTML = `<h3>New<span class="yellowtext"> items</span></h3>
                        <div class="scrollers">
                            <div class="holder" id="prev3">
                                <i class='fa fa-less-than'></i>
                            </div>
                            <div class="holder" id="next3">
                                <i class='fa fa-greater-than'></i>
                            </div>
                        </div>`
    return heading
}
// The heading of the Best Sellers 
const headingBest = () => {
    const heading = document.createElement('div')
    heading.classList.add("heading")
    heading.innerHTML = `<h3><span class="yellowtext">B</span>estseller</h3>
                        <div class="scrollers">
                            <!-- The arrow used for the carousel -->
                            <div class="holder" id="prev2">
                                <i class='fa fa-less-than'></i>
                            </div>
                            <div class="holder" id="next2">
                                <i class='fa fa-greater-than'></i>
                            </div>
                        </div>`
    return heading
}
const article1 = () => {
    const section = document.createElement("section")
    section.classList.add("article")
    section.innerHTML = `<h2><span class="yellowtext">Popular</span> delicacies</h4>`
    const insection = document.createElement("section")
    const writeup = document.createElement("div")
    const writeh2 = document.createElement("h2")
    const fillercont = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const writeupimg = document.createElement("img")
    insection.classList.add("article__details")
    const imgdiv = new imgCont(createdzig, createdzig, popular)
    writeup.classList.add("__writeup")
    writeupimg.id = "createdzig2"
    writeupimg.class = "createdzig"
    writeupimg.src = createdzig
    writeh2.innerText = "Fried rice & chicken"
    fillercont.classList.add("fillercont")
    fillercont.innerHTML = `
                        <div class="fillerwords">Tasty</div>
                        <div class="fillerwords">Fast</div>
                        <div class="fillerwords">Foreign</div>    
`
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus, commodi velit quas error in vero dolorem culpa obcaecati atque porro exercitationem. Earum id at reprehenderit non asperiores, quaerat labore tempore fuga necessitatibus expedita recusandae tempora facilis dicta, quo repudiandae sint nam tenetur ad, sequi quis? Aliquid alias excepturi iusto omnis voluptates nisi dolore natus."
    button.classList.add("wording__booknow")
    button.innerText = "Read completely"
    console.log(imgdiv)
    writeup.append(writeupimg)
    writeup.append(writeh2)
    writeup.append(fillercont)
    writeup.append(p)
    writeup.append(button)
    insection.append(imgdiv)
    insection.append(writeup)
    section.append(insection)
    function imgCont(img1, img2, img3){
        this.img1 = img1
        this.img2 = img2
        this.img3 = img3
        // created element
        const imgcont = document.createElement("div")
        const img1div = document.createElement("img")
        const img2div = document.createElement("img")
        const img3div = document.createElement("img")
        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        imgcont.classList.add("__imgcont")
        // img id
        img1div.id = "createdzig"
        img2div.id = "createdzig1"
        img3div.id = "popular_delicacies"
        // img src
        img1div.src = this.img1
        img2div.src = this.img2
        img3div.src = this.img3
        // classes
        img1div.classList.add("createdzig")
        img2div.classList.add("createdzig1")
        div1.classList.add("circle")
        div2.classList.add("circle2")
        // appending them the div container
        imgcont.append(img1div)
        imgcont.append(img2div)
        imgcont.append(div1)
        imgcont.append(div2)
        imgcont.append(img3div)
        return imgcont
    }
    return section
                }
const article2 = () => {
    const section  = document.createElement("section")
    section.classList.add("article2")
    section.innerHTML = `
                <section class="article2__details">
                    <div class="__writeup">
                        <h2><span class="yellowtext">About</span> company</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita vero quo aut aliquid quia minus, iste nemo perferendis odio repellat ab cumque, atque in fugiat quaerat, hic qui provident ad possimus error quasi eos laborum. Repellat, expedita nisi! Natus tenetur dolorum maiores blanditiis obcaecati numquam, perspiciatis inventore autem aspernatur veniam modi consequatur repellendus nihil.</p>
                        <button class="wording__booknow">Read completely</button>
                    </div>
                    <div class="__imgcont">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="square"></div>
                        <img src="" id="createdzig3" class="createdzig">
                        <img src="" id="createdzig4" class="createdzig">
                        <img src="" id="createdzig5" class="createdzig">
                        <img src="" alt="" id="about_comp"></div>
                </section>`
    return section
}
const reviewcata = () => {
    const section  = document.createElement("section")
    section.classList.add("review")
    section.innerHTML = `
                <h2><span class="yellowtext">Review</span> of our client</h4>
                <section class="details">
                    <div class="__imgcont"><img src="" alt="" id="reviewimg"></div>
                    <div class="details__writeup">
                        <h3>Mike</h3>  
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates distinctio ducimus eos consectetur. Dignissimos corrupti atque hic eum, at ea, veritatis exercitationem officiis laborum ab nesciunt culpa natus nisi.</p>         
                    </div>
                </section>`
    return section
}

const catalogHTML = () => {
    catalogHTMLHeader()
    catalogHTMLBody()
}
export default catalogHTML