import "./styles/main.scss";
import fish from "./assets/catalogimg/Barque_fish.png";
import burger from "./assets/catalogimg/burger.png";
import  chickencat from "./assets/catalogimg/complete_chicken.png";
import pie from "./assets/catalogimg/pie.png";
import egusi from "./assets/catalogimg/egusi.png";
import  uglyplantain from "./assets/catalogimg/uglyplantain.png";
import jollofrice from "./assets/catalogimg/fried_rice_chicken.png";
import popular from "./assets/catalogimg/clean_fried_rice.png";
import comp from "./assets/catalogimg/about_comp.png";
import chocolatecupcake from "./assets/catalogimg/chocolate_cupcake.png";
import drink from "./assets/catalogimg/drink.png";
import review from "./assets/catalogimg/review_cust.png";
import complete_rice from "./assets/catalogimg/complete_rice.png";
import createdzig from "./assets/catalogimg/createdzig.png";
const Barque = document.getElementById("barbeque-fish")
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
const burgeric = document.querySelector(".hambuger__burger")
const icon = document.getElementById("icon")
Barque.src = fish
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
const body = document.querySelector("body")
const content = document.getElementById("content")
var boo = false
var init = false;
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
window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("extra", window.scrollY > 0)
})
function checker(){
  if(content.style.height === "100vh"){
      body.style.overflow = "hidden"
  }else{
      body.style.overflow = "auto"
  }
}
if(window.innerWidth > 750){
  document.write("bable")
  let head = document.querySelector("header")
  head.classList.add("ingo")
}

var active = false
let prev1 = document.getElementById("prev1")
let next1 = document.getElementById("next1")
let prev2 = document.getElementById("prev2")
let next2 = document.getElementById("next2")
let prev3 = document.getElementById("prev3")
let next3 = document.getElementById("next3")
window.addEventListener("resize", function(){
  if(window.innerWidth < 780){
    active = true
    if(active){
      
      const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination1',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: next1,
          prevEl: prev1,
        },
  
      });
      const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination2',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: next2,
          prevEl: prev2,
        },
      });
      const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        loop: false,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination3',
        },
        // Navigation arrows
        navigation: {
          nextEl: next3,
          prevEl: prev3,
        },
    });
    }else{
      active = false;
    }
  }
})