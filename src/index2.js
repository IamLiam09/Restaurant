import "./styles/main.scss";
import fish from "./assets/catalogimg/Barque_fish.png";
import burger from "./assets/catalogimg/burger.png";
import  chickencat from "./assets/catalogimg/complete_chicken.png";
import pie from "./assets/catalogimg/pie.png";
import egusi from "./assets/catalogimg/egusi.png";
import  uglyplantain from "./assets/catalogimg/uglyplantain.png";
import jollofrice from "./assets/catalogimg/fried_rice_chicken.png";
import popular from "./assets/catalogimg/clean_fried_rice.png"
import comp from "./assets/catalogimg/about_comp.png"
import chocolatecupcake from "./assets/catalogimg/chocolate_cupcake.png"
import chickenslect from "./assets/chicken.png"
import drink from "./assets/catalogimg/drink.png"
import review from "./assets/catalogimg/review_cust.png"
import complete_rice from "./assets/catalogimg/complete_rice.png"
import createdzig from "./assets/catalogimg/createdzig.png"
const Barque_fish = document.getElementById("barbeque-fish")
const burgerid = document.getElementById("burger")
const  pieid = document.getElementById("pie")
const chickenid = document.getElementById("chicken")
const plaintainid = document.getElementById("plaintain")
const  jollof_riceid = document.getElementById("jollof_rice")
const egusiid = document.getElementById("egusi")
const cupcakeid = document.getElementById("cupcake")
const compid = document.getElementById("about_comp")
const popularid = document.getElementById("popular_delicacies")
const pasteriesid = document.getElementById("pasteries")
const foreignid = document.getElementById("foreign")
const drinksid = document.getElementById("drinks")
const localid = document.getElementById("local")
const reviewid = document.getElementById("reviewimg")
const createdzigid = document.getElementById("createdzig")
const createdzigid1 = document.getElementById("createdzig1")
const createdzigid2 = document.getElementById("createdzig2")
const createdzigid3 = document.getElementById("createdzig3")
const createdzigid4 = document.getElementById("createdzig4")
const createdzigid5 = document.getElementById("createdzig5")
const hamburger = document.getElementById("hambuger")
const bugericon = document.querySelector("hambuger__burger")
const icon = document.getElementById("icon")
Barque_fish.src = fish
burgerid.src = burger
pieid.src = pie
chickenid.src = chickencat
plaintainid.src = uglyplantain
jollof_riceid.src = jollofrice
egusiid.src = egusi
cupcakeid.src = complete_rice
popularid.src = popular
compid.src = comp
pasteriesid.src = chocolatecupcake
foreignid.src = chickencat
drinksid.src = drink
localid.src = egusi
reviewid.src = review
createdzigid.src = createdzig
createdzigid1.src = createdzig
createdzigid2.src = createdzig
createdzigid3.src = createdzig
createdzigid4.src = createdzig
createdzigid5.src = createdzig
var boo = false
hamburger.addEventListener("click", open)
function open(){
    if(!boo){
        burgeric.classList.add("open")
        icon.classList.add("cover")
        icon.style.visibility = "visible"
        console.log(burger)
        console.log(icon)
        boo = true
    }else{
        burgeric.classList.remove("open")
        icon.classList.remove("cover")
        icon.style.visibility = "hidden"
        boo = false
    }
}
